console.log(localStorage);
// const localStorageValue = JSON.parse(localStorage.getItem("cartItem")) || [];

const initialState = {
  cartItem: {},
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "addToCart":
      return state;
    default:
      return state;
  }
}
