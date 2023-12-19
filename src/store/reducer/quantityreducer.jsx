const initialState = { totalQuantity: 1 };

export function QuantityReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
      };
    case "decrement":
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
      
      };
    default:
      return state;
  }
}