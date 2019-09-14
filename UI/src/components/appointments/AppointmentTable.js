import React from 'react';
import Table from 'react-bootstrap/Table';
import AppointmentItem from './AppointmentItem';

const AppointmentTable = ({ data }) => {
	const renderRow = data => {
		return data.map(row => {
			return <AppointmentItem data={row} />;
		});
	};
	return (
		<Table responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Patient</th>
					<th>Doctor</th>
					<th>Date</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{renderRow(data)}</tbody>
		</Table>
	);
};

export default AppointmentTable;
