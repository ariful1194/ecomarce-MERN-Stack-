import axios from "axios";
import {
  PRODUCT_LOADING,
  ADD_PRODUCT,
  GET_ALL_PRODUCT,
  DELETE_PRODUCT
} from "./types";

//get all FeaturelItems

export const getProduct = id => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get(`http://localhost:1000/api/products/show/${id}`)
    .then(res =>
      dispatch({
        type: PRODUCT_LOADING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: PRODUCT_LOADING,
        payload: null
      })
    );
};

//Add a  Product
export const createProduct = product => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .post(`http://localhost:1000/api/products/`, product)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_PRODUCT,
        payload: null
      })
    );
};

//get all Products

export const getAllProduct = id => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get(`http://localhost:1000/api/products/`)
    .then(res =>
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: null
      })
    );
};

// delete A Product
export const deleteProduct = id => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .delete(`http://localhost:1000/api/products/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: null
      })
    );
};
// export const searchProduct = (key, history) => dispatch => {
//   axios
//     .post(`http://localhost:1000/api/orders/`, newOrder)
//     .then(res => history.push("/successorder"));
//   // .catch(err =>
//   //   dispatch({
//   //     type: ADD_ORDER,
//   //     payload: null
//   //   })
//   // );
// };
