import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Patients from './components/pages/Patients';
import Sidebar from './components/layout/Sidebar';
import PatientState from './components/context/patientContext/patientState';
import AddForm from './components/patients/AddForm';
import DoctorState from './components/context/doctorContext/doctorState';
import Doctors from './components/pages/Doctors';

function App() {
	return (
		<PatientState>
			<DoctorState>
				<Router>
					<Fragment>
						<Navbar />
						<div className="container-fluid">
							<div className="row">
								<Sidebar />
								<div className="col p-0 m-0">
									<Switch>
										<Route exact path="/" component={Home} />
										<Route exact path="/patients" component={Patients} />
										<Route exact path="/doctors" component={Doctors} />
										<Route exact path="/patients/add" component={AddForm} />
									</Switch>
								</div>
							</div>
						</div>
						{/* <Footer /> */}
					</Fragment>
				</Router>
			</DoctorState>
		</PatientState>
	);
}

export default App;
