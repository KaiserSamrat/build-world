import loginSlice from './Auth/Login/loginSlice';
import demoSlice from './demo/demoSlice';

export const rootReducers = {
  login: loginSlice,
  demo: demoSlice,
};
