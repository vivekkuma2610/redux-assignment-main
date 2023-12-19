// src/redux/cart/actions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY, SHOW_ALERT } from './types';

export const updateCartItemQuantity = (productId, newQuantity, newTotalPrice) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, newQuantity, newTotalPrice },
});

export const addToCart = (product, quantity = 1) => (dispatch, getState) => {
  const { cart } = getState();
  
  // Check if the product is already in the cart
  const existingProduct = cart.items.find((item) => item.id === product.id);

  if (existingProduct) {
    // Dispatch an action to show an alert
    dispatch({ type: SHOW_ALERT, payload: 'Product is already in the cart.' });
  } else {
    // Calculate the total price based on the initial quantity
    const totalPrice = product.price * quantity;

    // Dispatch the ADD_TO_CART action with the product and totalPrice
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...product,
        quantity,
        totalPrice,
      },
    });
  }
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});