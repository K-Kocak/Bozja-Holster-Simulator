import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ForgottenFragmentInfo {
    idOfFragmentDisplayed: number,
    idOfFragmentHovered: number,
    currentFilter: "name" | "rank",
    isSortedAscending: boolean
}

const initialState: ForgottenFragmentInfo = {
   idOfFragmentDisplayed: -1,
   idOfFragmentHovered: -1,
   currentFilter: "name",
   isSortedAscending: true
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
        },
        setFilterValue: (state, action: PayloadAction<"name" | "rank">) => {
            state.currentFilter = action.payload;
        },
        setIsSortedAscending: (state, action: PayloadAction<boolean>) => {
            state.isSortedAscending = action.payload;
        }
    },
})

export const { setFragmentHovered, setFragmentToDisplay, setFilterValue, setIsSortedAscending } = ForgottenFragmentInfoSlice.actions;

export default ForgottenFragmentInfoSlice.reducer;
