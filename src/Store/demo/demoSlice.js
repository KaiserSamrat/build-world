import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  data: [],
  loading: false,
};

export const demoSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    loadJson: (state) => {
      state.loading = true;
    },
    storeData: (state, { payload }) => {
      const { name, data } = payload;
      state[name] = data;
    },
    loadJsonSuccess: (state, { payload }) => {
      console.log(`🦄 ~ file: demoSlice.js ~ line 31 ~ payload`, payload);
      state.data = payload;
      state.loading = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  loadJson,
  storeData,
  loadJsonSuccess,
} = demoSlice.actions;

export default demoSlice.reducer;
