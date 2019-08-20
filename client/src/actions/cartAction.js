import axios from "axios";
import { ADD_CART, LOAD_CART, REMOVE_AND_RESET_CART } from "./types";

//get all FeaturelItems

export const addCart = cart => dispatch => {
  //dispatch(setProfileLoading());
  //   axios
  //     .get(`http://localhost:1000/api/products/show/${id}`)
  //     .then(res =>
  //       dispatch({
  //         type: PRODUCT_LOADING,
  //         payload: res.data
  //       })
  //     )
  //     .catch(err =>
  //       dispatch({
  //         type: PRODUCT_LOADING,
  //         payload: null
  //       })
  //     );

  if (cart) {
    dispatch({
      type: ADD_CART,
      payload: cart
    });
  }
};
export const removeAndResetCart = cart => dispatch => {
  console.log(cart);
  if (cart) {
    dispatch({
      type: REMOVE_AND_RESET_CART,
      payload: cart
    });
  }
};
export const loadCart = () => dispatch => {
  let items = localStorage.getItem("cart");

  if (items) {
    dispatch({
      type: LOAD_CART,
      payload: items
    });
  } else {
    dispatch({
      type: LOAD_CART,
      payload: null
    });
  }
};
