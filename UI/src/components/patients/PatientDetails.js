import React, { useContext, useEffect } from 'react';
import PatientContext from '../context/patientContext/patientContext';

const PatientDetails = () => {
	const patientCTX = useContext(PatientContext);
	const { selectedPatient } = patientCTX;

	if (!selectedPatient) {
		return <h2>Select Patient</h2>;
	}

	const generatePicture = () => {
		return `http://lorempixel.com/200/250/people/${Math.floor(
			Math.random() * 10
		)}`;
	};

	return (
		<div className="row flex-column">
			<div className="card mb-3 mx-auto" style={{ width: '540px' }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={generatePicture()} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">
								{selectedPatient.firstName} {/*  */}
								{selectedPatient.lastName}
							</h5>
							<ul className="list-group list-group-flush mb-3">
								<li className="list-group-item">
									Email: {selectedPatient.email}
								</li>
								<li className="list-group-item">
									Phone: {selectedPatient.phone}
								</li>
							</ul>

							<button className="btn btn-warning">Edit</button>
							<button className="btn btn-danger ml-2">Delete</button>
						</div>
					</div>
				</div>
			</div>

			<br />

			<form className="mx-5">
				<div class="form-group">
					<label>First Name</label>
					<input
						type="text"
						class="form-control"
						value={selectedPatient.firstName}
						disabled
					/>
				</div>
				<div class="form-group">
					<label>Last Name</label>
					<input
						type="text"
						class="form-control"
						value={selectedPatient.lastName}
						disabled
					/>
				</div>
				<div class="form-group">
					<label>Email address</label>
					<input
						type="email"
						class="form-control"
						value={selectedPatient.email}
						disabled
					/>
				</div>
				{/*Show only when clicked edit */}
				<div className="d-flex justify-content-end">
					<button type="button" class="btn btn-primary">
						Save
					</button>
					<button type="button" class="btn btn-secondary ml-3">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default PatientDetails;
