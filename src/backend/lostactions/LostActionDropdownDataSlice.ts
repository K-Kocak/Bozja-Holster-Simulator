import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import ILostActionDropdownDataForUse from '@backend/interfaces/ILostActionDropdownDataForUse';

const initialState: ILostActionDropdownDataForUse = {
    EncounterNumber: -1,
    IsPullWith: true,
    LeftOrRightOrEssence: "None",
    IndexOfLostActionResource: -1,
    IsInPull: false
};

export const LostActionDropdownDataForUseSlice = createSlice({
    name: 'LostActionDropdownDataForUse',
    initialState,
    reducers: {
        clearDropdownData: (state) => {
            state.EncounterNumber = -1;
            /*
            state.IsPullWith = true;
            state.LeftOrRightOrEssence = "None";
            state.IndexOfLostActionResource = -1;
            state.IsInPull = false;
            */
        },

        setDropdownDataPullWith: (state, action: PayloadAction<[number, string]>) => {
            state.EncounterNumber = action.payload[0];
            state.LeftOrRightOrEssence = action.payload[1];
            state.IsPullWith = true;
            /*
            state.IsInPull = false;
            state.IndexOfLostActionResource = -1;
            */
        },

        setDropdownDataInPull: (state, action: PayloadAction<[number, number, boolean]>) => {
            state.EncounterNumber = action.payload[0];
            state.IndexOfLostActionResource = action.payload[1];
            state.IsInPull = action.payload[2];
            state.IsPullWith = false;
            //state.LeftOrRightOrEssence = "None";
        },
    },
})

export const { clearDropdownData, setDropdownDataPullWith, setDropdownDataInPull } = LostActionDropdownDataForUseSlice.actions;

export default LostActionDropdownDataForUseSlice.reducer;

