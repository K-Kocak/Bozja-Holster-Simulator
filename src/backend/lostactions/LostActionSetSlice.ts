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

        /**
         * Adds actions in holster, prepop, and timeline as a saved set to the current saved sets
         * @param state 
         * @param action, containing info suchg as: the actions in holster, the quantities of actions in holster,
         * the weight of the holster, the role type of the holster, the prepop actions, the timeline for the holster 
         */
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

        /**
         * Changes the title of a saved set
         * @param state 
         * @param action, the id of the set and the new title of the set to set
         */
        changeTitleOfSpecificSavedSet: (state, action: PayloadAction<{idOfSet : number, titleOfSet: string}>) => {
            state.Sets.forEach((setInSets, index : number) => {
                if(setInSets.id == action.payload.idOfSet) {
                    state.Sets[index].nameOfSet = action.payload.titleOfSet;
                }
            })         
        },

        /**
         * Sets saved sets to the passed in value
         * @param state 
         * @param action, the new saved sets to set
         */
        setNewSavedSetsFromSets: (state, action: PayloadAction<ILostActionSet[]>) => {         
            state.Sets = action.payload;
        },

        /**
         * Deletes all saved sets
         * @param state 
         */
        clearAllSavedSets: (state) => {
            state.Sets = [];
        },

        /**
         * Appends the current saved sets with imported saved sets
         * @param state 
         * @param action, the saved sets to add
         */
        addImportedSavedSetsToCurrentSavedSets: (state, action: PayloadAction<ILostActionSet[]>) => {
            
            state.Sets.push(...action.payload);
        }
    },
})

export const { addHolsterToSavedSets, changeTitleOfSpecificSavedSet, setNewSavedSetsFromSets, clearAllSavedSets, addImportedSavedSetsToCurrentSavedSets } = LostActionSetsSlice.actions;

export default LostActionSetsSlice.reducer;