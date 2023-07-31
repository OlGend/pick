// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brandsData: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setBrandsData: (state, action) => {
      state.brandsData = action.payload;
    },
  },
});

export const { setBrandsData } = dataSlice.actions;
export default dataSlice.reducer;
