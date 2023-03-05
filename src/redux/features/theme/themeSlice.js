import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    themeToggle: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { themeToggle } = themeSlice.actions;

export default themeSlice.reducer;
