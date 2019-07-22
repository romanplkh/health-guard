import axios from 'axios';

class ApiService {
  dispatch;
  uriAPI;
  _BASE_URI = `http://localhost:5000`;

  constructor(dispatch, uri) {
    this.dispatch = dispatch;
    this.uriAPI = uri;
  }

  //!GET_CONTACTS

  getRecords = async dispatch => {
    try {
      const resp = await axios.get('/api/contacts');
      if (resp.status === 200) {
        return resp;
        //	dispatch({ type: GET_CONTACTS, payload: resp.data });
      }
    } catch (error) {
      return error;
      //	dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
    }
  };

  //!Add contact
  addRecord = async (contact, dispatch) => {
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

  deleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      //dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      //dispatch({ type: CONTACT_ADD_ERROR, payload: error.response.msg });
    }
  };

  //!Set current contact

  setCurrentContact = (contact, dispatch) => {
    //dispatch({ type: SET_CURRENT, payload: contact });
  };

  //!Clear current contact

  clearCurrentContact = dispatch => {
    //dispatch({ type: CLEAR_CURRENT });
  };

  //!Update Contact

  updateContact = async (contact, dispatch) => {
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

  filterContacts = (text, dispatch) => {
    //dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //!Clear filter
  clearFilterContacts = (text, dispatch) => {
    //dispatch({ type: CLEAR_FILTER });
  };

  //!Clear Contacts
  clearContacts = dispatch => {
    //	dispatch({ type: CLEAR_CONTACTS });
  };
}
