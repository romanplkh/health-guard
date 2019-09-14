import React, { useState, Fragment } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AppointmentTable from './AppointmentTable';
import AppointmentSearch from './AppointmentSearch';
import './style.css';

const data = ['sadas1', 'asdfsd2', 'dfsdf3'];
const data2 = ['243234', '444444', '555555'];

const AppointmentGroup = () => {
	const [key, setKey] = useState('appointment');

	return (
		<React.Fragment>
			<div className="row">
				<div className="col-3 ml-auto pr-5 mt-4 position-relative">
					<AppointmentSearch info={data} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Tabs
						id="appointments-group"
						activeKey={key}
						onSelect={k => setKey(k)}
					>
						<Tab eventKey="appointment" title="Current Appointments">
							<AppointmentTable data={data} />
						</Tab>
						<Tab eventKey="previous" title="Previous Appointments">
							<AppointmentTable data={data2} />
						</Tab>
					</Tabs>
				</div>
			</div>
			<div className="row d-flex justify-content-end position-relative">
				<button className="fl font-weight-bold" onClick={() => alert('WORKS')}>
					+
				</button>
			</div>
		</React.Fragment>
	);
};

export default AppointmentGroup;
