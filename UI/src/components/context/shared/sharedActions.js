import axios from 'axios';
import {
  ADD_RECORD,
  DELETE_RECORD,
  UPDATE_RECORD,
  GET_RECORDS,
  GET_RECORD
} from '../types';

//!GET_CONTACTS

export const getRecords = async dispatch => {
  try {
    const resp = await axios.get('/api/contacts');
    if (resp.status === 200) {
      //	dispatch({ type: GET_CONTACTS, payload: resp.data });
    }
  } catch (error) {
    //	dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
  }
};

//!Add contact
export const addReacor = async (contact, dispatch) => {
  //contact.id = uuid.v4();

  try {
    const resp = await axios.post('/api/contacts', contact);
    if (resp.status === 200) {
      //dispatch({ type: ADD_CONTACT, payload: resp.data });
    }
  } catch (error) {
    //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
  }
};
//!Delete contact

export const deleteContact = async (id, dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    //dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (error) {
    //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
  }
};

//!Set current contact

export const setCurrentContact = (contact, dispatch) => {
  //dispatch({ type: SET_CURRENT, payload: contact });
};

//!Clear current contact

export const clearCurrentContact = dispatch => {
  //dispatch({ type: CLEAR_CURRENT });
};

//!Update Contact

export const updateContact = async (contact, dispatch) => {
  try {
    const { _id } = contact;
    const resp = await axios.put(`/api/contacts/${_id}`, contact);

    if (resp.status === 200) {
      //	dispatch({ type: UPDATE_CONTACT, payload: contact });
    }
  } catch (error) {
    //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
  }
};
//!Filter contacts

export const filterContacts = (text, dispatch) => {
  //dispatch({ type: FILTER_CONTACTS, payload: text });
};

//!Clear filter
export const clearFilterContacts = (text, dispatch) => {
  //dispatch({ type: CLEAR_FILTER });
};

//!Clear Contacts
export const clearContacts = dispatch => {
  //	dispatch({ type: CLEAR_CONTACTS });
};
