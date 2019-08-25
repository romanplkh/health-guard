import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChalkboardTeacher,
	faUserMd,
	faCalendarAlt,
	faClipboard
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	return (
		<Fragment>
			<div className="sidebar bg-dark pt-4 pl-3 d-none d-md-block ">
				<ul className="navbar-nav flex-column">
					<li className="nav-item">
						<Link to="/patients?page=1" className="nav-link text-white">
							<FontAwesomeIcon icon={faChalkboardTeacher} size="lg" /> Patients
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/doctors?page=1" className="nav-link text-white">
							<FontAwesomeIcon icon={faUserMd} size="lg" /> Doctors
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/appointments" className="nav-link text-white">
							<FontAwesomeIcon icon={faCalendarAlt} size="lg" /> Appointments
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/reports" className="nav-link text-white">
							<FontAwesomeIcon icon={faClipboard} size="lg" /> Reports
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Sidebar;
