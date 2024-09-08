import { configureStore } from "@reduxjs/toolkit";
import featuredPageSlice from "./features/featuredPageSlice";

export const store = configureStore({
  reducer: {
    featuredPage: featuredPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
