// src/redux/cart/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY, SHOW_ALERT } from './types';

const initialState = {
  items: [],
  alert: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Handle adding items to the cart
      return {
        ...state,
        items: [...state.items, action.payload],
        alert: null,
      };

    case SHOW_ALERT:
      // Handle showing an alert message
      return {
        ...state,
        alert: action.payload,
      };

    case REMOVE_FROM_CART:
      // Handle removing items from the cart
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      // Handle updating the quantity of an item in the cart
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.productId
            ? {
              ...item,
              quantity: action.payload.newQuantity,
              totalPrice: action.payload.newTotalPrice,
            }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;