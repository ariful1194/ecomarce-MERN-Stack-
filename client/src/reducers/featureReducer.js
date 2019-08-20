import { FEATURE_LOADING } from "../actions/types";

const initialState = {
  feature: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FEATURE_LOADING:
      return {
        ...state,
        feature: action.payload
      };

    default:
      return state;
  }
}
