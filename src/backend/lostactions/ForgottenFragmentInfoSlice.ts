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

        /**
         * Sets the currently hovered forgotten fragment
         * @param state 
         * @param action, the id of the forgotten fragment that is being hovered over
         */
        setFragmentHovered: (state, action: PayloadAction<number>) => {
            state.idOfFragmentHovered = action.payload;
        },

        /**
         * Sets the fragment info to display
         * @param state 
         * @param action, the id of the forgotten fragment to display
         */
        setFragmentToDisplay: (state, action: PayloadAction<number>) => {
            state.idOfFragmentDisplayed = action.payload;
        },

        /**
         * Sets the filter value for forgotten fragments
         * @param state 
         * @param action, the filter value to set
         */
        setFilterValue: (state, action: PayloadAction<"name" | "rank">) => {
            state.currentFilter = action.payload;
        },

        /**
         * Swaps between ascending and descending when sorting the forgotten fragments
         * true = ascending, false = descending
         * @param state 
         * @param action, the new sort order
         */
        setIsSortedAscending: (state, action: PayloadAction<boolean>) => {
            state.isSortedAscending = action.payload;
        }
    },
})

export const { setFragmentHovered, setFragmentToDisplay, setFilterValue, setIsSortedAscending } = ForgottenFragmentInfoSlice.actions;

export default ForgottenFragmentInfoSlice.reducer;
