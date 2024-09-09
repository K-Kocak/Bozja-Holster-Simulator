import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';


export interface LostActionSets {
    Sets: ILostActionSet[],
}

const initialState: LostActionSets = {
    Sets: [],
    
};

export const LostActionSetsSlice = createSlice({
    name: 'LostActionSets',
    initialState,
    reducers: {
        addHolsterToSavedSets: (state, action: PayloadAction<number>) => {
            console.log(state.Sets);
        },
    },
})

export const { addHolsterToSavedSets } = LostActionSetsSlice.actions;

export default LostActionSetsSlice.reducer;