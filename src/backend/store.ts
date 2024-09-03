/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@backend/counterSlice';
import LostFindsHolsterReducer from '@backend/lostactions/LostFindsHolsterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        LostFindsHolster: LostFindsHolsterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


