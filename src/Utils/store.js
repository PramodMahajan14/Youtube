import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
const appStore = configureStore({
  reducer: {
    app: appSlice,
    sarchCache: searchSlice,
  },
});

export default appStore;
