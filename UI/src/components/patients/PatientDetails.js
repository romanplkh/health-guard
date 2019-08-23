import React, { useContext, useState, useEffect } from 'react';
import PatientContext from '../context/patientContext/patientContext';
import Spinner from '../layout/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleLeft,
	faEdit,
	faTrash
} from '@fortawesome/free-solid-svg-icons';

const PatientDetails = () => {
	const patientCTX = useContext(PatientContext);
	const { selectedPatient, editMode } = patientCTX;

	const {
		setEditMode,
		resetEditMode,
		updateRecord,
		clearCurrentRecord,
		deleteRecord
	} = patientCTX.actions;

	const [updatedRecord, setUpdatedRecord] = useState({});

	useEffect(() => {
		if (selectedPatient !== null) {
			setUpdatedRecord(selectedPatient);
		} /* else {
			setUpdatedRecord({
				email: '',
				phone: '',
				firstName: '',
				lastName: ''
			});
		} */
	}, [selectedPatient]);

	const { email, phone, firstName, lastName } = updatedRecord;

	const onRecordTextChange = e => {
		setUpdatedRecord({ ...updatedRecord, [e.target.name]: e.target.value });
	};

	const onUpdateSubmit = e => {
		e.preventDefault();

		if (selectedPatient !== null) {
			updateRecord(updatedRecord);
			clearCurrentRecord();
		}

		setUpdatedRecord({
			email: '',
			phone: '',
			firstName: '',
			lastName: ''
		});
	};

	if (!selectedPatient) {
		return (
			<h2 className="text-center mt-5">
				<FontAwesomeIcon
					icon={faArrowAltCircleLeft}
					size="lg"
					className="mr-2"
				/>
				Select Patient
			</h2>
		);
	}

	if (selectedPatient.image === null) {
		return <Spinner />;
	}
	return (
		<React.Fragment>
			<div className="card mb-3" style={{ width: '20rem' }}>
				<div className="row justify-content-center pt-2">
					<img
						src={selectedPatient.image}
						className="img-thumbnail "
						alt="..."
						style={{ width: '10rem' }}
					/>
				</div>

				<div className="card-body">
					<h5 className="card-title">
						{selectedPatient.firstName}&nbsp; {selectedPatient.lastName}
					</h5>
					<ul className="list-group list-group-flush mb-3">
						<li className="list-group-item">Email: {selectedPatient.email}</li>
						<li className="list-group-item">Phone: {selectedPatient.phone}</li>
						<li className="list-group-item">Type: {selectedPatient.type}</li>
					</ul>
					<div className="float-right">
						<button className="btn btn-warning" onClick={setEditMode}>
							<FontAwesomeIcon icon={faEdit} className="mr-2" />
							Edit
						</button>
						<button
							className="btn btn-danger ml-2"
							onClick={() => deleteRecord(selectedPatient._id)}
						>
							<FontAwesomeIcon icon={faTrash} className="mr-2" />
							Delete
						</button>
					</div>
				</div>
			</div>
			<br />

			{editMode && (
				<form className="mx-5 w-100 mb-5">
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							name="firstName"
							className="form-control"
							value={firstName}
							onChange={onRecordTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							name="lastName"
							className="form-control"
							value={lastName}
							onChange={onRecordTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={email}
							onChange={onRecordTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							name="phone"
							className="form-control"
							value={phone}
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							onChange={onRecordTextChange}
						/>
					</div>

					<div className="d-flex justify-content-end">
						<button
							type="button"
							className="btn btn-primary"
							onClick={onUpdateSubmit}
						>
							Save
						</button>
						<button
							type="button"
							className="btn btn-secondary ml-3"
							onClick={resetEditMode}
						>
							Cancel
						</button>
					</div>
				</form>
			)}
		</React.Fragment>
	);
};

export default PatientDetails;
