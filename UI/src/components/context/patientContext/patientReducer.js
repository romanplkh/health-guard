import {
  ADD_RECORD,
  DELETE_RECORD,
  UPDATE_RECORD,
  GET_RECORDS,
  GET_RECORD
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        patients: action.payload,
        loading: false
      };
    case GET_RECORD:
      return {
        ...state,
        selectedPatient: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
