import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMiniCart: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addFromCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const idNeedRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);
    },
  },
});

export const {
  showMiniCart,
  hideMiniCart,
  addFromCart,
  removeFromCart,
  setQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
