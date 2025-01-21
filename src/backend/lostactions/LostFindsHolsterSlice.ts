import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IAction from '@backend/interfaces/IAction';
import IActionHolster from '@backend/interfaces/IActionHolster';
import { IEncounter, ILostActionExpenditure, IUserSlottedActions } from '@backend/interfaces/IHolsterTimeline';

import IHolsterTimeline from '@backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';

function CreateActionQuantityArray(LostActions: IAction[]) : number[] {
    const ArrayToReturn : number[] = [];
    LostActions.forEach((LostAction) => {
        ArrayToReturn[LostAction.id] = 0;
    })
    return ArrayToReturn;
}
const actionQuantityArrayCreation = CreateActionQuantityArray(LostActionsAsObjectArray);

const PrepopHolsterResetState = {
    LostActionLeft: -1,
    LostActionRight: -1,
    EssenceInUse: -1
}

const GenerateBlankLostActionResourceSpent : ILostActionExpenditure = {
    LostActionUsed: -1,
    LostActionTimeOfUse: "N/A"
}

export interface LostFindsHolster {
    Holster: IActionHolster[],
    ActionQuantities: number[],
    CurrentWeight: number,
    SelectedWeight: number,
    SelectedRole: "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged",
    PrepopHolster: IUserSlottedActions,
    HolsterTimeline: IHolsterTimeline
}

const initialState: LostFindsHolster = {
    Holster: [],
    ActionQuantities: actionQuantityArrayCreation,
    CurrentWeight: 0,
    SelectedWeight: 0,
    SelectedRole: "Tank",
    PrepopHolster: PrepopHolsterResetState,
    HolsterTimeline: {
        Encounters: []
    }
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

        setActionQuantity: (state, action: PayloadAction<[number, number]>) => {
            state.ActionQuantities[action.payload[0]] += action.payload[1];
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

        removeActionFromHolster: (state, action: PayloadAction<IActionHolster[]>) => {        
            state.Holster = [];
            action.payload.forEach((LostActionInFilteredHolster) => {
                state.Holster[LostActionInFilteredHolster.id] = LostActionInFilteredHolster;
            });
            
        },
        addActionToHolster: (state, action: PayloadAction<number>) => {
            state.Holster[action.payload] = {
                id: LostActionsAsObjectArray[action.payload].id,
                quantity: 0
            };
        },

        setSelectedRole: (state, action: PayloadAction<"Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged">) => {
            state.SelectedRole = action.payload;
        },

        clearHolster: (state) => {
            state.Holster = [];
            state.ActionQuantities = actionQuantityArrayCreation;
            state.SelectedRole = "Tank";
            state.CurrentWeight = 0;
            state.SelectedWeight = 0;
            state.PrepopHolster = PrepopHolsterResetState;
            state.HolsterTimeline.Encounters = [];
        },

        setPrepopHolsterLostActionLeft: (state, action: PayloadAction<number>) => {
            state.PrepopHolster.LostActionLeft = action.payload;
        },

        setPrepopHolsterLostActionRight: (state, action: PayloadAction<number>) => {
            state.PrepopHolster.LostActionRight = action.payload;
        },

        setPrepopHolsterLostActionEssence: (state, action: PayloadAction<number>) => {
            state.PrepopHolster.EssenceInUse = action.payload;
        },

        loadHolsterTimelineEncounters: (state, action: PayloadAction<{encountersToLoad : IEncounter[]}>) => {
            state.HolsterTimeline.Encounters = action.payload.encountersToLoad;
        },

        createNewHolsterTimelineEncounter: (state, action: PayloadAction<{newBlankEncounter: IEncounter}>) => {
            state.HolsterTimeline.Encounters.push(action.payload.newBlankEncounter);
        },

        editHolsterTimelineEncounter: (state, action: PayloadAction<{ encounter : IEncounter, positionToPlace : number}>) => {
            state.HolsterTimeline.Encounters[action.payload.positionToPlace] = action.payload.encounter;
        },

        createNewHolsterTimelineLostActionSpentInPull: (state, action: PayloadAction<{encounterNumber : number}>) => {
            state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentInPull.push(GenerateBlankLostActionResourceSpent);
        },

        createNewHolsterTimelineLostActionSpentAfterPull: (state, action: PayloadAction<{encounterNumber : number}>) => {
            state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentAfterPull.push(GenerateBlankLostActionResourceSpent)
        },

        setHolsterTimelineEncounterPullBossWith: (state, action: PayloadAction<{encounterNumber: number, idOfLostAction: number, leftOrRightOrEssence: string}>) => {
            switch (action.payload.leftOrRightOrEssence) {
                case "Left": {
                    state.HolsterTimeline.Encounters[action.payload.encounterNumber].PullBossWith.LostActionLeft = action.payload.idOfLostAction;
                    break;
                }
                case "Right": {
                    state.HolsterTimeline.Encounters[action.payload.encounterNumber].PullBossWith.LostActionRight = action.payload.idOfLostAction;
                    break;
                }
                case "Essence": {
                    state.HolsterTimeline.Encounters[action.payload.encounterNumber].PullBossWith.EssenceInUse = action.payload.idOfLostAction;
                    break;
                }
            }
            
        },
        
        setHolsterTimelineEncounterTitleChange: (state, action: PayloadAction<{ encounterNumber: number, newNameOfBoss: string}>) => {
            state.HolsterTimeline.Encounters[action.payload.encounterNumber].NameOfBoss = action.payload.newNameOfBoss;
        },

        setHolsterTimelineEncounterLostActionSpent: (state, action: PayloadAction<{encounterNumber: number, indexOfLostAction: number, idOfLostAction: number, isInPull: string}>) => {
            if(action.payload.isInPull == 'true') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentInPull[action.payload.indexOfLostAction].LostActionUsed = action.payload.idOfLostAction;
            }
            else if (action.payload.isInPull == 'false') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentAfterPull[action.payload.indexOfLostAction].LostActionUsed = action.payload.idOfLostAction;
            }
        },

        /**
         * Sets a new string value for the time of use of a lost action
         * @param state, the current state
         * @param encounterNumber, the encounter which the lost action is located in
         * @param lostActionPositionInEncounter, the position of the lost action within the encounter's 'In Pull' or 'After Pull'
         * @param newTimeOfLostActionSpent, the new time to set
         * @param isInPull, whether the action is 'In Pull' or 'After Pull'.  
         */
        setHolsterTimelineEncounterLostActionSpentTime: (state, action: PayloadAction<{encounterNumber: number, lostActionPositionInEncounter: number, newTimeOfLostActionSpent: string, isInPull: string}>) => {
            if(action.payload.isInPull == 'true') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentInPull[action.payload.lostActionPositionInEncounter].LostActionTimeOfUse = action.payload.newTimeOfLostActionSpent;
                
            }
            else if (action.payload.isInPull == 'false') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentAfterPull[action.payload.lostActionPositionInEncounter].LostActionTimeOfUse = action.payload.newTimeOfLostActionSpent;
            }           
        },

        /**
         * Sets new set of lost actions spent for an encounter, at 'In Pull' or 'After Pull'
         * @param state, the current state
         * @param encounterNumber, the encounter which the to set new lost actions spent
         * @param lostActionsSpentInOrAfterPullForEncounter, the actions to be set
         * @param isInPull, whether to set actions 'In Pull' or 'After Pull'
         */
        setHolsterTimelineEncounterLostActionsSpentInOrAfterPull: (state, action: PayloadAction<{encounterNumber: number, lostActionsSpentInOrAfterPullForEncounter: ILostActionExpenditure[], isInPull: string}>) => {
            if(action.payload.isInPull == 'true') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentInPull = action.payload.lostActionsSpentInOrAfterPullForEncounter;
            }
            else if (action.payload.isInPull == 'false') {
                state.HolsterTimeline.Encounters[action.payload.encounterNumber].LostActionsSpentAfterPull = action.payload.lostActionsSpentInOrAfterPullForEncounter;
            }
        }
    },
})

export const { incrementActionQuantity, decrementActionQuantity, setActionQuantity, 
    setSelectedWeight, increaseCurrentWeight, decreaseCurrentWeight, 
    removeActionFromHolster, addActionToHolster, setSelectedRole, clearHolster, 
    setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight, setPrepopHolsterLostActionEssence, 
    loadHolsterTimelineEncounters, editHolsterTimelineEncounter,createNewHolsterTimelineEncounter, 
    createNewHolsterTimelineLostActionSpentInPull, createNewHolsterTimelineLostActionSpentAfterPull, setHolsterTimelineEncounterPullBossWith,
    setHolsterTimelineEncounterTitleChange, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime,
    setHolsterTimelineEncounterLostActionsSpentInOrAfterPull} = LostFindsHolsterSlice.actions;

export default LostFindsHolsterSlice.reducer;
