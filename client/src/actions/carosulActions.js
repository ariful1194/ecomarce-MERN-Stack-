import axios from "axios";
import { CAROSUL_LOADING } from "./types";

//get all CarouslItems

export const getCarosul = () => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get("http://localhost:1000/api/carosul")
    .then(res =>
      dispatch({
        type: CAROSUL_LOADING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CAROSUL_LOADING,
        payload: null
      })
    );
};
