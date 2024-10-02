import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/LostActionInstanceTimelineContent.scss';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '../LostFindsHolsterSlice';

import { IEncounter } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';

import { BaseSyntheticEvent } from 'react';

import IAction from '@app/backend/interfaces/IAction';

export const CreateDropdownRowForLostAction = (LostAction : IAction, LeftOrRightOrEssence : string, dispatch, index : number) => {

    function HandleLostActionSelected(event : BaseSyntheticEvent) {
        const ActionToSet : number = event.target.id;
        switch (LeftOrRightOrEssence) {
            case "Left":         
            case "Right":
            case "Essence": {
                dispatch(setHolsterTimelineEncounterPullBossWith([index, ActionToSet, LeftOrRightOrEssence]));
                break;
            }
        }
    }

    return (
        <div key={LostAction.id} id={LostAction.id.toString()} onClick={HandleLostActionSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={LostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
} 

function CreateHolsterTimelineDropdownItems(PositionOfLostAction : string, dispatch, index : number) : React.JSX.Element[] {
    const DropdownItemsArray : React.JSX.Element[] = [];

    if(PositionOfLostAction == "Essence") {
        LostActionsAsObjectArray.forEach((LostAction) => {
            if(LostAction.id > 707 && LostAction.id < 744) {
                const EssenceToPush = CreateDropdownRowForLostAction(LostAction, "Essence", dispatch, index);
                DropdownItemsArray.push(EssenceToPush);
            }
        })
    }
    else if (PositionOfLostAction == "Left" || PositionOfLostAction == "Right") {
        LostActionsAsObjectArray.forEach((LostAction) => {
            if(LostAction.id < 700) {
                const LostActionToPush = CreateDropdownRowForLostAction(LostAction, PositionOfLostAction, dispatch, index);
                DropdownItemsArray.push(LostActionToPush);
            }
        })
    }
    else {
        LostActionsAsObjectArray.forEach((LostAction) => { 
            const LostActionToPush = CreateDropdownRowForLostAction(LostAction, PositionOfLostAction, dispatch, index);
            DropdownItemsArray.push(LostActionToPush);
            
        })
    }
    

    return DropdownItemsArray;
}


function CreateHolsterTimelineBossBoxes(ArrayOfEncounters : IEncounter[], dispatch) : React.JSX.Element[] {

    function HandleBossNameChange(event : BaseSyntheticEvent) {
        console.log("function called");
        console.log(event);
        dispatch(setHolsterTimelineEncounterTitleChange([event.target.id, event.target.value]));
    }

    function HandleLostActionAddResourceInPull(event : BaseSyntheticEvent) {
        console.log("HandleLostActionAddResourceInPull");
        dispatch(createNewHolsterTimelineLostActionSpentInPull(event.target.id));
    }

    function HandleLostActionAddResourceAfterPull(event : BaseSyntheticEvent) {
        console.log("HandleLostActionAddResourceAfterPull");
        dispatch(createNewHolsterTimelineLostActionSpentAfterPull(event.target.id));
    }

    const ArrayOfEncounterBoxesToReturn : React.JSX.Element[] = [];
    ArrayOfEncounters.forEach((Encounter, index) => {

        const LostActionResourcesSpentInPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentInPull.forEach((LostActionSpent) => {
            const LostActionSpentToPush : React.JSX.Element = (
                <div key={LostActionSpent.LostActionUsed}className="LostActionResourceSpentInPullIndividual">
                    <div className="LostActionResourceSpentInPullImage">
                        <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                    </div>
                    <div className="LostActionResourceSpentInPullTimeOfUse">
                        <span>{LostActionSpent.LostActionTimeOfUse}</span>
                    </div>
                </div>
            );
            LostActionResourcesSpentInPullArray.push(LostActionSpentToPush);
        });

        const LostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent) => {
            const LostActionSpentToPush : React.JSX.Element = (
                <div key={LostActionSpent.LostActionUsed}className="LostActionResourceSpentAfterPullIndividual">
                    <div className="LostActionResourceSpentAfterPullImage">
                        <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                    </div>
                    <div className="LostActionResourceSpentAfterPullTimeOfUse">
                        <span>{LostActionSpent.LostActionTimeOfUse}</span>
                    </div>
                </div>
            );
            LostActionResourcesSpentAfterPullArray.push(LostActionSpentToPush);
        });
       
        const EncounterBox = (
        <div key={index} className="LostActionInstanceTimelineIndividualEncounterContainer">
            <div className="LostActionPullBossWithAndNameOfBoss">
                <div className="LostActionNameOfBoss">
                    <input id={index.toString()} onChange={HandleBossNameChange} name={index.toString()} type="string" contentEditable="true"  className="LostActionNameOfBossInputField" defaultValue={Encounter.NameOfBoss}></input>
                </div>
                <div className="LostActionPullBossWith">
                    <div className="LostActionPullBossWithLeftAction">
                        <div className="LostActionPullBossWithLeftActionImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.LostActionLeft].img}></img>
                        </div>
                        
                        <div className="HolsterTimelineLostActionLeftSidePullWith">                      
                            <span className="DropdownArrow">V</span>

                            <div className="HolsterTimelineLostActionLeftSideDropdownContent">
                                <div className="HolsterTimelineLostActionDropdownContentInnerContainer">
                                    {CreateHolsterTimelineDropdownItems("Left", dispatch, index)}
                                </div>                      
                            </div>
                        
                        </div>
                    </div>
                    <div className="LostActionPullBossWithRightAction">
                        {LostActionsAsObjectArray[Encounter.PullBossWith.LostActionRight].name.EN}
                    </div>
                    <div className="LostActionPullBossWithEssence">
                        {LostActionsAsObjectArray[Encounter.PullBossWith.EssenceInUse].name.EN}
                    </div>
                </div>
            </div>
            <div className="LostActionResourcesSpentInPull">
                <div className="LostActionResourcesSpentInPullContainer">
                    {LostActionResourcesSpentInPullArray}
                </div>
                
                <div id={index.toString()} onClick={HandleLostActionAddResourceInPull}className="LostActionResourcesSpentInPullAddResourceButton">
                    <span id={index.toString()}>Hiiii</span>
                </div>
            </div>
            <div className="LostActionResourcesSpentAfterPull">
                <div className="LostActionResourcesSpentAfterPullContainer">
                    {LostActionResourcesSpentAfterPullArray}
                </div>
                <div id={index.toString()} onClick={HandleLostActionAddResourceAfterPull}className="LostActionResourcesSpentAfterPullAddResourceButton">
                    <span id={index.toString()}>Hiiii</span>
                </div>
            </div>
        </div>)
        ArrayOfEncounterBoxesToReturn.push(EncounterBox);
    })

    return ArrayOfEncounterBoxesToReturn;
}

const CreateLostActionInstanceTimeline = () => {
    const dispatch = useAppDispatch();
    const currentStateOfAllEncounters = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);

    const HolsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(currentStateOfAllEncounters, dispatch);

    function HandleAddEncounterClick() {
        dispatch(createNewHolsterTimelineEncounter())
     
    }

    console.log(currentStateOfAllEncounters);
    return (
        <div className="LostActionInstanceTimelineInnerContainer">
            <div className="LostActionInstanceTimelineTitleAndAddEncounter">
                <div className="LostActionInstanceTimelineTitle">
                    Title of holster Set? Or just title of this little section
                </div>
                <div className="LostActionInstanceTimelineAddEncounter">
                    <div className="LostActionInstanceTimelineAddEncounterDiv" onClick={HandleAddEncounterClick}>
                        <span>Add Encounter!</span>
                    </div>
                </div>
            </div>
            <div className="LostActionInstanceTimelineStateContainer">
                {HolsterTimelineBossBoxes}
            </div>
        </div>
    )
}
export default CreateLostActionInstanceTimeline;