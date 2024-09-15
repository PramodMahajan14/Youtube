import { createSlice } from "@reduxjs/toolkit";

const searchSclice = createSlice({
  name: "sarchCache",
  initialState: {},
  reducers: {
    AddToCache: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { AddToCache } = searchSclice.actions;

export default searchSclice.reducer;
