// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataReducer';

const store = configureStore({
  data: dataReducer,
});

export default store;
