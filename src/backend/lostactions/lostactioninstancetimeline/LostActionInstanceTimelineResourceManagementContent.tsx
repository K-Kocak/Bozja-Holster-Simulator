import { useAppSelector } from '@app/backend/hooks';
import IActionHolster from '@app/backend/interfaces/IActionHolster';

import { IEncounter, ILostActionExpenditure } from '@app/backend/interfaces/IHolsterTimeline';

import '@css/ui/components/LostActionInstanceTimeline/LostActionInstanceTimelineResourceManagementContent.scss';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import { AutomateSeparator } from '../lostfindscache/LostActionsDivGen';

/**
 * Creates an array containing how many times a lost action has been used in the instance timeline
 * @param currentEncountersInHolsterTimeline, the encounters in this encounter timeline for this holster
 * @returns the number of each lost action in the holster that is spent in the timeline
 */
function CalculateTotalResourcesSpentInHolsterTimeline(currentEncountersInHolsterTimeline : IEncounter[]) : number[] {
    const lostActionQuantitySpentArray : number[] = [];
    currentEncountersInHolsterTimeline.forEach((encounter) => {
        encounter.LostActionsSpentInPull.forEach((lostActionSpent) => {
            AddActionSpentToQuantityArray(lostActionSpent, lostActionQuantitySpentArray);
        })
        encounter.LostActionsSpentAfterPull.forEach((lostActionSpent) => {
            AddActionSpentToQuantityArray(lostActionSpent, lostActionQuantitySpentArray);
        })
    })

    return lostActionQuantitySpentArray;
}

/**
 * Edits a quantity spent array with an action that has been spent in the timeline
 * @param lostActionSpent, the lost action that has been spent in the timeline 
 * @param lostActionQuantitySpentArray, the array that is tracking what has been spent 
 */
function AddActionSpentToQuantityArray(lostActionSpent : ILostActionExpenditure, lostActionQuantitySpentArray: number[]) {
    const idOfLostActionSpent = lostActionSpent.LostActionUsed;
    // checks if the action exists yet in the array. if it does, reduce value by 1
    if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] !== "undefined") {
        lostActionQuantitySpentArray[idOfLostActionSpent]--;
    }
    // if action doesn't exist yet (undefined) set quantity to -1
    else if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] === "undefined") {
        //lostActionTypesSpentDictionary.push(idOfLostActionSpent);
        lostActionQuantitySpentArray[idOfLostActionSpent] = -1;
    }
}

/**
 * Calculates the difference between the lost actions spent in the timeline and the lost actions in the holster
 * @param totalResourcesSpentInTimeline, the array of lost action ids spent in the timeline
 * @param lostActionsInHolster, the current lost actions in your holster
 * @param quantitiesOfLostActionsInHolster, the array of quantities of lost actions in your holster
 * @returns an array containing the total resources remaining to spend or have spend too much off
 */
function CalculateResourceDifferencesForHolster(totalResourcesSpentInTimeline : number[], lostActionsInHolster : IActionHolster[], quantitiesOfLostActionsInHolster : number[]) : number[] {
    lostActionsInHolster.forEach((lostActionInHolster) => {
        const idOfLostAction = lostActionInHolster.id;
        if(typeof totalResourcesSpentInTimeline[idOfLostAction] !== "undefined") {
            totalResourcesSpentInTimeline[idOfLostAction] += quantitiesOfLostActionsInHolster[idOfLostAction];
        }
        else if(typeof totalResourcesSpentInTimeline[idOfLostAction] == "undefined") {
            totalResourcesSpentInTimeline[idOfLostAction] = quantitiesOfLostActionsInHolster[idOfLostAction];
        }
    })
    return totalResourcesSpentInTimeline;
}

/**
 * Creates and returns two arrays containing the HTML about lost actions that still need to be spent or have spent too much of
 * @param lostActionResourceDifferenceArrayToUse, the lost actions to spend or have spent too much of
 * @returns two arrays containing the lost actions that still need to be spent and the lost actions that have been overspent
 */
function CreateLostActionResourceArrayDivs(lostActionResourceDifferenceArrayToUse : number[]) : React.JSX.Element[][] {

    const lostActionResourcesStillToSpend : React.JSX.Element[] = [];
    const lostActionResourcesOverflowSpend : React.JSX.Element[] = [];
    lostActionResourceDifferenceArrayToUse.forEach((lostActionResource, idOfAction) => {
        if(lostActionResource > 0) {
            lostActionResourcesStillToSpend.push(CreateLostActionResourceToSpendDiv(lostActionResource, idOfAction));
        }
        else if(lostActionResource < 0) {
            lostActionResourcesOverflowSpend.push(CreateLostActionResourceToSpendDiv(lostActionResource, idOfAction))
        }
    })

    return [lostActionResourcesStillToSpend, lostActionResourcesOverflowSpend]
}

/**
 * Creates the HTML for a lost action that still needs to be spent or have spent too much of
 * @param lostActionSpentCount, the amount the lost action needs to be spent more of or less of
 * @param idOfLostAction, the id of the lost action
 * @returns HTML element displaying info about the resource
 */
function CreateLostActionResourceToSpendDiv(lostActionSpentCount: number, idOfLostAction: number) {
    return (
        <div key={idOfLostAction} className="LostActionResourceToSpend">
            <div className="LostActionResourceToSpendImage">
                <img src={LostActionsAsObjectArray[idOfLostAction].img}></img>
            </div>
            <div className="LostActionResourceToSpendQuantity">
                <span>{lostActionSpentCount}</span>
            </div>
        </div>
    )
}

/**
 * Creates and returns the resource management content
 * @returns The resource management content
 */
function CreateResourceManagementContent() : React.JSX.Element {
    const holsterTimelineEncounters : IEncounter[] = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);
    const currentHolster : IActionHolster[] = useAppSelector((state) => state.LostFindsHolster.Holster);
    const actionQuantitiesInHolster : number[] = useAppSelector((state) => state.LostFindsHolster.ActionQuantities);

    const buildLostActionTimelineTotalResourcesSpentArray : number[] = CalculateTotalResourcesSpentInHolsterTimeline(holsterTimelineEncounters);
    const lostActionTimelineResourceDifferenceArray : number[] = CalculateResourceDifferencesForHolster(buildLostActionTimelineTotalResourcesSpentArray, currentHolster, actionQuantitiesInHolster);

    const lostActionResourcesElementArray : React.JSX.Element[][] = CreateLostActionResourceArrayDivs(lostActionTimelineResourceDifferenceArray);

    const lostActionResourcesQuantityLessThanZero : React.JSX.Element[] = lostActionResourcesElementArray[1];
    const lostActionResourceQuantityGreaterThanZero : React.JSX.Element[] = lostActionResourcesElementArray[0];

    /**
     * Toggles the hidden class for the help box in the timeline area
     */
    function HandleLostActionInstanceTimelineResourceManagementHelpDisplay() {
        document.getElementById("LostActionInstanceTimelineResourceManagementHelpBox")?.classList.toggle("hidden");
    }

    return (
        <div className="LostActionInstanceTimelineResourceManagementContentInnerContainer">
            <div className="LostActionInstanceTimelineResourceManagementTitles">
                <div className="LostActionInstanceTimelineResourceManagementGreaterThanZero">
                    <span>Actions left to spend in the timeline . . .</span>
                </div>
                <div className="LostActionInstanceTimelineResourceManagementLessThanZero">
                    <span>&darr; Overspent &darr;</span>
                </div>
            </div>
            <div className="LostActionInstanceTimelineResourceManagementLostActions">
                <div className="LostActionInstanceTimelineResourceManagementQuantityText">
                    <span>Quantity :</span>
                </div>
                <div className="LostActionInstanceTimelineResourceManagementLostActionDivsGreaterThanZero">
                    {lostActionResourceQuantityGreaterThanZero}
                </div>
                <div className="LostActionInstanceTimelineResourceManagementQuantityGap">
                    {AutomateSeparator()}
                </div>
                <div className="LostActionInstanceTimelineResourceManagementLostActionDivsLessThanZero">
                    {lostActionResourcesQuantityLessThanZero}
                </div>
            </div>
            <div className="LostActionInstanceTimelineResourceManagementHelpBoxContainer">
                <div onClick={HandleLostActionInstanceTimelineResourceManagementHelpDisplay} className="LostActionInstanceTimelineResourceManagementHelpButton">
                        <span>?</span>
                </div>
                <div id="LostActionInstanceTimelineResourceManagementHelpBox" className="LostActionInstanceTimelineResourceManagementHelpBox hidden">
                    <div style={{marginTop: "5px"}} className="LostActionInstanceTimelineResourceManagementHelpBoxTitleAndClose">
                        <div style={{width: "95%", paddingLeft: "5px"}} className="LostActionInstanceTimelineResourceManagementHelpBoxTitle">
                                <span>Action Management</span>
                        </div>
                        <div onClick={HandleLostActionInstanceTimelineResourceManagementHelpDisplay} style={{width: "5%"}} className="LostActionInstanceTimelineResourceManagementHelpBoxCloseButton">
                                <span style={{fontSize: "20px"}}>X</span>
                        </div>
                    </div>
                    <div className="LostActionInstanceTimelineResourceManagementHelpBoxResources">
                        <div>
                             <span>This is a tracker for the actions in your Lost Finds Holster that you still haven't spent -- or have spent too much of, in the Instance Timeline.</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateResourceManagementContent;