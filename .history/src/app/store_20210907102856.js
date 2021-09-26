import counterReducer from "../features/Counter/counterSlice.js";
import userReducer from '../features/Auth/userSlice.js'
import cartReducer from '../features/Cart/cartSlice.js'
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};
a[]
const store = configureStore({
  reducer: rootReducer,
});
export default store;
