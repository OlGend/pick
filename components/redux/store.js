import { configureStore, createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",
  initialState: { showBrands: [] },
  reducers: {
    setShowBrands: (state, action) => {
      state.showBrands = action.payload;
    },
  },
});

export const { setShowBrands } = brandsSlice.actions;

const store = configureStore({
  reducer: {
    brands: brandsSlice.reducer,
  },
});

export default store;
