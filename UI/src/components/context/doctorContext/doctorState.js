import React, { useReducer } from 'react';
import DoctorContext from './doctorContext';
import DoctorReducer from './doctorReducer';
import axios from 'axios';
import {} from 'react-router-dom';

import {
	ADD_RECORD,
	DELETE_RECORD,
	UPDATE_RECORD,
	GET_DOCTORS,
	GET_RECORD,
	SET_EDIT_MODE,
	RESET_EDIT_MODE,
	CLEAR_CURRENT_RECORD,
	ADD_RECORD_FAIL,
	RESET_ERROR,
	GET_RECORDS
} from '../types';

const DoctorState = props => {
	const initialState = {
		doctors: [],
		selectedDoctor: null,
		editMode: false,
		error: null,
		addedRecord: false
	};

	const [state, dispatch] = useReducer(DoctorReducer, initialState);

	axios.defaults.baseURL = 'http://localhost:5000/api/admin';
	axios.defaults.headers['Content-Type'] = 'application/json';

	// //!Add PATIENT
	// //?Add image upload function => AddForm compinent
	// const addPatient = async patient => {
	// 	try {
	// 		const resp = await axios.post('/patients', patient);
	// 		dispatch({ type: ADD_RECORD, payload: resp.data });
	// 	} catch (error) {
	// 		dispatch({
	// 			type: ADD_RECORD_FAIL,
	// 			payload: error.response.data.msg || 'error my'
	// 		});
	// 	}
	// };

	//!GET_DOCTORS

	const getRecords = async (page = 1) => {
		try {
			const resp = await axios.get(`/doctors`);
			console.log(resp);
			if (resp.status === 200) {
				dispatch({ type: GET_RECORDS, payload: resp.data });
			}
		} catch (error) {
			//dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
		}
	};

	//!GET PATIENT

	const getRecord = async id => {
		try {
			const resp = await axios.get(`/doctors/${id}`);
			if (resp.status === 200) {
				dispatch({ type: GET_RECORD, payload: resp.data });
			}
		} catch (error) {
			//dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
		}
	};

	//!Update

	const updateRecord = async record => {
		const { _id } = record;

		try {
			const resp = await axios.put(`/doctors/${_id}`, record);
			if (resp.status === 200) {
				dispatch({ type: UPDATE_RECORD, payload: resp.data });
			}
		} catch (error) {
			//dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
		}
	};

	//!Delete
	const deleteRecord = async id => {
		try {
			const resp = await axios.delete(`/doctors/${id}`);
			if (resp.status === 200) {
				dispatch({ type: DELETE_RECORD, payload: id });
			}
		} catch (error) {}
	};

	//!Clear current contact
	// const clearCurrentRecord = () => {
	// 	dispatch({ type: CLEAR_CURRENT_RECORD });
	// };

	const setEditMode = () => {
		dispatch({ type: SET_EDIT_MODE });
	};

	const resetEditMode = () => dispatch({ type: RESET_EDIT_MODE });

	// const resetError = () => dispatch({ type: RESET_ERROR });

	return (
		<DoctorContext.Provider
			value={{
				doctors: state.doctors,
				selectedDoctor: state.selectedDoctor,
				editMode: state.editMode,
				actions: {
					getRecords,
					setEditMode,
					deleteRecord,
					getRecord,
					updateRecord,
					resetEditMode
				}
				// details: state.details,
				// selectedPatient: state.selectedPatient,
				// editMode: state.editMode,
				// error: state.error,
				// addedRecord: state.addedRecord,
				// actions: {
				// 	addPatient,
				// 	getRecords,
				// 	getRecord,
				// 	setEditMode,
				// 	resetEditMode,
				// 	updateRecord,
				// 	clearCurrentRecord,
				// 	deleteRecord,
				// 	resetError
				//}
			}}
		>
			{props.children}
		</DoctorContext.Provider>
	);
};

export default DoctorState;
