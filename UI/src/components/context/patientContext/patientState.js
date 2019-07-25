import React, { useReducer } from 'react';
import PatientContext from './patientContext';
import patientReducer from './patientReducer';
import axios from 'axios';

import {
	ADD_RECORD,
	DELETE_RECORD,
	UPDATE_RECORD,
	GET_RECORDS,
	GET_RECORD,
	SET_EDIT_MODE,
	RESET_EDIT_MODE,
	CLEAR_CURRENT_RECORD
} from '../types';

const PatientState = props => {
	const initialState = {
		patients: null,
		selectedPatient: null,
		editMode: false
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

	const updateRecord = async record => {
		const { _id } = record;

		try {
			const resp = await axios.put(`/patients/${_id}`, record);
			if (resp.status === 200) {
				dispatch({ type: UPDATE_RECORD, payload: resp.data });
			}
		} catch (error) {
			//dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
		}
	};

  const deleteRecord = async id => {
    console.log(id)
		try {
			const resp = await axios.delete(`/patients/${id}`);
			if (resp.status === 200) {
				dispatch({ type: DELETE_RECORD, payload: id });
			}
		} catch (error) {}
	};

	//!Clear current contact

	const clearCurrentRecord = () => {
		dispatch({ type: CLEAR_CURRENT_RECORD });
	};

	const setEditMode = () => {
		dispatch({ type: SET_EDIT_MODE });
	};

	const resetEditMode = () => dispatch({ type: RESET_EDIT_MODE });

	return (
		<PatientContext.Provider
			value={{
				patients: state.patients,
				selectedPatient: state.selectedPatient,
				editMode: state.editMode,
				actions: {
					getRecords,
					getRecord,
					setEditMode,
					resetEditMode,
					updateRecord,
					clearCurrentRecord,
					deleteRecord
				}
			}}
		>
			{props.children}
		</PatientContext.Provider>
	);
};

export default PatientState;
