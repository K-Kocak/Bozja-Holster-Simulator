import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IAction from '@backend/interfaces/IAction';
import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

export interface LostFindsHolster {
    Holster: IAction[],
    CurrentWeight: number,
    SelectedWeight: number
}

const initialState: LostFindsHolster = {
    Holster: [],
    CurrentWeight: 0,
    SelectedWeight: 0
};

//const initialState: IAction[] = [];

export const LostFindsHolsterSlice = createSlice({
    name: 'LostFindsHolsterBag',
    initialState,
    reducers: {
        incrementActionQuantity: (state, action: PayloadAction<number>) => {
            state.Holster[action.payload].quantity += 1;
        },
        decrementActionQuantity: (state, action: PayloadAction<number>) => {
            state.Holster[action.payload].quantity -= 1;
        },

        setSelectedWeight: (state, action: PayloadAction<number>) => {
            state.SelectedWeight = action.payload;
        },

        IncreaseCurrentWeight: (state, action: PayloadAction<number>) => {
            state.CurrentWeight += action.payload;
        },
        decreaseCurrentWeight: (state, action: PayloadAction<number>) => {
            state.CurrentWeight -= action.payload;
        },

        removeActionFromHolster: (state, action: PayloadAction<number>) => {
            state.Holster.splice(action.payload, 1);
        },
        addActionToHolster: (state, action: PayloadAction<number>) => {
            state.Holster[action.payload] = LostActionsAsObjectArray[action.payload];
            incrementActionQuantity(action.payload);
        },

        clearHolster: (state) => {
            state.Holster = [];
            state.CurrentWeight = 0;
            state.SelectedWeight = 0;
        }
    },
})

export const { incrementActionQuantity, decrementActionQuantity, setSelectedWeight, IncreaseCurrentWeight, decreaseCurrentWeight, removeActionFromHolster, addActionToHolster, clearHolster} = LostFindsHolsterSlice.actions;

export default LostFindsHolsterSlice.reducer;
