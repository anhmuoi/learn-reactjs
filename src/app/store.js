import counterReducer from "../features/Counter/counterSlice.js";
import userReducer from '../features/Auth/userSlice.js'
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
