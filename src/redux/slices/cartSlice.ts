import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = state.cartData.find(
        (cart) =>
          cart.id === action.payload.id && cart.size === action.payload.size
      );
      if (!data) {
        state.cartData.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.cartData = state.cartData.filter((cart) => cart.id !== cartId);
    },
    incrementQuantity: (state, action) => {
      const item = state.cartData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartData.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
