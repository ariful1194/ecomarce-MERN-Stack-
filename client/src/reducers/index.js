import { combineReducers } from "redux";

//import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
//import profileReducer from "./profileReducer";
import carosulReducer from "./carosulReducer";
import featureReducer from "./featureReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import contactReducer from "./contactReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  carosul: carosulReducer,
  feature: featureReducer,
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
  order: orderReducer,
  contact: contactReducer
});
