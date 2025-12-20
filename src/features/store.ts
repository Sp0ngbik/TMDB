import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/app/baseApi.ts";
import { appSlice } from "@/features/api/app/app.service.ts";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.reducerPath]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
