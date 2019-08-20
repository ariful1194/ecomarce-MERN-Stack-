import axios from "axios";
import { GET_ALL_CONTACT } from "./types";
//Add a  Product
export const addContact = contact => dispatch => {
  //dispatch(setProfileLoading());

  axios.post(`http://localhost:1000/api/contacts/`, contact);
};

export const getAllContact = () => dispatch => {
  axios
    .get(`http://localhost:1000/api/contacts`)
    .then(res =>
      dispatch({
        type: GET_ALL_CONTACT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_CONTACT,
        payload: []
      })
    );
};
