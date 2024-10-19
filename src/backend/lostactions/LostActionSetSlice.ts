import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';

import IActionHolster from '@backend/interfaces/IActionHolster';

import IHolsterTimeline, { IUserSlottedActions } from '../interfaces/IHolsterTimeline';

import { LoadSavedSetsFromLocalStorage } from './holstersetsstorage/SavedHolstersStorage';

export interface LostActionSets {
    Sets: ILostActionSet[],
}

const loadedSavedSetDataFromLocalStorage = LoadSavedSetsFromLocalStorage();

const initialState: LostActionSets = loadedSavedSetDataFromLocalStorage;

export const LostActionSetsSlice = createSlice({
    name: 'LostActionSets',
    initialState,
    reducers: {
        addHolsterToSavedSets: (state, action: PayloadAction<[IActionHolster[], number[], number, "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged", IUserSlottedActions, IHolsterTimeline]>) => {
            const currentHolster : IActionHolster[] = action.payload[0];
            const actionQuantities : number[] = action.payload[1];
            const weightOfHolster : number = action.payload[2];
            const roleTypeOfHolster = action.payload[3];
            const PrepopHolster = action.payload[4];
            const encounters = action.payload[5];
            
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
                setLostActionContents: HolsterToBeSaved,
                PrepopLostActions: PrepopHolster,
                HolsterTimeline: encounters
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
        },

        clearAllSavedSets: (state) => {
            state.Sets = [];
        },

        addImportedSavedSetsToCurrentSavedSets: (state, action: PayloadAction<ILostActionSet[]>) => {
            
            state.Sets.push(...action.payload);
        }
    },
})

export const { addHolsterToSavedSets, changeTitleOfSpecificSavedSet, deleteSavedSetFromSets, clearAllSavedSets, addImportedSavedSetsToCurrentSavedSets } = LostActionSetsSlice.actions;

export default LostActionSetsSlice.reducer;