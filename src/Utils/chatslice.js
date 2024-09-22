import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

const chatslice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(10, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatslice.actions;

export default chatslice.reducer;
