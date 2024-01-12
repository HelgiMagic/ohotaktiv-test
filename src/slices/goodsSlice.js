import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  favorites: [],
  cart: [],
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods(state, action) {
      state.list = action.payload;
    },
    addGood(state, action) {
      state.list.push(action.payload);
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorite(state, action) {
      const filtered = state.favorites.filter((id) => id !== action.payload);
      state.favorites = filtered;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      const filtered = state.cart.filter((id) => id !== action.payload);
      state.cart = filtered;
    },
  },
});

export const {
  addGood, setGoods,
  addFavorite, setFavorites, deleteFavorite,
  addToCart, setCart, deleteFromCart,
} = goodsSlice.actions;

export default goodsSlice.reducer;
