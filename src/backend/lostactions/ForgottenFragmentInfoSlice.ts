import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ForgottenFragmentInfo {
    idOfFragmentDisplayed: number,
    idOfFragmentHovered: number,
}

const initialState: ForgottenFragmentInfo = {
   idOfFragmentDisplayed: -1,
   idOfFragmentHovered: -1,
};

export const ForgottenFragmentInfoSlice = createSlice({
    name: 'ForgottenFragmentInfo',
    initialState,
    reducers: {
        setFragmentHovered: (state, action: PayloadAction<number>) => {
            state.idOfFragmentHovered = action.payload;
          
        },
        setFragmentToDisplay: (state, action: PayloadAction<number>) => {
            state.idOfFragmentDisplayed = action.payload;

        }
    },
})

export const { setFragmentHovered, setFragmentToDisplay } = ForgottenFragmentInfoSlice.actions;

export default ForgottenFragmentInfoSlice.reducer;
