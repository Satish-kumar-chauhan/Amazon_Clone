import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  alertDetails: null,
};

const alertSlice = createSlice({
  name: 'cartManager',
  initialState,
  reducers: {
    setAlertDetails: (state, action) => {
      return {
        ...state,
        alertDetails: action.payload,
      };
    },
  },
});

export const { setAlertDetails } = alertSlice.actions;
export default alertSlice.reducer;
