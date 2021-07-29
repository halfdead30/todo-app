import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginValue(state, { payload: { name: key, value } }) {
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

export const { setLoginValue } = loginSlice.actions;

export default loginSlice.reducer;
