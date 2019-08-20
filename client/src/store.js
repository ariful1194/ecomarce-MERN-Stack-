import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
// compose(
//   applyMiddleware(...middlware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
