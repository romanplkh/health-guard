import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AppointmentTable from './AppointmentTable';
import AppointmentSearch from './AppointmentSearch';

const data = ['sadas1', 'asdfsd2', 'dfsdf3'];
const data2 = ['243234', '444444', '555555'];

const AppointmentGroup = () => {
	const [key, setKey] = useState('appointment');

	return (
		<div className="row">
			<div className="col">
        <AppointmentSearch info={data} />
				<Tabs id="appointments-group" activeKey={key} onSelect={k => setKey(k)}>
					<Tab eventKey="appointment" title="Current Appointments">
						<AppointmentTable data={data} />
					</Tab>
					<Tab eventKey="previous" title="Previous Appointments">
						<AppointmentTable data={data2} />
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default AppointmentGroup;
