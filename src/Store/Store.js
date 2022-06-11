import { configureStore } from '@reduxjs/toolkit';
import CartActionReducer from '../Store/CartSlice';
const store = configureStore({
  reducer: {
    cartManager: CartActionReducer,
  },
});

export default store;
