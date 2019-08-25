import React, { useContext } from 'react';
import DoctorList from '../doctors/DoctorList';

import { Link } from 'react-router-dom';
import doctorContext from '../context/doctorContext/doctorContext';
import PersonDetails from '../person-details/PersonDetails';

const Doctors = ({ history }) => {
	const doctorCTX = useContext(doctorContext);
	const { selectedDoctor, editMode } = doctorCTX;

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-8 col-sm-12 ">
					<h1 className="display-4 text-center mt-3">Doctors</h1>
					<Link
						to="doctors/add"
						className="btn btn-outline-success float-right mb-3"
					>
						Add
					</Link>
					<Link to="/" className="btn btn-outline-primary float-left mb-3">
						There will be search
					</Link>
					<DoctorList history={history} />
				</div>
				<div className="col-xl-4 col d-xl-block d-none">
					<h1 className="display-4 text-center mt-3 mb-5">Details</h1>
					<div className="row justify-content-center">
						{/* <PatientDetails /> */}
						<PersonDetails
							data={selectedDoctor}
							actions={doctorCTX.actions}
							editMode={editMode}
							occupation={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctors;
