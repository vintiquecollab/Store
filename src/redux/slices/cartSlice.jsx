import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const calculateTotals = (carts) => {
  const totalAmount = carts.reduce((cartTotal, cartItem) => {
    return cartTotal + cartItem.price * cartItem.quantity;
  }, 0);

  const itemCount = carts.length;

  return { totalAmount, itemCount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        state.carts = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            return {
              ...item,
              quantity: tempQty,
            };
          } else {
            return item;
          }
        });
      } else {
        state.carts.push(action.payload);
      }
      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemCount = totals.itemCount;
      storeInLocalStorage(state.carts);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemCount = totals.itemCount;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      state.totalAmount = 0;
      state.itemCount = 0;
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      const totals = calculateTotals(state.carts);
      state.totalAmount = totals.totalAmount;
      state.itemCount = totals.itemCount;
    },
  },
});

export const { addToCart, getCartTotal, clearCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
