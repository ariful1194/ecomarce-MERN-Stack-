import {
  NEW_ORDER,
  CONFIRM_ORDER,
  CONFIRM_ORDER_BY_ID,
  GET_ALL_ORDER
} from "../actions/types";

const initialState = {
  all_order: [],
  new_order: [],
  confirm_order: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ORDER:
      return {
        ...state,
        new_order: action.payload
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        confirm_order: action.payload
      };
    case GET_ALL_ORDER:
      return {
        ...state,
        all_order: action.payload
      };
    case CONFIRM_ORDER_BY_ID:
      console.log(action.payload._id);
      return {
        ...state,
        new_order: state.new_order.filter(no => {
          if (no._id != action.payload._id) {
            return no;
          }
        })
      };

    default:
      return state;
  }
}
