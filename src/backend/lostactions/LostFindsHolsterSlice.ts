import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IAction from '@backend/interfaces/IAction';
import IActionHolster from '@backend/interfaces/IActionHolster';
import { IEncounter, ILostActionExpenditure, IUserSlottedActions } from '@backend/interfaces/IHolsterTimeline';

import IHolsterTimeline from '@backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import { ILostActionSet } from '../interfaces/ILostActionSet';

/* Call function in another file that will use our current link (assuming its valid)
    and return a group of values that we will then use as our initial state if applicable.
    STRUCTURE OF LINK IDEAS:
    A holster is broken down into the following sections;
    - The Holster containing our actions
    - An action quantity array for the holster, telling us how many actions are in the holster for a lost action
    - Current Weight is not applicable. /////////////////////////
    - Total Weight of the holster
    - Role for the Holster
    - Prepop actions (3 lost action ids)
    - Holster Timeline - made up of an array of encounters. Each encounter has:
         - name of boss
         - pull boss with (basically prepop again)
         - array of actions spent in pull, with the time of use
         - array of actions spent after pull, with the time of use
    When handling a link, we (ideally) check if each section is valid and can be created, else we don't bother.
    We will need to redirect the user to /sim/ in this scenario
    In the case that some of the link works, redirect to /sim/ anyway
    When our state changes later on, this will affect our URL, but for now we are handling the initiation of our link
    (This will atleast allow us to generate links using saved set, then user #2 just clicks the link and gets the holster,
    ofcourse what would be even more nice would be if a user could make a holster and their URL updates live)

    // Use = as our separator - we will be encoding our link into base 64? as the final step
    
    // Holster + Action Weight
    // This will have the format ${idOfAction}-{quantityOfAction}
    // The position of the quantity in the array is the ID of the action, so the holster containing our actions might not even be necessary to access.

    // Total Weight
    // Just a value by itself from 1 to 99

    // Role
    // String Value, use the literal word

    // Prepop
    // ${LeftActionId}-{RightActionId}-{EssenceId}

    // Timeline
    // ${NameOfBoss}+{PullWithSection}+{InPullSection}+{AfterPullSection}
    // {PullWithSection} same as prepop
    // {InPullSection and AfterPullSection} => ${idOfAction}&TEXT-{idOfAction&TEXT} etc
    // Full Example: ${NameOfBoss}+{LeftActionId}-{RightActionId}-{EssenceId}+{idOfAction}&TEXT-{idOfAction&TEXT}+{idOfAction}&TEXT-{idOfAction&TEXT}
    // Split string at the + to get each sub section, then split on the - for each individual item. For in pull/after pull, split at & for text separation.

    // Combine full string, then encode base 64?. Decode would just happen as soon as we receive link on site load.

    // NOT DOING ANY OF THIS. SEE BozjaHolsterSimulator.tsx

*/

function CreateInitialStateOfHolster() : LostFindsHolster {
    const currentLinkOfSite = window.location.pathname;
    console.log(currentLinkOfSite);
    const removeSimPart = currentLinkOfSite.replace("/sim/", "");
    console.log(removeSimPart);
    if(removeSimPart.length > 0) {
        const holsterToRetrieve : ILostActionSet = DecodeLinkToHolster(removeSimPart);
        const convertHolster : LostFindsHolster = ConvertLostActionSetToLostFindsHolster(holsterToRetrieve);
        return convertHolster;
    }
    const holsterToReturn : LostFindsHolster = {
        Holster: [],
        ActionQuantities: CreateActionQuantityArray(LostActionsAsObjectArray),
        CurrentWeight: 0,
        SelectedWeight: 0,
        SelectedRole: "Tank",
        PrepopHolster: {
            LostActionLeft: -1,
            LostActionRight: -1,
            EssenceInUse: -1
        },
        HolsterTimeline: {
            Encounters: []
        }
    }
    return holsterToReturn 
    
}

function ConvertLostActionSetToLostFindsHolster(lostActionSet : ILostActionSet) : LostFindsHolster {
    const lostActionsInHolster : IActionHolster[] = [];
    const quantityArray : number[] = CreateActionQuantityArray(LostActionsAsObjectArray);
    lostActionSet.setLostActionContents.forEach((lostAction) => {
        lostActionsInHolster[lostAction.id] = {id: lostAction.id, quantity: 0}
        quantityArray[lostAction.id]++;
    })

    return {
        ActionQuantities: quantityArray,
        Holster: lostActionsInHolster,
        HolsterTimeline: lostActionSet.HolsterTimeline,
        PrepopHolster: lostActionSet.PrepopLostActions,
        SelectedRole: lostActionSet.roleTypeOfSet,
        CurrentWeight: lostActionSet.weightOfSet,
        SelectedWeight: 0
    }
    /*
    dispatch(setSelectedRole(savedSet.roleTypeOfSet));
    dispatch(increaseCurrentWeight(savedSet.weightOfSet));

    dispatch(setPrepopHolsterLostActionLeft(savedSet.PrepopLostActions.LostActionLeft));
    dispatch(setPrepopHolsterLostActionRight(savedSet.PrepopLostActions.LostActionRight));
    dispatch(setPrepopHolsterLostActionEssence(savedSet.PrepopLostActions.EssenceInUse));

    savedSet.setLostActionContents.forEach((lostActionInSavedSet) => {
        dispatch(addActionToHolster(lostActionInSavedSet.id));
        // below dispatch not entirely necessary as the total weight of a set is tracked
        // this does however ensure the weight of the set is always correct
        dispatch(setActionQuantity([lostActionInSavedSet.id, lostActionInSavedSet.quantity]));
    });

    dispatch(loadHolsterTimelineEncounters({encountersToLoad: savedSet.HolsterTimeline.Encounters})); 
    */
}

function DecodeLinkToHolster(linkToDecode : string) : ILostActionSet {
    return JSON.parse(window.atob(linkToDecode));
}

const retrieveInitialStateOfHolster = CreateInitialStateOfHolster();


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

const initialState: LostFindsHolster = retrieveInitialStateOfHolster;

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
