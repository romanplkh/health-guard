import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<header className="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
				<Link to="/" className="navbar-brand">
					HealthGuard
				</Link>
				<ul className="navbar-nav bd-navbar-nav flex-row d-md-none d-lg-none d-flex">
					<li className="nav-item">
						<Link to="/patients" className="nav-link">
							Patients
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/doctors" className="nav-link">
							Doctors
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/appointments" className="nav-link">
							Appointments
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/reports" className="nav-link">
							Reports
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
					<li className="nav-item dropdown">
						<Link
							to="/about"
							className="nav-item nav-link dropdown-toggle mr-md-2"
						>
							About
						</Link>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Navbar;
