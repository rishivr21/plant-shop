import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;

      if (!state.items[id]) {
        state.items[id] = { ...action.payload, qty: 1 };
        state.totalItems += 1;
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      state.items[id].qty += 1;
      state.totalItems += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;

      if (state.items[id].qty > 1) {
        state.items[id].qty -= 1;
        state.totalItems -= 1;
      }
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      state.totalItems -= state.items[id].qty;
      delete state.items[id];
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
