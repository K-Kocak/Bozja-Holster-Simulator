/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/LostActionInstanceTimelineContent.scss';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, loadHolsterTimelineEncounters, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '../LostFindsHolsterSlice';

import { IEncounter, ILostActionExpenditure } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';

import { BaseSyntheticEvent } from 'react';

import IAction from '@app/backend/interfaces/IAction';
import { clearDropdownData, setDropdownDataInPull, setDropdownDataPullWith } from '../LostActionDropdownDataSlice';

function CreateHolsterTimelineBossBoxes(ArrayOfEncounters : IEncounter[], dispatch : any) : React.JSX.Element[] {

    const currentStateOfAllEncounters = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters); 

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
    dispatch(createNewHolsterTimelineLostActionSpentAfterPull(event.target.id));
   }

    function HandleEncounterFunction(event : BaseSyntheticEvent) {
        // dispatch(loadHolsterTimelineEncounters(EncounterArray));
        const encounterIndexPressed : number = event.target.dataset.encounterindex;
        const lengthOfAllEncounters = currentStateOfAllEncounters.length;
        console.log(encounterIndexPressed);
        const NewEncounterArray : IEncounter[] = [];
        if(event.target.id == 'Up') {
            if(encounterIndexPressed != 0) {
                currentStateOfAllEncounters.forEach((Encounter, index) => {
                    if(encounterIndexPressed - 1 == index) {
                        NewEncounterArray.push(currentStateOfAllEncounters[index+1]);
                    }
                    else if(encounterIndexPressed == index) {
                        NewEncounterArray.push(currentStateOfAllEncounters[index-1]);
                    }
                    else {
                        NewEncounterArray.push(Encounter);
                    }
                })
                dispatch(loadHolsterTimelineEncounters(NewEncounterArray));
            }
        }
        else if(event.target.id == "Down") {  
            if(encounterIndexPressed != lengthOfAllEncounters-1) {
                currentStateOfAllEncounters.forEach((Encounter, index) => { 
                    // this doesn't work if i do indexPressed + 1 == index for some reason, no clue why.
                    if(encounterIndexPressed == index - 1) {
                        NewEncounterArray.push(currentStateOfAllEncounters[index-1]);
                    }
                    else if(encounterIndexPressed == index) {
                        NewEncounterArray.push(currentStateOfAllEncounters[index+1]);
                    }
                    else {
                        NewEncounterArray.push(Encounter);
                    }
                })
                console.log(NewEncounterArray);
                dispatch(loadHolsterTimelineEncounters(NewEncounterArray));
            }
        }
        else if(event.target.id == "Delete") {
            currentStateOfAllEncounters.forEach((Encounter, index) => {
                if(index != encounterIndexPressed) {
                    NewEncounterArray.push(Encounter);
                }
            });
            dispatch(loadHolsterTimelineEncounters(NewEncounterArray));
        }
        
    }

    function HandleTimeOfUseUpdate(event : BaseSyntheticEvent) {
  
        dispatch(setHolsterTimelineEncounterLostActionSpentTime([event.target.dataset.encounternumber, event.target.dataset.lostactionresourceposition, event.target.value, event.target.dataset.isinpull]))
    }

    function HandleLostActionRemoveResource(event : BaseSyntheticEvent) {
        console.log(event);
        dispatch(clearDropdownData());

        const isInPull : string = event.target.dataset.isinpull;

        const currentLostActionsSpentInOrAfterPullForEncounter : ILostActionExpenditure[] = isInPull == 'true' ? currentStateOfAllEncounters[event.target.dataset.encounternumber].LostActionsSpentInPull : currentStateOfAllEncounters[event.target.dataset.encounternumber].LostActionsSpentAfterPull;

        const newLostActionsSpentInOrAfterPullForEncounter : ILostActionExpenditure[] = [];
        currentLostActionsSpentInOrAfterPullForEncounter.forEach((LostActionSpent, indexTest) => {
            if(event.target.dataset.lostactionresourceposition != indexTest) {              
                newLostActionsSpentInOrAfterPullForEncounter.push(LostActionSpent);
            }
        });
        dispatch(setHolsterTimelineEncounterLostActionsSpentInOrAfterPull([event.target.dataset.encounternumber, newLostActionsSpentInOrAfterPullForEncounter, event.target.dataset.isinpull]));

    }

    function HandleLostActionPullWithClicked(event : BaseSyntheticEvent) {
        dispatch(setDropdownDataPullWith([event.target.dataset.encounternumber, event.target.dataset.leftorrightoressence]))
    }

    function HandleChangeLostActionResourceClicked(event : BaseSyntheticEvent) {
        dispatch(setDropdownDataInPull([event.target.dataset.encounternumber, event.target.dataset.positionoflostaction, event.target.dataset.isinpull]));
    }

    console.log("CreateHolsterTimelineBossBoxes");
    const ArrayOfEncounterBoxesToReturn : React.JSX.Element[] = [];
    ArrayOfEncounters.forEach((Encounter, index) => {
        // track the index of lost action spent, make 2 new functions ??
        const LostActionResourcesSpentInPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentInPull.forEach((LostActionSpent, indexOfLostActionSpent) => {
            const LostActionResourceSpentInPullToPush : React.JSX.Element = (         
                <div key={indexOfLostActionSpent} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">

                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                            <div onClick={HandleChangeLostActionResourceClicked} data-encounternumber={index} data-positionoflostaction={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                                <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                            </div>
                            <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                                <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                    <span className="RemoveResourceButton">X</span> 
                                </div>
                                
                            </div>                             
                        </div>  
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                        <input onChange={HandleTimeOfUseUpdate} name={index.toString()} type="string" contentEditable="true" maxLength={4} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" value={LostActionSpent.LostActionTimeOfUse}></input>
                    </div>
                </div>
                
            )
            LostActionResourcesSpentInPullArray.push(LostActionResourceSpentInPullToPush);
        });

        const LostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent, indexOfLostActionSpent) => {
            const LostActionResourceSpentAfterPullToPush : React.JSX.Element = (         
                <div key={indexOfLostActionSpent} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">

                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                            <div onClick={HandleChangeLostActionResourceClicked} data-encounternumber={index} data-positionoflostaction={indexOfLostActionSpent} data-isinpull={false} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                                <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                            </div>
                            <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                                <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                    <span className="RemoveResourceButton">X</span> 
                                </div>
                                
                            </div>                             
                        </div>  
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                        <input onChange={HandleTimeOfUseUpdate} name={index.toString()} type="string" contentEditable="true" maxLength={4} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" value={LostActionSpent.LostActionTimeOfUse}></input>
                    </div>
                </div>
                
            )
            LostActionResourcesSpentAfterPullArray.push(LostActionResourceSpentAfterPullToPush);
        });
       
        const EncounterBox = (
        <div key={index} className="LostActionInstanceTimelineIndividualEncounterContainer">
            <div className="LostActionInstanceTimelineIndividualEncounterBossNameAndFunctions">
                <div className="LostActionInstanceTimelineIndividualEncounterBossName">
                    <input id={index.toString()} onChange={HandleBossNameChange} name={index.toString()} type="string" contentEditable="true"  className="LostActionNameOfBossInputField" value={Encounter.NameOfBoss}></input>
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterFuntions">
                    <div onClick={HandleEncounterFunction} id={"Up"} data-encounterindex={index}  className="LostActionInstanceTimelineIndividualEncounterFunctionMoveLeft">
                        <span id={"Up"}>&uarr;</span>
                    </div>
                    <div onClick={HandleEncounterFunction} id={"Down"} data-encounterindex={index} className="LostActionInstanceTimelineIndividualEncounterFunctionMoveRight">
                        <span id={"Down"}>&darr;</span>
                    </div>
                    <div onClick={HandleEncounterFunction} id={"Delete"} data-encounterindex={index}  className="LostActionInstanceTimelineIndividualEncounterFunctionDeleteEncounter">
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
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Left"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.LostActionLeft].img}></img>
                        </div>
                       
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostAction">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Right"} className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.LostActionRight].img}></img>
                        </div>
                        
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssence">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Essence"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftEssenceImage">
                            <img src={LostActionsAsObjectArray[Encounter.PullBossWith.EssenceInUse].img}></img>
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

            <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullSection">
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullTextAndAddLostActionButton">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullText">
                        <span>After Pull Actions:</span>
                    </div>
                    <div id={index.toString()} onClick={HandleLostActionAddResourceAfterPull} className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullAddLostActionButton">
                            <span id={index.toString()}>Add Resource</span>
                    </div>
                </div>
                
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsContainer">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsArray">                       
                        {LostActionResourcesSpentAfterPullArray}
                    </div>
                </div>
            </div>
        </div>)
        ArrayOfEncounterBoxesToReturn.push(EncounterBox);
    })

    return ArrayOfEncounterBoxesToReturn;
}

function CreateHolsterTimelineDropdownBoxToDisplay() : React.JSX.Element {
    const dispatch = useAppDispatch();
    const currentDropdownDataToDisplay = useAppSelector((state) => state.LostActionDropdownDataForUse);
    let LostActionDropdownElementRows : React.JSX.Element = <></>;

    if(currentDropdownDataToDisplay.EncounterNumber != -1) {
        const encounterNumber = currentDropdownDataToDisplay.EncounterNumber;
        if(currentDropdownDataToDisplay.IsPullWith) {
            
            const LeftOrRightOrEssence = currentDropdownDataToDisplay.LeftOrRightOrEssence;
            if(LeftOrRightOrEssence == "Essence") {
                LostActionDropdownElementRows = CreateLostActionDropdownElementEssence(encounterNumber, dispatch);
            }
            else if (LeftOrRightOrEssence == "Left" || LeftOrRightOrEssence == "Right") {
                LostActionDropdownElementRows = CreateLostActionDropdownElementNoEssence(encounterNumber, LeftOrRightOrEssence, dispatch);
            }
        }
        else {
            const indexOfLostActionResource = currentDropdownDataToDisplay.IndexOfLostActionResource;
            const isInPull = currentDropdownDataToDisplay.IsInPull;
            LostActionDropdownElementRows = CreateLostActionDropdownElementAllLostActions(encounterNumber, indexOfLostActionResource, isInPull, dispatch);
        }
    }

    return (
        <div className="LostActionInstanceTimelineStateLostActionDropdownBoxesInnerContainer">
            {LostActionDropdownElementRows}
        </div>
    )
}

//#region All Actions Dropdown

function CreateLostActionDropdownElementAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : boolean, dispatch: any) : React.JSX.Element {

    const DropdownRowsForNoEssences = CreateDropdownRowsForAllLostActions(encounterNumber, indexOfLostAction, isInPull, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {DropdownRowsForNoEssences}
            </div>                      
        </div>  
    )
}

function CreateDropdownRowsForAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : boolean, dispatch : any) : React.JSX.Element[] {
    
    const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        const EssenceToPush = CreateDropdownRowForAllLostActions(LostAction, encounterNumber, indexOfLostAction, isInPull, dispatch);
        DropdownItemsArray.push(EssenceToPush);   
    });

    return DropdownItemsArray;
}

function CreateDropdownRowForAllLostActions(LostAction : IAction, encounterNumber : number, indexOfLostAction : number, isInPull : boolean, dispatch: (arg0: { payload: [number, number, number, boolean] | undefined; type: "LostActionDropdownDataForUse/clearDropdownData" | "LostFindsHolsterBag/setHolsterTimelineEncounterLostActionSpent"; }) => void) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfLostAction = event.target.id;
        console.log(isInPull);
        dispatch(setHolsterTimelineEncounterLostActionSpent([encounterNumber, indexOfLostAction, idOfLostAction, isInPull]));
        dispatch(clearDropdownData());
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

//#endregion

//#region No Essence Dropdown

function CreateLostActionDropdownElementNoEssence(encounterNumber : number, LeftOrRight : string, dispatch : any) : React.JSX.Element {

    const DropdownRowsForNoEssences = CreateDropdownRowsForNoEssences(encounterNumber, LeftOrRight, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {DropdownRowsForNoEssences}
            </div>                      
        </div>  
    )
}

function CreateDropdownRowsForNoEssences(encounterNumber : number, LeftOrRight : string, dispatch: any) : React.JSX.Element[] {
    
    const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        if(LostAction.id < 700) {
            const EssenceToPush = CreateDropdownRowForLostActionNoEssence(LostAction, encounterNumber, LeftOrRight, dispatch);
            DropdownItemsArray.push(EssenceToPush);
        }
    });

    return DropdownItemsArray;
}

function CreateDropdownRowForLostActionNoEssence(LostAction : IAction, encounterNumber : number, LeftOrRight : string, dispatch: any) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfLostAction = event.target.id;
        dispatch(setHolsterTimelineEncounterPullBossWith([encounterNumber, idOfLostAction, LeftOrRight]));
        dispatch(clearDropdownData());
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

//#endregion

//#region Essence Dropdown
function CreateLostActionDropdownElementEssence(encounterNumber : number, dispatch : any) : React.JSX.Element {
    
    const DropdownRowsForEssences = CreateDropdownRowsForEssences(encounterNumber, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {DropdownRowsForEssences}
            </div>                      
        </div>  
    )
}

function CreateDropdownRowsForEssences(encounterNumber : number, dispatch: any) : React.JSX.Element[] {
    
    const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        if(LostAction.id > 707 && LostAction.id < 744) {
            const EssenceToPush = CreateDropdownRowForLostActionEssence(LostAction, encounterNumber, dispatch);
            DropdownItemsArray.push(EssenceToPush);
        }
    });

    return DropdownItemsArray;
}

function CreateDropdownRowForLostActionEssence(LostAction : IAction, encounterNumber : number, dispatch: (arg0: { payload: [number, number, string] | undefined; type: "LostActionDropdownDataForUse/clearDropdownData" | "LostFindsHolsterBag/setHolsterTimelineEncounterPullBossWith"; }) => void) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfEssence = event.target.id;
        dispatch(setHolsterTimelineEncounterPullBossWith([encounterNumber, idOfEssence, "Essence"]));
        dispatch(clearDropdownData());
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

//#endregion

const CreateLostActionInstanceTimeline = () => {
    const dispatch = useAppDispatch();
    const currentStateOfAllEncounters = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);

    const HolsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(currentStateOfAllEncounters, dispatch);
    const HolsterTimelineDropdownBoxToDisplay = CreateHolsterTimelineDropdownBoxToDisplay();

    function HandleAddEncounterClick() {
        dispatch(createNewHolsterTimelineEncounter())
     
    }

    console.log(currentStateOfAllEncounters);
    return (
        <div className="LostActionInstanceTimelineInnerContainer">
           
            <div className="LostActionInstanceTimelineStateContainer">
                <div className="LostActionInstanceTimelineStateBossBoxes">
                    {HolsterTimelineBossBoxes}
                </div>
                <div className="LostActionInstanceTimelineStateLostActionDropdownBoxes">
                    {HolsterTimelineDropdownBoxToDisplay}
                </div>
                
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