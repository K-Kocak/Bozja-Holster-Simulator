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
    LostActionLeft: 101,
    LostActionRight: 102,
    EssenceInUse: 709
}

const GenerateBlankLostActionResourceSpent : ILostActionExpenditure = {
    LostActionUsed: 101,
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
                name: LostActionsAsObjectArray[action.payload].name.EN,
                img: LostActionsAsObjectArray[action.payload].img,
                weight: LostActionsAsObjectArray[action.payload].weight,
                category: LostActionsAsObjectArray[action.payload].category.EN,
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

        loadHolsterTimelineEncounters: (state, action: PayloadAction<IEncounter[]>) => {
            state.HolsterTimeline.Encounters = action.payload;
        },

        createNewHolsterTimelineEncounter: (state, action: PayloadAction<IEncounter>) => {
            state.HolsterTimeline.Encounters.push(action.payload);
        },

        createNewHolsterTimelineLostActionSpentInPull: (state, action: PayloadAction<number>) => {
            state.HolsterTimeline.Encounters[action.payload].LostActionsSpentInPull.push(GenerateBlankLostActionResourceSpent)
        },

        createNewHolsterTimelineLostActionSpentAfterPull: (state, action: PayloadAction<number>) => {
            state.HolsterTimeline.Encounters[action.payload].LostActionsSpentAfterPull.push(GenerateBlankLostActionResourceSpent)
        },

        setHolsterTimelineEncounterPullBossWith: (state, action: PayloadAction<[number, number, string]>) => {
            const EncounterNumber = action.payload[0];
            const NewLostActionToSet = action.payload[1];
            const LeftOrRightOrEssence = action.payload[2];

            switch (LeftOrRightOrEssence) {
                case "Left": {
                    state.HolsterTimeline.Encounters[EncounterNumber].PullBossWith.LostActionLeft = NewLostActionToSet;
                    break;
                }
                case "Right": {
                    state.HolsterTimeline.Encounters[EncounterNumber].PullBossWith.LostActionRight = NewLostActionToSet;
                    break;
                }
                case "Essence": {
                    state.HolsterTimeline.Encounters[EncounterNumber].PullBossWith.EssenceInUse = NewLostActionToSet;
                    break;
                }
            }
            
        },
        
        setHolsterTimelineEncounterTitleChange: (state, action: PayloadAction<[number, string]>) => {
            const encounterNumber = action.payload[0];
            const newTitle = action.payload[1];
            state.HolsterTimeline.Encounters[encounterNumber].NameOfBoss = newTitle;
        },

        setHolsterTimelineEncounterLostActionSpent: (state, action: PayloadAction<[number, number, number, boolean]>) => {
            const encounterNumber = action.payload[0];
            const lostActionPositionInArrayOfSpentResources = action.payload[1];
            const newLostAction = action.payload[2];
            const isInPull = action.payload[3].toString();
            
            if(isInPull == 'true') {
                console.log("true came out");
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentInPull[lostActionPositionInArrayOfSpentResources].LostActionUsed = newLostAction;
            }
            else if (isInPull == 'false') {
                console.log("false came out");
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentAfterPull[lostActionPositionInArrayOfSpentResources].LostActionUsed = newLostAction;
            }
        },

        setHolsterTimelineEncounterLostActionSpentTime: (state, action: PayloadAction<[number, number, string, boolean]>) => {
            const encounterNumber = action.payload[0];
            const lostActionPositionInArrayOfSpentResources = action.payload[1];
            const newTimeOfUseForLostAction = action.payload[2];
            const isInPull = action.payload[3].toString();
            if(isInPull == 'true') {
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentInPull[lostActionPositionInArrayOfSpentResources].LostActionTimeOfUse = newTimeOfUseForLostAction;
                
            }
            else if (isInPull == 'false') {
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentAfterPull[lostActionPositionInArrayOfSpentResources].LostActionTimeOfUse = newTimeOfUseForLostAction;
            }
        },

        setHolsterTimelineEncounterLostActionsSpentInOrAfterPull: (state, action: PayloadAction<[number, ILostActionExpenditure[], boolean]>) => {
            const encounterNumber = action.payload[0];
            const newLostActionsToSet = action.payload[1];
            const isInPull = action.payload[2].toString();

            if(isInPull == 'true') {
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentInPull = newLostActionsToSet;
            }
            else if (isInPull == 'false') {
                state.HolsterTimeline.Encounters[encounterNumber].LostActionsSpentAfterPull = newLostActionsToSet;
            }
        }



    },
})

export const { incrementActionQuantity, decrementActionQuantity, setActionQuantity, setSelectedWeight, increaseCurrentWeight, decreaseCurrentWeight, removeActionFromHolster, addActionToHolster, setSelectedRole, clearHolster, setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight, setPrepopHolsterLostActionEssence, loadHolsterTimelineEncounters, createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentInPull, createNewHolsterTimelineLostActionSpentAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull} = LostFindsHolsterSlice.actions;

export default LostFindsHolsterSlice.reducer;
