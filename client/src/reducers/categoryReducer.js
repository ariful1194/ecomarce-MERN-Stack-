import {
  ADD_CATEGORY,
  CATEGORY_LOADING,
  CATEGORY_LOADING_PRODUCTS,
  DELETE_CATEGORY
} from "../actions/types";

const initialState = {
  categories: [],
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LOADING:
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case DELETE_CATEGORY:
      let pr = [...state.categories];
      return {
        ...state,
        categories: pr.filter(p => {
          return p._id !== action.payload._id;
        })
      };
    case CATEGORY_LOADING_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
}
