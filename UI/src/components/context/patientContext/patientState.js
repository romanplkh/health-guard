import React, { useReducer } from 'react';
import PatientContext from './patientContext';
import patientReducer from './patientReducer';
import axios from 'axios';

import {
  ADD_RECORD,
  DELETE_RECORD,
  UPDATE_RECORD,
  GET_RECORDS,
  GET_RECORD
} from '../types';

const PatientState = props => {
  const initialState = {
    patients: null
  };

  const [state, dispatch] = useReducer(patientReducer, initialState);

  //!GET_PATIENTS
  axios.defaults.baseURL = 'http://localhost:5000/api/admin';
  axios.defaults.headers['Content-Type'] = 'application/json';

  const getRecords = async () => {
    try {
      const resp = await axios.get('/patients');
      if (resp.status === 200) {
        dispatch({ type: GET_RECORDS, payload: resp.data });
      }
    } catch (error) {
      //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
    }
  };

  const getRecord = async id => {
    try {
      const resp = await axios.get(`/patients/${id}`);
      if (resp.status === 200) {
        dispatch({ type: GET_RECORD, payload: resp.data });
      }
    } catch (error) {
      //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
    }
  };

  return (
    <PatientContext.Provider
      value={{
        patients: state.patients,
        selectedPatient: state.selectedPatient,
        actions: { getRecords, getRecord }
      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientState;
