import React, { useContext, useEffect } from 'react';
import PatientContext from '../context/patientContext/patientContext';
import PatientItem from './PatientItem';

const PatientList = () => {
  const patientCTX = useContext(PatientContext);

  const { patients } = patientCTX;

  const { getRecords, getRecord } = patientCTX.actions;

  useEffect(() => {
    getRecords();
    //eslint-disable-next-line
  }, []);

  const onPatientClick = id => {
    getRecord(id);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>FirstName</th>
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
  );
};

export default PatientList;
