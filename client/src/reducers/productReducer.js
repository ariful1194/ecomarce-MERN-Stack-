import {
  PRODUCT_LOADING,
  ADD_PRODUCT,
  GET_ALL_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";
import AddProduct from "../components/admin/AddProduct";

const initialState = {
  product: null,
  singleProduct: null,
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        product: action.payload
      };
    case GET_ALL_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload
      };
    case DELETE_PRODUCT:
      let pr = [...state.products];
      return {
        ...state,
        products: pr.filter(p => {
          return p._id !== action.payload._id;
        })
      };
    default:
      return state;
  }
}
