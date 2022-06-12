import { configureStore } from '@reduxjs/toolkit';
import CartActionReducer from '../Store/CartSlice';
import AlertActionReducer from '../Store/AlertSlice';
const store = configureStore({
  reducer: {
    cartManager: CartActionReducer,
    alertManager: AlertActionReducer,
  },
});

export default store;
