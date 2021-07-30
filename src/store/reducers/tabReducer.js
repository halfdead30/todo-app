import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabName: "all",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    openTab(state, action) {
      return {
        ...state,
        tabName: action.payload.type,
      };
    },
  },
});

export const { openTab } = tabSlice.actions;

export default tabSlice.reducer;
