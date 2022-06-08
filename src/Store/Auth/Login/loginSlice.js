import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 'fasdfasdf',
  role: 'admin',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login: () => {
      console.log('🦄 ~ file: loginSlice.js ~ line 31 ~ login');
    },
  },
});

export default loginSlice.reducer;
