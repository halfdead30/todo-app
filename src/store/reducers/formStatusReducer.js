import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const formStatusSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsFormOpen(state, action) {
      return {
        ...state,
        status: !action.payload.isFormOpen,
      };
    },
  },
});

export const { setIsFormOpen } = formStatusSlice.actions;

export default formStatusSlice.reducer;
