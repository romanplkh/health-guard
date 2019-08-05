import React, { useState, useContext, useEffect } from 'react';
import PatientContext from '../context/patientContext/patientContext';

const AddForm = ({ history }) => {
	const patientCTX = useContext(PatientContext);

	const { addPatient, resetError } = patientCTX.actions;
	const { error, addedRecord } = patientCTX;

	const [patient, setPatient] = useState({
		email: '',
		phone: '',
		firstName: '',
		lastName: ''
	});

	const onTextChange = e => {
		setPatient({ ...patient, [e.target.name]: e.target.value });
	};

	const onCancelAdd = () => {
		setPatient({});
		resetError();
		history.push('/patients');
	};

	useEffect(() => {
		if (addedRecord) {
			resetError()
			history.push('/patients');
		}

		//eslint-disable-next-line
	}, [error, addedRecord]);

	const onAddPatientSubmit = e => {
		e.preventDefault();
		addPatient(patient);
	};

	const { email, phone, firstName, lastName } = patient;

	return (
		<div className="row mt-3">
			<div className="col-md-5 d-block mx-auto">
				<h1 className="display-4 mb-5">Add Patient</h1>
				<form onSubmit={onAddPatientSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							name="firstName"
							className="form-control"
							value={firstName}
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							name="lastName"
							className="form-control"
							value={lastName}
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={email}
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							name="phone"
							className="form-control"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							value={phone}
							onChange={onTextChange}
						/>
					</div>

					<div className="d-flex justify-content-end">
						<input
							type="submit"
							value="Save"
							className="btn btn-primary"
							onClick={onAddPatientSubmit}
						/>

						<button
							type="button"
							className="btn btn-secondary ml-3"
							onClick={onCancelAdd}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddForm;
