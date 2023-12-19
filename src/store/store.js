import { createStore } from "redux";
import { QuantityReducer } from "./reducer/quantityreducer";
export const store = createStore(QuantityReducer);