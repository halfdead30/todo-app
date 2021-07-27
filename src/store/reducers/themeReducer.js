import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkThemeEnabled: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
