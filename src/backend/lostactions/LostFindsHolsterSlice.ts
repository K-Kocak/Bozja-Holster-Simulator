import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IAction from '@backend/interfaces/IAction';
import IActionHolster from '@backend/interfaces/IActionHolster';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

function CreateActionQuantityArray(LostActions: IAction[]) : number[] {
    const ArrayToReturn : number[] = [];
    LostActions.forEach((LostAction) => {
        ArrayToReturn[LostAction.id] = 0;
    })
    return ArrayToReturn;
}
const actionQuantityArrayCreation = CreateActionQuantityArray(LostActionsAsObjectArray);

export interface LostFindsHolster {
    Holster: IActionHolster[],
    ActionQuantities: number[],
    CurrentWeight: number,
    SelectedWeight: number
}

const initialState: LostFindsHolster = {
    Holster: [],
    ActionQuantities: actionQuantityArrayCreation,
    CurrentWeight: 0,
    SelectedWeight: 0
};

export const LostFindsHolsterSlice = createSlice({
    name: 'LostFindsHolsterBag',
    initialState,
    reducers: {
        incrementActionQuantity: (state, action: PayloadAction<number>) => {
            state.ActionQuantities[action.payload] += 1;
        },
        decrementActionQuantity: (state, action: PayloadAction<number>) => {
            state.ActionQuantities[action.payload] -= 1;
        },

        setSelectedWeight: (state, action: PayloadAction<number>) => {
            state.SelectedWeight = action.payload;
        },

        increaseCurrentWeight: (state, action: PayloadAction<number>) => {
            state.CurrentWeight += action.payload;
        },
        decreaseCurrentWeight: (state, action: PayloadAction<number>) => {
            state.CurrentWeight -= action.payload;
        },

        removeActionFromHolster: (state, action: PayloadAction<number>) => {
            delete state.Holster[action.payload];
        },
        addActionToHolster: (state, action: PayloadAction<number>) => {
            state.Holster[action.payload] = {
                id: LostActionsAsObjectArray[action.payload].id,
                name: LostActionsAsObjectArray[action.payload].name.EN,
                img: LostActionsAsObjectArray[action.payload].img,
                weight: LostActionsAsObjectArray[action.payload].weight,
                category: LostActionsAsObjectArray[action.payload].category.EN,
            };
        },

        clearHolster: (state) => {
            state.Holster = [];
            state.CurrentWeight = 0;
            state.SelectedWeight = 0;
        }
    },
})

export const { incrementActionQuantity, decrementActionQuantity, setSelectedWeight, increaseCurrentWeight, decreaseCurrentWeight, removeActionFromHolster, addActionToHolster, clearHolster} = LostFindsHolsterSlice.actions;

export default LostFindsHolsterSlice.reducer;
