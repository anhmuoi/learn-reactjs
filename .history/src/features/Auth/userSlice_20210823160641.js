import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import userApi from "api/userApi.js";
import storageKeys from "constants/storage-key.js";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      //call api
      const data = await userApi.register(payload);
      // save data to localStorage
      localStorage.setItem(storageKeys.TOKEN,data.jwt);
      localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));
      
      return data.user;
    }
  )
  export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
      //call api
      const data = await userApi.login(payload);
      // save data to localStorage
      localStorage.setItem(storageKeys.TOKEN,data.jwt);
      localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));
      
      return data.user;
    }
  )

const userSlice = createSlice({
  name: "user",
  initialState: {
      current: JSON.parse(localStorage.getItem(storageKeys.USER) ) ||{},
      setting: {}
  },
  reducers: {
    logout(state) {

      localStorage.removeItem(storageKeys.TOKEN);
      localStorage.removeItem(storageKeys.USER);

      state.current = {}
    }

  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; 
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload; 
    }
  }
});

const { actions, reducer } = userSlice;
export const {  logout} = actions;
export default reducer;
