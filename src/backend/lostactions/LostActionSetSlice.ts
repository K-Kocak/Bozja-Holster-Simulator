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
        addHolsterToSavedSets: (state, action: PayloadAction<{actionsInHolster: IActionHolster[], quantitiesOfActionsInHolster: number[], weightOfHolster: number, roleTypeOfHolster: "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged", prepopOfHolster: IUserSlottedActions, timelineOfHolster: IHolsterTimeline}>) => {

            const holsterToBeSaved : IActionHolster[] = [];
            action.payload.actionsInHolster.forEach((actionInHolster) => {              
                const actionToAdd : IActionHolster = {...action.payload.actionsInHolster[actionInHolster.id], quantity: action.payload.quantitiesOfActionsInHolster[actionInHolster.id]};
                holsterToBeSaved.push(actionToAdd);             
            });

            state.Sets.push({
                id: Math.random()*10000,
                nameOfSet: action.payload.roleTypeOfHolster + " Holster",
                roleTypeOfSet: action.payload.roleTypeOfHolster,
                weightOfSet: action.payload.weightOfHolster,
                setLostActionContents: holsterToBeSaved,
                PrepopLostActions: action.payload.prepopOfHolster,
                HolsterTimeline: action.payload.timelineOfHolster
            });
        },
        changeTitleOfSpecificSavedSet: (state, action: PayloadAction<{idOfSet : number, titleOfSet: string}>) => {
            state.Sets.forEach((setInSets, index : number) => {
                if(setInSets.id == action.payload.idOfSet) {
                    state.Sets[index].nameOfSet = action.payload.titleOfSet;
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