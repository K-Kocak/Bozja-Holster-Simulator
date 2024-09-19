import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';

import IActionHolster from '@backend/interfaces/IActionHolster';

import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

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
        },
        {
            id: 102,
            name: "Lost Font of Magic",
            img: LostActionsNoBorder.Offensive.LostFontofMagic,
            weight: 25,
            quantity: 3,
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
        changeTitleOfSpecificSavedSet: (state, action: PayloadAction<[number, string]>) => {
            state.Sets.forEach((SetInSets, index : number) => {
                if(SetInSets.id == action.payload[0]) {
                    state.Sets[index].nameOfSet = action.payload[1];
                }
            })         
        },

        deleteSavedSetFromSets: (state, action: PayloadAction<ILostActionSet[]>) => {         
            state.Sets = action.payload;
        }
    },
})

export const { addHolsterToSavedSets, changeTitleOfSpecificSavedSet, deleteSavedSetFromSets } = LostActionSetsSlice.actions;

export default LostActionSetsSlice.reducer;