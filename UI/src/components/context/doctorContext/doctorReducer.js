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
	RESET_ERROR,
	GET_DOCTORS
} from '../types';

export default (state, action) => {
	console.log(action, 'action');
	switch (action.type) {
		case GET_RECORDS:
			return {
				...state,
				doctors: action.payload
				// details: { ...action.payload.details }
			};
		case GET_RECORD:
			return {
				...state,
				selectedDoctor: action.payload
			};
		case ADD_RECORD:
			return {
				...state
			};
		case UPDATE_RECORD:
			const updatedRecords = state.doctors.map(doctor => {
				if (doctor._id === action.payload._id) {
					return Object.assign(doctor, action.payload);
				} else {
					return doctor;
				}
			});

			return {
				...state,
				doctors: updatedRecords,
				selectedDoctor: action.payload,
				editMode: false
			};
		case DELETE_RECORD:
			return {
				...state,
				doctors: state.doctors.filter(
					doctor => doctor._id !== action.payload
				),
				selectedDoctor: null
			};
		// case CLEAR_CURRENT_RECORD:
		// 	return {
		// 		...state,
		// 		editMode: false
		// 	};
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
		// case ADD_RECORD_FAIL:
		// 	return {
		// 		...state,
		// 		error: action.payload,
		// 		addedRecord: false
		// 	};
		// case RESET_ERROR:
		// 	return {
		// 		...state,
		// 		error: null,
		// 		addedRecord: false
		// 	};
		default:
			return state;
	}
};
