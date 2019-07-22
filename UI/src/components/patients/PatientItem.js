import React from 'react';

const PatientItem = ({
  _id,
  firstName,
  lastName,
  phone,
  email,
  type,
  onPatientClick
}) => {
  return (
    <tr style={{ cursor: 'pointer' }} onClick={() => onPatientClick(_id)}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <span
          className={
            type == 'General' ? 'badge badge-secondary' : 'badge badge-warning'
          }
        >
          {type}
        </span>
      </td>
    </tr>
  );
};

export default PatientItem;
