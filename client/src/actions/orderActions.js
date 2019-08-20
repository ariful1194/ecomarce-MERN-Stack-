import axios from "axios";

import {
  ADD_ORDER,
  NEW_ORDER,
  CONFIRM_ORDER,
  CONFIRM_ORDER_BY_ID,
  GET_ALL_ORDER
} from "./types";

//Add an order

export const addorder = (newOrder, history) => dispatch => {
  axios
    .post(`http://localhost:1000/api/orders/`, newOrder)
    .then(res => history.push("/successorder"));
  // .catch(err =>
  //   dispatch({
  //     type: ADD_ORDER,
  //     payload: null
  //   })
  // );
};
export const getNewOrder = () => dispatch => {
  axios
    .get(`http://localhost:1000/api/orders/neworder`)
    .then(res =>
      dispatch({
        type: NEW_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: NEW_ORDER,
        payload: null
      })
    );
};

export const getAllOrder = () => dispatch => {
  axios
    .get(`http://localhost:1000/api/orders/totalorder`)
    .then(res =>
      dispatch({
        type: GET_ALL_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_ORDER,
        payload: null
      })
    );
};
export const getConfirmOrder = () => dispatch => {
  axios
    .get(`http://localhost:1000/api/orders/confirmorder`)
    .then(res =>
      dispatch({
        type: CONFIRM_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CONFIRM_ORDER,
        payload: null
      })
    );
};

export const confrimOrderById = id => dispatch => {
  axios
    .put(`http://localhost:1000/api/orders/confirmorderbyid/`, { id: id })
    .then(res =>
      dispatch({
        type: CONFIRM_ORDER_BY_ID,
        payload: res.data
      })
    );
};
