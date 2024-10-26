import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedSavedSets {
    SelectedSets: number[]
}

const initialState: SelectedSavedSets = {SelectedSets: []};

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
        }
    },
})

export const { clearSelectedSavedSets, addSelectedSavedSet, newSelectedSavedSets } = SelectedSavedSetsSlice.actions;

export default SelectedSavedSetsSlice.reducer;