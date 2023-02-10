import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dataReducer from './dataReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
