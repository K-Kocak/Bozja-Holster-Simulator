/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@backend/counterSlice';
import LostFindsHolsterReducer from '@backend/lostactions/LostFindsHolsterSlice';
import LostActionSetsReducer from '@backend/lostactions/LostActionSetSlice';
import ForgottenFragmentInfoReducer from '@backend/lostactions/ForgottenFragmentInfoSlice';
import LostActionDropdownDataForUseReducer from '@backend/lostactions/LostActionDropdownDataSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        LostFindsHolster: LostFindsHolsterReducer,
        LostActionSets: LostActionSetsReducer,
        ForgottenFragmentInfo: ForgottenFragmentInfoReducer,
        LostActionDropdownDataForUse: LostActionDropdownDataForUseReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


