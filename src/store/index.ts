import stateSlice from './slices/slice';
import layoutSlice from './layout/index';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    state: stateSlice,
    layout: layoutSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
