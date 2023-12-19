// src/redux/index.js
import { combineReducers } from 'redux';
import cartReducer from './cart/reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more feature reducers here if needed
});

export default rootReducer;