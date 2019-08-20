import axios from "axios";
import { FEATURE_LOADING } from "./types";

//get all FeaturelItems

export const getFeature = () => dispatch => {
  //dispatch(setProfileLoading());

  axios
    .get("http://localhost:1000/api/feature")
    .then(res =>
      dispatch({
        type: FEATURE_LOADING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FEATURE_LOADING,
        payload: null
      })
    );
};
