import React from 'react';
import PatientList from '../patients/PatientList';
import PatientDetails from '../patients/PatientDetails';

const Patients = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <h1 className="display-4 text-center">Patients</h1>
        <PatientList />
      </div>
      <div className="col-md-5">
        <h1 className="display-4 text-center">Details</h1>
        <PatientDetails />
      </div>
    </div>
  );
};

export default Patients;
