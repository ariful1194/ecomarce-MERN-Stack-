import axios from "axios";
import {
  CATEGORY_LOADING,
  CATEGORY_LOADING_PRODUCTS,
  ADD_CATEGORY,
  DELETE_CATEGORY
} from "./types";

//get all FeaturelItems

export const getCategories = () => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get("http://localhost:1000/api/categories")
    .then(res =>
      dispatch({
        type: CATEGORY_LOADING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CATEGORY_LOADING,
        payload: null
      })
    );
};

//CATEGORY_LOADING_PRODUCTS
export const getAllCatProduct = id => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get(`http://localhost:1000/api/products/`)
    .then(res =>
      dispatch({
        type: CATEGORY_LOADING_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CATEGORY_LOADING_PRODUCTS,
        payload: null
      })
    );
};

//Add a  Category
export const createCategory = category => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .post(`http://localhost:1000/api/categories/`, category)
    .then(res =>
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_CATEGORY,
        payload: null
      })
    );
};
// delete A category
export const deleteCategory = id => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .delete(`http://localhost:1000/api/categories/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_CATEGORY,
        payload: null
      })
    );
};
