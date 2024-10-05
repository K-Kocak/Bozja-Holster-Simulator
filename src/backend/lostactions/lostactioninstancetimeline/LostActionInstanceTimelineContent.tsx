import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/LostActionInstanceTimelineContent.scss';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '../LostFindsHolsterSlice';

import { IEncounter, ILostActionExpenditure } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';

import { BaseSyntheticEvent } from 'react';

import IAction from '@app/backend/interfaces/IAction';

const CreateDropdownRowForAllLostActions = (dispatch) => {
    const DropdownItemsArrayForAllLostActions : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => { 
        const LostActionToPush = CrateDropdownRowForAllLostActionsRow(LostAction, dispatch);
        DropdownItemsArrayForAllLostActions.push(LostActionToPush);
        
    });
    return DropdownItemsArrayForAllLostActions;
}

function CrateDropdownRowForAllLostActionsRow(LostAction : IAction, dispatch) : React.JSX.Element {
    

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const actionToSet : number = event.target.id;
        const encounterNumber : number = event.target.parentElement.dataset.encounternumber;
        const indexOfLostActionSpent : number = event.target.parentElement.dataset.lostactionresourceposition;
        const isInPull : boolean = event.target.parentElement.dataset.isinpull;
        dispatch(setHolsterTimelineEncounterLostActionSpent([encounterNumber, indexOfLostActionSpent, actionToSet, isInPull]))
    }
   
    return (
        <div key={Math.random()} id={LostAction.id.toString()} onClick={HandleLostActionResourceSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={LostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
}

export const CreateDropdownRowForLostAction = (LostAction : IAction, LeftOrRightOrEssence : string, dispatch, index : number) => {

    function HandleLostActionSelected(event : BaseSyntheticEvent) {
        console.log(event);
       
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
    console.log("I am a row");
    return (
        <div key={Math.random()} id={LostAction.id.toString()} onClick={HandleLostActionSelected} className="DropdownItemLostActionRow">
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
    return DropdownItemsArray;
}

function CreateHolsterTimelineDropdownAllItems(encounterNumber : number, indexOfLostActionSpent : number, isInPull : boolean, dispatch) : React.JSX.Element[] {
    const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => { 
        const LostActionToPush = CreateDropdownRowForLostActionResourceSpent(LostAction, encounterNumber, indexOfLostActionSpent, isInPull, dispatch);
        DropdownItemsArray.push(LostActionToPush);
        
    });
    return DropdownItemsArray;
}

function CreateDropdownRowForLostActionResourceSpent(LostAction : IAction, encounterNumber : number, indexOfLostActionSpent : number, isInPull : boolean, dispatch) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        console.log(event);
        console.log(event.target.parentElement.dataset);
        const ActionToSet : number = event.target.id;
        dispatch(setHolsterTimelineEncounterLostActionSpent([encounterNumber, indexOfLostActionSpent, ActionToSet, isInPull]))
        
    }
    console.log("I am a row");
    return (
        <div key={Math.random()} id={LostAction.id.toString()} onClick={HandleLostActionResourceSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={LostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
}


function CreateHolsterTimelineBossBoxes(ArrayOfEncounters : IEncounter[], dispatch) : React.JSX.Element[] {

    const currentStateOfAllEncounters = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters); 
    const DropdownRowsForAllLostActions : React.JSX.Element[] = CreateDropdownRowForAllLostActions(dispatch);

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

    function HandleEncounterFunction(event : BaseSyntheticEvent) {
        console.log(event);
        console.log(event.target.id);
    }

    function HandleTimeOfUseUpdate(event : BaseSyntheticEvent) {  
        dispatch(setHolsterTimelineEncounterLostActionSpentTime([event.target.dataset.index, event.target.dataset.lostactionresourceposition, event.target.value, true]))
    }

    function HandleLostActionRemoveResource(event : BaseSyntheticEvent) {
        console.log(event);
     
        const currentLostActionsSpentInPullForEncounter : ILostActionExpenditure[] = currentStateOfAllEncounters[event.target.dataset.encounternumber].LostActionsSpentInPull;
        const newLostActionsSpentInPullForEncounter : ILostActionExpenditure[] = [];
        currentLostActionsSpentInPullForEncounter.forEach((LostActionSpent, indexTest) => {
            if(event.target.dataset.lostactionresourceposition != indexTest) {
                newLostActionsSpentInPullForEncounter.push(LostActionSpent);
            }
        });
        dispatch(setHolsterTimelineEncounterLostActionsSpentInOrAfterPull([event.target.dataset.encounternumber, newLostActionsSpentInPullForEncounter, event.target.dataset.isinpull]));

    }

    console.log("CreateHolsterTimelineBossBoxes");
    const ArrayOfEncounterBoxesToReturn : React.JSX.Element[] = [];
    ArrayOfEncounters.forEach((Encounter, index) => {
        // track the index of lost action spent, make 2 new functions ??
        const LostActionResourcesSpentInPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentInPull.forEach((LostActionSpent, indexOfLostActionSpent) => {

            
            LostActionResourcesSpentInPullArray[indexOfLostActionSpent] = (
                (
                    <div key={Math.random()} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                        <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">
    
                            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                                <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                                    <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                                </div>
                                <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                                    <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                        <span className="RemoveResourceButton">X</span> 
                                    </div>
                                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverV">
                                                            
                                        <span className="DropdownArrow">V</span>
    
                                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionDropdownContent">
                                            <div data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionDropdownContentInnerContainer">
                                                {DropdownRowsForAllLostActions}
                                            </div>                      
                                        </div>                            
                                    </div>
                                </div>                             
                            </div>  
                        </div>
                        <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                            <input onChange={HandleTimeOfUseUpdate} name={index.toString()} type="string" contentEditable="true" maxLength={4} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" defaultValue={LostActionSpent.LostActionTimeOfUse}></input>
                        </div>
                    </div>
                )
            )
            
        });

        const LostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent) => {
            const LostActionSpentToPush : React.JSX.Element = (
                <div></div>
            );
            LostActionResourcesSpentAfterPullArray.push(LostActionSpentToPush);
        });
       
        const EncounterBox = (
        <div key={index} className="LostActionInstanceTimelineIndividualEncounterContainer">
            <div className="LostActionInstanceTimelineIndividualEncounterBossNameAndFunctions">
                <div className="LostActionInstanceTimelineIndividualEncounterBossName">
                    <input id={index.toString()} onChange={HandleBossNameChange} name={index.toString()} type="string" contentEditable="true"  className="LostActionNameOfBossInputField" defaultValue={Encounter.NameOfBoss}></input>
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterFuntions">
                    <div onClick={HandleEncounterFunction} id={"Left"}  className="LostActionInstanceTimelineIndividualEncounterFunctionMoveLeft">
                        <span id={"Left"}>&lt;</span>
                    </div>
                    <div onClick={HandleEncounterFunction} id={"Right"} className="LostActionInstanceTimelineIndividualEncounterFunctionMoveRight">
                        <span id={"Right"}>&gt;</span>
                    </div>
                    <div onClick={HandleEncounterFunction} id={"Delete"} className="LostActionInstanceTimelineIndividualEncounterFunctionDeleteEncounter">
                        <span id={"Delete"}>X</span>
                    </div>
                </div>
            </div>
            
            <div className="LostActionInstanceTimelineIndividualEncounterPullBossWithSection">
                <div className="LostActionInstanceTimelineIndividualEncounterPullWithText">
                    <span>Pull Boss With:</span>
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionsContainer">
                    
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.LostActionLeft].img}></img>
                        </div>
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverV">                      
                            <span className="DropdownArrow">V</span>

                            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionDropdownContent">
                                <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionDropdownContentInnerContainer">
                                    {CreateHolsterTimelineDropdownItems("Left", dispatch, index)}
                                </div>                      
                            </div>
                        
                        </div>
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostAction">
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.LostActionRight].img}></img>
                        </div>
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionHoverV">                      
                            <span className="DropdownArrow">V</span>

                            <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionDropdownContent">
                                <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionDropdownContentInnerContainer">
                                    {CreateHolsterTimelineDropdownItems("Right", dispatch, index)}
                                </div>                      
                            </div>
                        
                        </div>
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssence">
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftEssenceImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.EssenceInUse].img}></img>
                        </div>
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssenceHoverV">                      
                            <span className="DropdownArrow">V</span>

                            <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssencenDropdownContent">
                                <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssenceDropdownContentInnerContainer">
                                    {CreateHolsterTimelineDropdownItems("Essence", dispatch, index)}
                                </div>                      
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullSection">
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullTextAndAddLostActionButton">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullText">
                        <span>In Pull Actions:</span>
                    </div>
                    <div id={index.toString()} onClick={HandleLostActionAddResourceInPull} className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullAddLostActionButton">
                            <span id={index.toString()}>Add Resource</span>
                    </div>
                </div>
                
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsContainer">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsArray">                       
                        {LostActionResourcesSpentInPullArray}
                    </div>
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
           
            <div className="LostActionInstanceTimelineStateContainer">
                {HolsterTimelineBossBoxes}
                <div style={{paddingLeft: "300px"}}className="LostActionInstanceTimelineStateContainerFreeSpace"></div>
            </div>
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
        </div>
    )
}

export default CreateLostActionInstanceTimeline;