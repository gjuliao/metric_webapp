// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
