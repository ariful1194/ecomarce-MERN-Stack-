import { GET_ALL_CONTACT } from "../actions/types";

const initialState = {
  all_contacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONTACT:
      return {
        ...state,
        all_contacts: action.payload
      };

    default:
      return state;
  }
}
