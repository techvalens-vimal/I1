import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./postSlice";
import WatchReducer from "./watchSlice";

const store = configureStore({
  reducer: {
    timezone: WatchReducer,
    posts: PostSlice,
  },
});

export default store;
