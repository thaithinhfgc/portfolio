import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiReducer } from './api';
import { ApiState } from '../api/api.interface';

export interface RootState {
    api: ApiState;
}

const reducers = combineReducers<RootState>({
    api: apiReducer,
});

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
});
