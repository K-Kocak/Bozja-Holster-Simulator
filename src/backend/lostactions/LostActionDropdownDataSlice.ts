import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import ILostActionDropdownDataForUse from '@backend/interfaces/ILostActionDropdownDataForUse';

const initialState: ILostActionDropdownDataForUse = {
    EncounterNumber: -1,
    IsPullWith: true,
    LeftOrRightOrEssence: "None",
    IndexOfLostActionResource: -1,
    IsInPull: false,
};

export const LostActionDropdownDataForUseSlice = createSlice({
    name: 'LostActionDropdownDataForUse',
    initialState,
    reducers: {
        /**
         * Resets the dropdown data encounter to -1. As no encounter can have -1 as a number, this prevents any dropdown box from displaying.
         * @param state, the current state
         */
        clearDropdownData: (state) => {
            state.EncounterNumber = -1;
        },

        /**
         * Sets dropdown state to display from a Pull With action
         * @param state, the current state
         * @param action, the dropdown to display from the clicked pull with action
         */
        setDropdownDataPullWith: (state, action: PayloadAction<{encounterNumber: number, actionTypeLeftOrRightOrEssence: string}>) => {
            state.EncounterNumber = action.payload.encounterNumber;
            state.LeftOrRightOrEssence = action.payload.actionTypeLeftOrRightOrEssence;
            state.IsPullWith = true;
        },

        /**
         * Sets dropdown state to display from a 'In Pull' or 'After Pull' action
         * @param state, the current state
         * @param action, containing the encounter number, the lost action position, whether it is 'In Pull' or 'After Pull'
         */
        setDropdownDataInPull: (state, action: PayloadAction<{encounterNumber: number, positionOfLostAction: number, isInPull: boolean}>) => {
            state.EncounterNumber = action.payload.encounterNumber;
            state.IndexOfLostActionResource = action.payload.positionOfLostAction;
            state.IsInPull = action.payload.isInPull;
            state.IsPullWith = false;
        },
    },
})

export const { clearDropdownData, setDropdownDataPullWith, setDropdownDataInPull } = LostActionDropdownDataForUseSlice.actions;

export default LostActionDropdownDataForUseSlice.reducer;

