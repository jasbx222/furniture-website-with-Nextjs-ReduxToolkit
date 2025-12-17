'use client';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/CartSlice";

/* =======================
   Store
======================= */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/* =======================
   Types
======================= */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
