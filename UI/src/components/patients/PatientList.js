import React, { useContext, useEffect, Fragment } from 'react';
import PatientContext from '../context/patientContext/patientContext';
import PatientItem from './PatientItem';
import Pagination from '../layout/Pagination';
import PersonsList from '../persons-list/PersonsList';

const PatientList = ({ history }) => {
	const patientCTX = useContext(PatientContext);
	const { patients, details } = patientCTX;
	const { getRecords, getRecord } = patientCTX.actions;

	return (
		<Fragment>
			<table className="table table-striped mt-3">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					<PersonsList
						getRecords={getRecords}
						getRecord={getRecord}
						element={PatientItem}
						data={patients}
					/>
				</tbody>
			</table>

				{details && (
					<Pagination {...details} history={history} getRecords={getRecords} />
				)}
			
		</Fragment>
	);
};

export default PatientList;
