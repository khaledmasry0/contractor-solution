import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../Api/BaseUrl";

export const LoginAsync = createAsyncThunk("login/log", async (arg) => {
  const data = await BaseUrl.post("api/v1/access-tokens", arg, {
    headers: {
      Accept: "application/json",
    },
  });

  const final = await data.data;
  return final;
});

const initialState = {
  loading: false,
  Loged: false,
  token: "",
  user: {},
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [LoginAsync.pending]: (state, action) => {
      console.log("Pending");
      state.loading = true;
    },
    [LoginAsync.fulfilled]: (state, action) => {
      console.log("Filled");
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.Loged = true;
      state.loading = false;
    },
    [LoginAsync.rejected]: (state, action) => {
      console.log("Rejected");
      state.loading = true;
    },
  },
});

export default LoginSlice.reducer;
