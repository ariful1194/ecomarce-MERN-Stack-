import { CAROSUL_LOADING } from "../actions/types";

const initialState = {
  carosuls: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CAROSUL_LOADING:
      console.log(action.payload);
      return {
        ...state,
        carosuls: action.payload
      };

    default:
      return state;
  }
}
