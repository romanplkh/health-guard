import React from 'react';
import PatientList from '../patients/PatientList';
import PatientDetails from '../patients/PatientDetails';
import { Link } from 'react-router-dom';

const Patients = ({ history }) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-8 col-sm-12 ">
					<h1 className="display-4 text-center mt-3">Patients</h1>
					<Link
						to="patients/add"
						className="btn btn-outline-success float-right mb-3"
					>
						Add
					</Link>
					<Link to="/" className="btn btn-outline-primary float-left mb-3">
						There will be search
					</Link>
					<PatientList history={history} />
				</div>
				<div className="col-xl-4 col d-xl-block d-none">
					<h1 className="display-4 text-center mt-3 mb-5">Details</h1>
					<div className="row justify-content-center">
						<PatientDetails />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Patients;
