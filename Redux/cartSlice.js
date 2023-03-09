import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export function cartProduct() {
  return async function cartProductThunk(dispatch, getstate) {
    dispatch(setStatus(STATUSES.LOADING));
    //         try {
    //             const res = await fetch('https://fakestoreapi.com/products');
    //             const data = await res.json();
    //             dispatch(setProducts(data));
    //             dispatch(setStatus(STATUSES.IDLE));
    //         } catch (err) {
    //             console.log(err);
    //             dispatch(setStatus(STATUSES.ERROR));
    //         }
  };
}
