import { ADD_CART, LOAD_CART, REMOVE_AND_RESET_CART } from "../actions/types";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      let itm = localStorage.getItem("cart");
      if (!itm) {
        localStorage.setItem("cart", JSON.stringify([action.payload]));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...JSON.parse(itm), action.payload])
        );
      }

      return {
        cart: [...JSON.parse(localStorage.getItem("cart"))]
      };
    case REMOVE_AND_RESET_CART:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        cart: [...JSON.parse(localStorage.getItem("cart"))]
      };
    case LOAD_CART:
      return {
        cart: JSON.parse(action.payload)
      };

    default:
      return state;
  }
}
