import { BaseSyntheticEvent } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

//import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';
import '@css/ui/components/LostActionInstanceTimeline/LostActionInstanceTimelineContent.scss';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, loadHolsterTimelineEncounters, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '@backend/lostactions/LostFindsHolsterSlice';

import { IEncounter, ILostActionExpenditure } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';

import IAction from '@app/backend/interfaces/IAction';
import { clearDropdownData, setDropdownDataInPull, setDropdownDataPullWith } from '@backend/lostactions/LostActionDropdownDataSlice';
import { AutomateSeparator } from '@backend/lostactions/lostfindscache/LostActionsDivGen';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import { CreateDropdownLostActionHeader } from '@backend/lostactions/prepopholster/PrepopHolsterActions';

const GenerateNewBossInTimeline : IEncounter = {
    NameOfBoss: "New Boss",
    PullBossWith: {
        LostActionLeft: 101,
        LostActionRight: 102,
        EssenceInUse: 709,
    },
    LostActionsSpentInPull: [],
    LostActionsSpentAfterPull: []
}

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
            const LostActionResourceUsedImageLink = LostActionSpent.LostActionUsed != -1 ? LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img : QuestionMarkNoAction.img;
            const LostActionResourceSpentInPullToPush : React.JSX.Element = (         
                <div key={indexOfLostActionSpent} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">
                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                            <div onClick={HandleChangeLostActionResourceClicked} data-encounternumber={index} data-positionoflostaction={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                                <img src={LostActionResourceUsedImageLink}></img>
                            </div>
                            <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                                <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                    <span className="RemoveResourceButton">X</span> 
                                </div>
                                
                            </div>                             
                        </div>  
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                        <input onChange={HandleTimeOfUseUpdate} name={index.toString()} type="string" contentEditable="true" maxLength={5} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={true}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" value={LostActionSpent.LostActionTimeOfUse}></input>
                    </div>
                </div>
                
            )
            LostActionResourcesSpentInPullArray.push(LostActionResourceSpentInPullToPush);
        });

        const LostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent, indexOfLostActionSpent) => {
            const LostActionResourceUsedImageLink = LostActionSpent.LostActionUsed != -1 ? LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img : QuestionMarkNoAction.img;
            const LostActionResourceSpentAfterPullToPush : React.JSX.Element = (         
                <div key={indexOfLostActionSpent} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">

                        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                            <div onClick={HandleChangeLostActionResourceClicked} data-encounternumber={index} data-positionoflostaction={indexOfLostActionSpent} data-isinpull={false} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                                <img src={LostActionResourceUsedImageLink}></img>
                            </div>
                            <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                                <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                    <span className="RemoveResourceButton">X</span> 
                                </div>
                                
                            </div>                             
                        </div>  
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                        <input onChange={HandleTimeOfUseUpdate} name={index.toString()} type="string" contentEditable="true" maxLength={5} data-encounternumber={index} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" value={LostActionSpent.LostActionTimeOfUse}></input>
                    </div>
                </div>
                
            )
            LostActionResourcesSpentAfterPullArray.push(LostActionResourceSpentAfterPullToPush);
        });

        const LeftActionImageLink = Encounter.PullBossWith.LostActionLeft != -1 ? LostActionsAsObjectArray[Encounter.PullBossWith.LostActionLeft].img : QuestionMarkNoAction.img
        const RightActionImageLink = Encounter.PullBossWith.LostActionRight != -1 ? LostActionsAsObjectArray[Encounter.PullBossWith.LostActionRight].img : QuestionMarkNoAction.img
        const EssenceActionImageLink = Encounter.PullBossWith.EssenceInUse != -1 ? LostActionsAsObjectArray[Encounter.PullBossWith.EssenceInUse].img : QuestionMarkNoAction.img
        
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
            {AutomateSeparator()}
            <div className="LostActionInstanceTimelineIndividualEncounterPullBossWithSection">
                <div className="LostActionInstanceTimelineIndividualEncounterPullWithText">
                    <span>Pull Boss With:</span>
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionsContainer">
                    
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Left"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                            <img src={LeftActionImageLink}></img>
                        </div>
                       
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostAction">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Right"} className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionImage">
                        <img src={RightActionImageLink}></img>
                        </div>
                        
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssence">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={index} data-leftorrightoressence={"Essence"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftEssenceImage">
                        <img src={EssenceActionImageLink}></img>
                        </div>
                       
                    </div>
                </div>
            </div>
            {AutomateSeparator()}
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
            {AutomateSeparator()}
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
    const currentHolsterTimeline = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);
    const prepopEssenceId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.EssenceInUse);
    const prepopLeftActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionLeft);
    const prepopRightActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionRight);
    const currentActionsInHolster = useAppSelector((state) => state.LostFindsHolster.Holster);

    let LostActionDropdownCloseButton : string = "";
    let LostActionDropdownElementRows : React.JSX.Element = <></>;

    function HandleCloseLostActionDropdownWindow() {
        dispatch(clearDropdownData());
    }

    function CheckIfAnyEncounterExists() : boolean {
        console.log(currentHolsterTimeline);
        if(currentHolsterTimeline.length == 0) {
            const SetAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
            SetAllNotificationBox.childNodes[0].textContent = "No encounters to change.";
            SetAllNotificationBox.style.color = "white";
            setTimeout(ClearSetAllNotificationBox, 3000, SetAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
            return false;
        }
        return true;
    }

    function HandleSetAllEssencesToPrepop() {
        const newHolsterTimelineWithPrepopEssence : IEncounter[] = [];
        if(!CheckIfAnyEncounterExists()) {
            console.log("hi");
            return;
        }
        currentHolsterTimeline.forEach((Encounter) => {
            if(Encounter.PullBossWith.EssenceInUse == prepopEssenceId) {
                newHolsterTimelineWithPrepopEssence.push(Encounter);
            }
            else {
                newHolsterTimelineWithPrepopEssence.push({...Encounter, PullBossWith: {LostActionLeft: Encounter.PullBossWith.LostActionLeft, LostActionRight: Encounter.PullBossWith.LostActionRight, EssenceInUse: prepopEssenceId}})
            }
        });
        dispatch(loadHolsterTimelineEncounters(newHolsterTimelineWithPrepopEssence));
        const SetAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
        SetAllNotificationBox.childNodes[0].textContent = "'Pull With' essences set to prepop for all encounters.";
        SetAllNotificationBox.style.color = "white";
        setTimeout(ClearSetAllNotificationBox, 3000, SetAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
    }

    function HandleSetLeftRightActionsToPrepop() {
        const newHolsterTimelineWithPrepopLeftRightAction : IEncounter[] = [];
        if(!CheckIfAnyEncounterExists()) {
            return;
        }
        currentHolsterTimeline.forEach((Encounter) => {
            newHolsterTimelineWithPrepopLeftRightAction.push({...Encounter, PullBossWith: {LostActionLeft: prepopLeftActionId, LostActionRight: prepopRightActionId, EssenceInUse: Encounter.PullBossWith.EssenceInUse}})
        });
        dispatch(loadHolsterTimelineEncounters(newHolsterTimelineWithPrepopLeftRightAction));
        const SetAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
        SetAllNotificationBox.childNodes[0].textContent = "'Pull With' actions set to prepop for all encounters.";
        SetAllNotificationBox.style.color = "white";
        setTimeout(ClearSetAllNotificationBox, 3000, SetAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
    }

    function ClearSetAllNotificationBox(messageToCheck : string, idOfNotificationBox : string) {
        const SetAllNotificationBox = document.getElementById(idOfNotificationBox) as HTMLElement;
        if(SetAllNotificationBox.childNodes[0].textContent?.includes(messageToCheck)) {
            SetAllNotificationBox.childNodes[0].textContent = "";
            //SetAllNotificationBox.style.color = "";
        }
    }

    if(currentDropdownDataToDisplay.EncounterNumber != -1) {
        const encounterNumber = currentDropdownDataToDisplay.EncounterNumber;
        if(currentDropdownDataToDisplay.IsPullWith) {
            
            const LeftOrRightOrEssence = currentDropdownDataToDisplay.LeftOrRightOrEssence;
            console.log(LeftOrRightOrEssence);
            if(LeftOrRightOrEssence == "Essence") {
                LostActionDropdownCloseButton = "X";
                LostActionDropdownElementRows = CreateLostActionDropdownElementEssence(encounterNumber, dispatch);
                
                
            }
            else if (LeftOrRightOrEssence == "Left" || LeftOrRightOrEssence == "Right") {
                LostActionDropdownCloseButton = "X";
                LostActionDropdownElementRows = CreateLostActionDropdownElementNoEssence(encounterNumber, LeftOrRightOrEssence, dispatch);
            }
        }
        else {
            const indexOfLostActionResource = currentDropdownDataToDisplay.IndexOfLostActionResource;
            const isInPull = currentDropdownDataToDisplay.IsInPull;
            LostActionDropdownCloseButton = "X";
            LostActionDropdownElementRows = CreateLostActionDropdownElementAllLostActions(encounterNumber, indexOfLostActionResource, isInPull, currentActionsInHolster, dispatch);
        }
    }

    return (
        <div className="LostActionInstanceTimelineStateLostActionDropdownBoxesInnerContainer">
            <div style={{border: "2px solid #A5906F", width: "304px", height: "225px", borderRadius: "15px", display : "flex", alignItems : "center", justifyContent : "center", position : "relative", top : "5px"}}className="LostActionInstanceTimelineStateLostActionDropdownBoxElementContainer">
                {LostActionDropdownElementRows}
            </div>
           
            <div className="LostActionInstanceTimelineStateLostActionFunctions">
                <div onClick={HandleSetAllEssencesToPrepop} className="LostActionInstanceTimelineStateLostActionFunctionSetAllEssence">
                    <span>Set All Essences To Prepop Essence</span>
                </div>
                <div onClick={HandleSetLeftRightActionsToPrepop} className="LostActionInstanceTimelineStateLostActionFunctionSetAllActions">
                    <span>Set All Pull With Actions To Prepop Actions</span>
                </div>
                <div onClick={HandleCloseLostActionDropdownWindow} className="LostActionInstanceTimelineStateLostActionFunctionCloseWindow">
                    <span>{LostActionDropdownCloseButton}</span>
                </div>
                
            </div>
        </div>
    )
}

function CreateLostActionInstanceTimelineHelpBox() : React.JSX.Element {
    return (
        <div className="LostActionInstanceTimelineHelpBoxContainer">
            <div className="LostActionInstanceTimelineHelpBoxTitleAndClose">
                <div style={{width: "95%", paddingLeft: "5px"}} className="LostActionInstanceTimelineHelpBoxTitle">
                    <span>How To Use This Timeline</span>
                </div>
                <div onClick={HandleLostActionInstanceTimelineHelpDisplay} style={{width: "5%", fontSize: "20px"}} className="LostActionInstanceTimelineHelpBoxCloseButton">
                    <span>X</span>
                </div>
            </div>
            <div className="LostActionInstanceTimelineHelpBoxResources">
                <div className="LostActionInstanceTimelineHelpBoxPullWith">
                    <span>Pull Boss With:</span> These are the two lost actions and essence that you will have slotted in when the fight countdown hits 0.   
                </div>
                <div className="LostActionInstanceTimelineHelpBoxInPull">
                    <span>In Pull Actions:</span> These are the actions you will spend while the fight is ongoing. The optional textbox is the time in the fight you intend to slot in the action.
                </div>
                <div className="LostActionInstanceTimelineHelpBoxAfterPull">
                    <span>After Pull Actions:</span> These are the actions you will spend after the fight to reach the next encounter's Pull Boss With state.
                </div>
            </div>
        </div>
    )
}

function HandleLostActionInstanceTimelineHelpDisplay() {
    document.getElementById("LostActionInstanceTimelineHelpBox")?.classList.toggle("hidden");
}

//#region All Actions Dropdown

function CreateLostActionDropdownElementAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : boolean, currentActionsInHolster : IActionHolster[], dispatch: any) : React.JSX.Element {

    const DropdownRowsForNoEssences = CreateDropdownRowsForAllLostActions(encounterNumber, indexOfLostAction, isInPull, currentActionsInHolster, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">     
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {DropdownRowsForNoEssences}
            </div>                      
        </div>  
    )
}

function CreateDropdownRowsForAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : boolean, currentActionsInHolster : IActionHolster[], dispatch : any) : React.JSX.Element[] {

    const DropdownItemsArray : React.JSX.Element[] = [];
    currentActionsInHolster.forEach((LostActionInHolster) => {   
        const LostAction = LostActionsAsObjectArray[LostActionInHolster.id];
        const EssenceToPush = CreateDropdownRowForAllLostActions(LostAction, encounterNumber, indexOfLostAction, isInPull, dispatch);
        DropdownItemsArray.push(EssenceToPush);   
    });
    if(DropdownItemsArray.length > 0) {
        DropdownItemsArray.unshift(CreateDropdownLostActionHeader("Holster"))
    }
    else {
        DropdownItemsArray.push(<div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>Add Some Actions to the holster!</div>)
    }
    
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

function CreateDropdownRowsForNoEssences(encounterNumber : number, LeftOrRight : string, dispatch: any) : React.JSX.Element[][] {
    const dropdownItemsAs2DArray : React.JSX.Element[][] = [];
    
    for(let i = 0; i < 7; i++) {
        dropdownItemsAs2DArray.push([]);
    }
    //const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        if(LostAction.id < 700 && LostAction.id > 100) {
            const nonEssenceToPush = CreateDropdownRowForLostActionNoEssence(LostAction, encounterNumber, LeftOrRight, dispatch);
            switch (LostAction.category.EN) {
                case "Offensive":
                    dropdownItemsAs2DArray[0].push(nonEssenceToPush);
                    //DropdownItemsArrayOffensive.push(LostActionToPush);
                    break;
                case "Defensive":
                    dropdownItemsAs2DArray[1].push(nonEssenceToPush);
                    //DropdownItemsArrayDefensive.push(LostActionToPush);
                    break;
                case "Restorative":
                    dropdownItemsAs2DArray[2].push(nonEssenceToPush);
                    //DropdownItemsArrayRestorative.push(LostActionToPush);
                    break;
                case "Beneficial":
                    dropdownItemsAs2DArray[3].push(nonEssenceToPush);
                    //DropdownItemsArrayBeneficial.push(LostActionToPush);
                    break;
                case "Tactical":
                    dropdownItemsAs2DArray[4].push(nonEssenceToPush);
                    //DropdownItemsArrayTactical.push(LostActionToPush);
                    break;
                case "Detrimental":
                    dropdownItemsAs2DArray[5].push(nonEssenceToPush);
                    //DropdownItemsArrayDetrimental.push(LostActionToPush);
                    break;
                case "Item-Related":
                    dropdownItemsAs2DArray[6].push(nonEssenceToPush);
                    //DropdownItemsArrayItemRelated.push(LostActionToPush);
                    break;
                default:
                    break;
            }
            //DropdownItemsArray.push(nonEssenceToPush);
        }
    });
    const lostActionCategories = ["Offensive", "Defensive", "Restorative", "Beneficial", "Tactical", "Detrimental", "Item-Related"];
    dropdownItemsAs2DArray.forEach((dropdownItemCategory, index) => {
        if(dropdownItemCategory.length > 0) {
            dropdownItemCategory.unshift(CreateDropdownLostActionHeader(lostActionCategories[index]))
        }
    })
    return dropdownItemsAs2DArray;
    //return DropdownItemsArray;
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
    DropdownItemsArray.unshift(CreateDropdownLostActionHeader("Essence"));
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

    const prepopEssenceId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.EssenceInUse);
    const prepopLeftActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionLeft);
    const prepopRightActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionRight);

    const HolsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(currentStateOfAllEncounters, dispatch);
    const HolsterTimelineDropdownBoxToDisplay = CreateHolsterTimelineDropdownBoxToDisplay();

    function HandleAddEncounterClick() {
        const EncounterToPush : IEncounter = {...GenerateNewBossInTimeline, PullBossWith : { LostActionLeft: prepopLeftActionId, LostActionRight: prepopRightActionId, EssenceInUse: prepopEssenceId}};

        dispatch(createNewHolsterTimelineEncounter(EncounterToPush));
     
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
                <div className="LostActionInstanceTimelineHelpButtonContainer">
                    <div id="LostActionInstanceTimelineHelpBox" className="LostActionInstanceTimelineHelpBox hidden">
                        {CreateLostActionInstanceTimelineHelpBox()}
                    </div>
                    <div onClick={HandleLostActionInstanceTimelineHelpDisplay} className="LostActionInstanceTimelineHelpButton">
                        <span>?</span>
                    </div>
                </div>
                
                <div className="LostActionInstanceTimelineAddEncounter">
                    <div className="LostActionInstanceTimelineAddEncounterDiv" onClick={HandleAddEncounterClick}>
                        <span>!!  Click to Add Encounter  !!</span>
                    </div>
                </div>
                <div className="LostActionInstanceTimelineTitle">
                    <span>Instance Timeline</span>
                </div>
                <div id="LostActionInstanceTimelineSetAllNotificationBox" className="LostActionInstanceTimelineSetAllNotificationBox">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default CreateLostActionInstanceTimeline;