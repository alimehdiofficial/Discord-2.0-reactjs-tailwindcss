import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channelSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});
