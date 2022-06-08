import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './rootReducers';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// sagaMiddleware: Makes redux-sagas work
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: { ...rootReducers },
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagas);

export default store;
