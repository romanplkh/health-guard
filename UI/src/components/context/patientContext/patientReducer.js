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

export default (state, action) => {
	console.log(action);
	switch (action.type) {
		case GET_RECORDS:
			return {
				...state,
				patients: action.payload
			};
		case GET_RECORD:
			return {
				...state,
				selectedPatient: null,
				selectedPatient: action.payload
			};
		case UPDATE_RECORD:
			const updatedRecords = state.patients.map(patient => {
				if (patient._id === action.payload._id) {
					return (patient = action.payload);
				} else {
					return patient;
				}
			});

			return {
				...state,
				patients: updatedRecords,
				selectedPatient: action.payload
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
		default:
			return state;
	}
};
