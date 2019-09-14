import React, { useContext } from 'react';
import AppointmentList from '../appointments/AppointmentList';

const Doctors = ({ history }) => {
	return (
		<div>
			<div className="col">
				<h1 className="display-4 text-center mt-3">Appointments</h1>
			</div>
			<div>
				<AppointmentList />
			</div>
		</div>
	);
};

export default Doctors;
