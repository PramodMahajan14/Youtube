import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sideMenuCollaped: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.sideMenuCollaped = !state.sideMenuCollaped;
    },
    closedMenu: (state) => {
      state.sideMenuCollaped = false;
    },
  },
});
export const { toggleMenu, closedMenu } = appSlice.actions;
export default appSlice.reducer;
