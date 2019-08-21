import React, { useContext, useEffect, Fragment } from 'react';
import PatientContext from '../context/patientContext/patientContext';
import PatientItem from './PatientItem';
import Pagination from '../layout/Pagination';

const PatientList = ({ history }) => {
	const patientCTX = useContext(PatientContext);

	const { patients, details } = patientCTX;

	const { getRecords, getRecord } = patientCTX.actions;

	useEffect(() => {
		getRecords();
		//eslint-disable-next-line
	}, []);

	const onPatientClick = id => {
		getRecord(id);
	};

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
					{patients &&
						patients.map(patient => {
							return (
								<PatientItem
									{...patient}
									key={patient._id}
									onPatientClick={onPatientClick}
								/>
							);
						})}
				</tbody>
			</table>
			{details && (
				<Pagination {...details} history={history} getRecords={getRecords} />
			)}
		</Fragment>
	);
};

export default PatientList;
