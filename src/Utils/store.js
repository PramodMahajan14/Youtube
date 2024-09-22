import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import livechatreducer from "./chatslice"
const appStore = configureStore({
  reducer: {
    app: appSlice,
    sarchCache: searchSlice,
    liveChat:livechatreducer,
  },
});

export default appStore;
