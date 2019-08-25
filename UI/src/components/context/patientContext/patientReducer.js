import {
	ADD_RECORD,
	DELETE_RECORD,
	UPDATE_RECORD,
	GET_RECORDS,
	GET_RECORD,
	SET_EDIT_MODE,
	RESET_EDIT_MODE,
	CLEAR_CURRENT_RECORD,
	ADD_RECORD_FAIL,
	RESET_ERROR
} from '../types';

export default (state, action) => {
	console.log(action);
	switch (action.type) {
		case GET_RECORDS:
			return {
				...state,
				patients: [...action.payload.patientsList],
				details: { ...action.payload.details }
			};
		case GET_RECORD:
			return {
				...state,
				selectedPatient: action.payload
			};
		case ADD_RECORD:
			return {
				...state,
				addedRecord: true,
				error: null
			};
		case UPDATE_RECORD:
			const updatedRecords = state.patients.map(patient => {
				if (patient._id === action.payload._id) {
					return Object.assign(patient, action.payload);
				} else {
					return patient;
				}
			});

			return {
				...state,
				patients: updatedRecords,
				selectedPatient: action.payload,
				editMode: false
			};
		case DELETE_RECORD:
			return {
				...state,
				patients: state.patients.filter(
					patient => patient._id !== action.payload
				),
				selectedPatient: null
			};
		case CLEAR_CURRENT_RECORD:
			return {
				...state,
				editMode: false
			};
		case SET_EDIT_MODE:
			return {
				...state,
				editMode: true
			};
		case RESET_EDIT_MODE:
			return {
				...state,
				editMode: false
			};
		case ADD_RECORD_FAIL:
			return {
				...state,
				error: action.payload,
				addedRecord: false
			};
		case RESET_ERROR:
			return {
				...state,
				error: null,
				addedRecord: false
			};
		default:
			return state;
	}
};
