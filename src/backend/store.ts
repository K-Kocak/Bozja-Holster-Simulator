/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@backend/counterSlice';
import LostFindsHolsterReducer from '@backend/lostactions/LostFindsHolsterSlice';
import LostActionSetsReducer from '@backend/lostactions/LostActionSetSlice';
import ForgottenFragmentInfoReducer from '@backend/lostactions/ForgottenFragmentInfoSlice';
import LostActionDropdownDataForUseReducer from '@backend/lostactions/LostActionDropdownDataSlice';
import SelectedSavedSetsReducer from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        LostFindsHolster: LostFindsHolsterReducer,
        LostActionSets: LostActionSetsReducer,
        ForgottenFragmentInfo: ForgottenFragmentInfoReducer,
        LostActionDropdownDataForUse: LostActionDropdownDataForUseReducer,
        SelectedSavedSets: SelectedSavedSetsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


