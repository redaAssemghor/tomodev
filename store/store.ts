import { configureStore } from "@reduxjs/toolkit";
import featuredPageSlice from "./features/featuredPageSlice";
import servicesSlice from "./features/servicesSlice";
import templateSlice from "./features/templateSlice";

export const store = configureStore({
  reducer: {
    featuredPage: featuredPageSlice,
    services: servicesSlice,
    template: templateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
