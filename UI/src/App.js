import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Patients from './components/pages/Patients';
import Sidebar from './components/layout/Sidebar';
import PatientState from './components/context/patientContext/patientState';
import AddForm from './components/pages/AddForm';

function App() {
	return (
		<PatientState>
			<Router>
				<Fragment>
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-2 d-none d-md-block bg-light sidebar pl-0  ">
								<Sidebar />
							</div>
							<div className="col-md-9 ml-sm-auto col-lg-10 px-4">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/patients" component={Patients} />
									<Route exact path="/patients/add" component={AddForm} />
								</Switch>
							</div>
						</div>
					</div>
				</Fragment>
			</Router>
		</PatientState>
	);
}

export default App;
