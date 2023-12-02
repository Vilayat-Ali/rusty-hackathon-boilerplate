// lib
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// reducers
import sliceReducers from "./slices";
import rtkApis from "./apiSlices";

export const store = configureStore({
  // reducer object
  reducer: {
    ...sliceReducers,
    ...rtkApis.reducers,
  },

  // api middlewares
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(rtkApis.middlewares),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
