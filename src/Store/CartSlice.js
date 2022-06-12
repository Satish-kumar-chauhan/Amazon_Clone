import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  listOfItems: [],
};

const cartActionSlice = createSlice({
  name: 'cartManager',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        listOfItems: [...state.listOfItems, action.payload],
      };
    },
    removeToCart: (state, action) => {
      return {
        ...state,
        listOfItems: state.listOfItems.filter(
          (product) => product.storeItemId !== action.payload
        ),
      };
    },
    incrementSelectedItem: (state, action) => {
      return {
        ...state,
        listOfItems: state.listOfItems.map((product) =>
          product.storeItemId === action.payload
            ? { ...product, storeItemQuantity: product.storeItemQuantity + 1 }
            : product
        ),
      };
    },
    decrementSelectedItem: (state, action) => {
      return {
        ...state,
        listOfItems: state.listOfItems.map((product) =>
          product.storeItemId === action.payload
            ? {
                ...product,
                storeItemQuantity:
                  product.storeItemQuantity > 1
                    ? product.storeItemQuantity - 1
                    : 1,
              }
            : product
        ),
      };
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incrementSelectedItem,
  decrementSelectedItem,
} = cartActionSlice.actions;
export default cartActionSlice.reducer;
