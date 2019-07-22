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
      <div className="sidebar-sticky bg-light pl-5 mt-3">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <Link to="/patients" className="nav-link">
              <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" /> Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-link text-large">
              <FontAwesomeIcon icon={faUserMd} size="lg" /> Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-link">
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" /> Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link">
              <FontAwesomeIcon icon={faClipboard} size="lg" /> Reports
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
