import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedSavedSets {
    SelectedSets: number[]
    isConfirmDeletionOfSavedSets: boolean
}

const initialState: SelectedSavedSets = {SelectedSets: [], isConfirmDeletionOfSavedSets: false};

export const SelectedSavedSetsSlice = createSlice({
    name: 'SelectedSavedSets',
    initialState,
    reducers: {
        clearSelectedSavedSets: (state) => {         
            state.SelectedSets = [];
        },
        addSelectedSavedSet: (state, action: PayloadAction<number>) => {
            state.SelectedSets.push(action.payload);
            console.log(state.SelectedSets);
        },
        newSelectedSavedSets: (state, action: PayloadAction<number[]>) => {
            state.SelectedSets = action.payload;
        },
        setIsConfirmDeletionOfSavedSets: (state, action: PayloadAction<boolean>) => {
            state.isConfirmDeletionOfSavedSets = action.payload;
        }
    },
})

export const { clearSelectedSavedSets, addSelectedSavedSet, newSelectedSavedSets, setIsConfirmDeletionOfSavedSets } = SelectedSavedSetsSlice.actions;

export default SelectedSavedSetsSlice.reducer;