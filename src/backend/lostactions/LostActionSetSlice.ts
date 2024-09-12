import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';

import IActionHolster from '@backend/interfaces/IActionHolster';

import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

/*id: number,
    nameOfSet: string,
    roleTypeOfSet: "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged"
    weightOfSet: number,
    setLostActionContents: IActionHolster[],
*/

/*
id: number,
    name: string
    img: string,
    weight: number,
    category: "Offensive" | "Defensive" | "Restorative" | "Beneficial" | "Tactical" | "Detrimental" | "Item-Related",
*/

export interface LostActionSets {
    Sets: ILostActionSet[],
}

const initialState: LostActionSets = {
    Sets: [{
        id: 9999,
        nameOfSet: "Testing Set",
        roleTypeOfSet: "Melee",
        weightOfSet: 95,
        setLostActionContents: [{
            id: 101,
            name: "Lost Focus",
            img: LostActionsNoBorder.Offensive.LostFocus,
            weight: 6,
            quantity: 1,
            category: "Offensive"
        }]
    }],
    
};

export const LostActionSetsSlice = createSlice({
    name: 'LostActionSets',
    initialState,
    reducers: {
        addHolsterToSavedSets: (state, action: PayloadAction<[IActionHolster[], number[], number, "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged"]>) => {
            const currentHolster : IActionHolster[] = action.payload[0];
            const actionQuantities : number[] = action.payload[1];
            const weightOfHolster : number = action.payload[2];
            const roleTypeOfHolster = action.payload[3];
            
            const HolsterToBeSaved : IActionHolster[] = [];
            currentHolster.forEach((actionInHolster) => {              
                const actionToAdd : IActionHolster = {...currentHolster[actionInHolster.id], quantity: actionQuantities[actionInHolster.id]};
                HolsterToBeSaved.push(actionToAdd);             
            });

            state.Sets.push({
                id: Math.random()*10000,
                nameOfSet: "Title",
                roleTypeOfSet: roleTypeOfHolster,
                weightOfSet: weightOfHolster,
                setLostActionContents: HolsterToBeSaved
            });

            
        },
    },
})

export const { addHolsterToSavedSets } = LostActionSetsSlice.actions;

export default LostActionSetsSlice.reducer;