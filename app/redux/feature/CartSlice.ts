'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* =======================
   Types
======================= */
export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  quantity: number;
  img?: string;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

/* =======================
   Helpers (safe for Next.js)
======================= */
const isBrowser = typeof window !== "undefined";

const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (!isBrowser) return defaultValue;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

/* =======================
   Initial State
======================= */
const initialState: CartState = {
  cartItems: getFromLocalStorage<CartItem[]>("cartItems", []),
  totalQuantity: isBrowser ? Number(localStorage.getItem("totalQuantity")) || 0 : 0,
  totalPrice: isBrowser ? Number(localStorage.getItem("totalPrice")) || 0 : 0,
};

/* =======================
   Utils
======================= */
const recalcTotals = (state: CartState): void => {
  state.totalQuantity = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  state.totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

const saveToLocalStorage = (state: CartState): void => {
  if (!isBrowser) return;

  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("totalQuantity", state.totalQuantity.toString());
  localStorage.setItem("totalPrice", state.totalPrice.toString());
};

/* =======================
   Slice
======================= */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (!existingItem) {
        state.cartItems.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity++;
      }

      recalcTotals(state);
      saveToLocalStorage(state);
    },

    increaseQty(state, action: PayloadAction<CartItem["id"]>) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity++;

      recalcTotals(state);
      saveToLocalStorage(state);
    },

    decreaseQty(state, action: PayloadAction<CartItem["id"]>) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;

      recalcTotals(state);
      saveToLocalStorage(state);
    },

    removeFromCart(state, action: PayloadAction<CartItem["id"]>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      recalcTotals(state);
      saveToLocalStorage(state);
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      if (isBrowser) {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalQuantity");
        localStorage.removeItem("totalPrice");
      }
    },
  },
});

/* =======================
   Exports
======================= */
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
