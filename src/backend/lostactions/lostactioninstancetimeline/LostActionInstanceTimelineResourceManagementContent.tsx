import { useAppSelector } from '@app/backend/hooks';
import IActionHolster from '@app/backend/interfaces/IActionHolster';

import { IEncounter } from '@app/backend/interfaces/IHolsterTimeline';

import '@css/ui/components/LostActionInstanceTimelineResourceManagementContent.scss';
import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';
/*
interface LostActionQuantityRemaining {
    id: number,
    quantity: number
}
*/
function CalculateTotalResourcesSpentInHolsterTimeline(currentStateOfHolsterTimeline : IEncounter[]) : number[] {
    const lostActionQuantitySpentArray : number[] = [];
    // const lostActionTypesSpentDictionary : number[] = [];
    // creates array of ids + quantities spent
    currentStateOfHolsterTimeline.forEach((Encounter) => {
        Encounter.LostActionsSpentInPull.forEach((LostActionSpent) => {

            const idOfLostActionSpent = LostActionSpent.LostActionUsed;

            if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] !== "undefined") {
                lostActionQuantitySpentArray[idOfLostActionSpent]--;
            }

            else if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] === "undefined") {
                //lostActionTypesSpentDictionary.push(idOfLostActionSpent);
                lostActionQuantitySpentArray[idOfLostActionSpent] = -1;
            }
        })
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent) => {

            const idOfLostActionSpent = LostActionSpent.LostActionUsed;

            if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] !== "undefined") {
                lostActionQuantitySpentArray[idOfLostActionSpent]--;
            }

            else if(typeof lostActionQuantitySpentArray[idOfLostActionSpent] === "undefined") {
                //lostActionTypesSpentDictionary.push(idOfLostActionSpent);
                lostActionQuantitySpentArray[idOfLostActionSpent] = -1;
            }
        })
    })

    return lostActionQuantitySpentArray;
}

function CalculateResourceDifferencesForHolster(TotalResourcesSpentInTimeline : number[], LostActionsInHolster : IActionHolster[], QuantitiesOfLostActionsInHolster : number[]) : number[] {
    LostActionsInHolster.forEach((LostActionInHolster) => {
        const idOfLostAction = LostActionInHolster.id;
        if(typeof TotalResourcesSpentInTimeline[idOfLostAction] !== "undefined") {
            TotalResourcesSpentInTimeline[idOfLostAction] = TotalResourcesSpentInTimeline[idOfLostAction] + QuantitiesOfLostActionsInHolster[idOfLostAction];
        }
        else if(typeof TotalResourcesSpentInTimeline[idOfLostAction] == "undefined") {
            TotalResourcesSpentInTimeline[idOfLostAction] = QuantitiesOfLostActionsInHolster[idOfLostAction];
        }
    })

    return TotalResourcesSpentInTimeline;
}

function CreateLostActionResourceArrayDivs(lostActionResourceDifferenceArrayToUse : number[]) : React.JSX.Element[][] {

    const lostActionResourcesStillToSpend : React.JSX.Element[] = [];
    const lostActionResourcesOverflowSpend : React.JSX.Element[] = [];
    lostActionResourceDifferenceArrayToUse.forEach((LostActionResource, idOfAction) => {
        if(LostActionResource > 0) {
            lostActionResourcesStillToSpend.push(
                <div key={idOfAction} className="LostActionResourceToSpend">
                    <div className="LostActionResourceToSpendImage">
                        <img src={LostActionsAsObjectArray[idOfAction].img}></img>
                    </div>
                    <div className="LostActionResourceToSpendQuantity">
                        <span>{LostActionResource}</span>
                    </div>
                </div>
            )
        }
        else if(LostActionResource < 0) {
            lostActionResourcesOverflowSpend.push(
                <div key={idOfAction} className="LostActionResourceToSpend">
                    <div className="LostActionResourceToSpendImage">
                        <img src={LostActionsAsObjectArray[idOfAction].img}></img>
                    </div>
                    <div className="LostActionResourceToSpendQuantity">
                        <span>{LostActionResource}</span>
                    </div>
                </div>
            )
        }
    })

    return [lostActionResourcesStillToSpend, lostActionResourcesOverflowSpend]
}

function CreateResourceManagementContent() : React.JSX.Element {

    const currentStateOfHolsterTimeline : IEncounter[] = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters)
    const buildLostActionTimelineTotalResourcesSpentArray : number[] = CalculateTotalResourcesSpentInHolsterTimeline(currentStateOfHolsterTimeline);

    const currentStateOfLostActionsInHolster = useAppSelector((state) => state.LostFindsHolster.Holster);
    const lostActionQuantitiesInHolster = useAppSelector((state) => state.LostFindsHolster.ActionQuantities);
    // essentially an array that determines what you need to spend more of (>0) and what you've spent too much of (<0)
    const lostActionTimelineResourceDifferenceArray : number[] = CalculateResourceDifferencesForHolster(buildLostActionTimelineTotalResourcesSpentArray, currentStateOfLostActionsInHolster, lostActionQuantitiesInHolster);

    const lostActionResourcesElementArray : React.JSX.Element[][] = CreateLostActionResourceArrayDivs(lostActionTimelineResourceDifferenceArray);
    const lostActionResourcesQuantityLessThanZero : React.JSX.Element[] = lostActionResourcesElementArray[1];
    const lostActionResourceQuantityGreaterThanZero : React.JSX.Element[] = lostActionResourcesElementArray[0];

    console.log(lostActionTimelineResourceDifferenceArray);

    return (
        <div className="LostActionInstanceTimelineResourceManagementContentInnerContainer">
            <div className="LostActionInstanceTimelineResourceManagementTitles">
                <div className="LostActionInstanceTimelineResourceManagementGreaterThanZero">
                    <span>Actions left to spend</span>
                </div>
                <div className="LostActionInstanceTimelineResourceManagementLessThanZero">
                    <span>Actions overflowing</span>
                </div>
            </div>
            <div className="LostActionInstanceTimelineResourceManagementLostActions">
                <div className="LostActionInstanceTimelineResourceManagementQuantityText">
                    <span>Quantity:</span>
                </div>
                <div className="LostActionInstanceTimelineResourceManagementLostActionDivsGreaterThanZero">
                    {lostActionResourceQuantityGreaterThanZero}
                </div>
                <div className="LostActionInstanceTimelineResourceManagementQuantityGap"></div>
                <div className="LostActionInstanceTimelineResourceManagementLostActionDivsLessThanZero">
                    {lostActionResourcesQuantityLessThanZero}
                </div>
            </div>
        </div>
    )
}

export default CreateResourceManagementContent;