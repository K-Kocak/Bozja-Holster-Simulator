import { BaseSyntheticEvent } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

//import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';
import '@css/ui/components/LostActionInstanceTimeline/LostActionInstanceTimelineContent.scss';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, editHolsterTimelineEncounter, loadHolsterTimelineEncounters, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '@backend/lostactions/LostFindsHolsterSlice';

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


/**
 * Resets some css properties of the dropdown close button for the lost action timeline
 */
function LostActionInstanceTimelineDropdownCloseButtonReset() {
    const lostActionInstanceTimelineDropdownCloseButton = document.getElementById("LostActionInstanceTimelineStateLostActionFunctionCloseWindow") as HTMLElement;
    lostActionInstanceTimelineDropdownCloseButton.style.border = "none"
    lostActionInstanceTimelineDropdownCloseButton.style.padding = "0px";
}

function CreateHolsterTimelineBossBoxes(arrayOfEncounters : IEncounter[]) : React.JSX.Element[] {
    const dispatch = useAppDispatch();

    /**
     * Changes the name of the boss to what was inputted
     * @param event, the new title of the boss to set and the encounter number
     */
    function HandleBossNameChange(event : BaseSyntheticEvent) {
        console.log("BossNameChange");
        dispatch(setHolsterTimelineEncounterTitleChange({encounterNumber: event.target.id, newNameOfBoss: event.target.value}));
    }

    /**
     * Adds a new resource (IN PULL) to spend for the encounter that was pressed
     * @param event, the encounter number of the add resource button that was pressed
     */
    function HandleLostActionAddResourceInPull(event : BaseSyntheticEvent) {
        console.log("HandleLostActionAddResourceInPull");
        dispatch(createNewHolsterTimelineLostActionSpentInPull({encounterNumber: event.target.id}));
    }

    /**
     * Adds a new resource (AFTER PULL) to spend for the encounter that was pressed
     * @param event, the encounter number of the add resource button that was pressed
     */
    function HandleLostActionAddResourceAfterPull(event : BaseSyntheticEvent) {
        dispatch(createNewHolsterTimelineLostActionSpentAfterPull({encounterNumber: event.target.id}));
    }

    /**
     * Moves an encounter up, down, or deletes it, depending on what button was pressed
     * @param event, the function button that was pressed
     */
    function HandleEncounterFunctionPress(event : BaseSyntheticEvent) {
        const encounterNumberOfFunction: number = event.target.dataset.encounternumber;
        const typeOfFunctionPressed: string = event.target.id;
        const copyOfEncounterPressed = arrayOfEncounters[encounterNumberOfFunction];

        if(typeOfFunctionPressed == 'Up') {
            if(encounterNumberOfFunction > 0) {
                dispatch(editHolsterTimelineEncounter({encounter: arrayOfEncounters[Number(encounterNumberOfFunction) - 1], positionToPlace: encounterNumberOfFunction}));
                dispatch(editHolsterTimelineEncounter({encounter: copyOfEncounterPressed, positionToPlace: Number(encounterNumberOfFunction) - 1}))
            }
        }
        else if(typeOfFunctionPressed == "Down") {  
            if(encounterNumberOfFunction < arrayOfEncounters.length - 1) {
                dispatch(editHolsterTimelineEncounter({encounter: arrayOfEncounters[Number(encounterNumberOfFunction) + 1], positionToPlace: encounterNumberOfFunction}));      
                dispatch(editHolsterTimelineEncounter({encounter: copyOfEncounterPressed, positionToPlace: Number(encounterNumberOfFunction) + 1}))
            }
        }
        else if(typeOfFunctionPressed == "Delete") {
            const newEncounterOrder: IEncounter[] = [];

            arrayOfEncounters.forEach((encounter, encounterNumber) => {
                if(encounterNumber != encounterNumberOfFunction) {
                    newEncounterOrder.push(encounter);
                }
            });
            dispatch(loadHolsterTimelineEncounters({encountersToLoad: newEncounterOrder}));
        }  
    }

    /**
     * Sets the new time for a lost action in state
     * @param event, the lost action time that was edited, containing its encounter number, the lost action position, the new time to set and whether the lost action is 'In Pull' or 'After Pull
     */
    function HandleTimeOfUseUpdate(event : BaseSyntheticEvent) {
        dispatch(setHolsterTimelineEncounterLostActionSpentTime({encounterNumber: event.target.dataset.encounternumber, lostActionPositionInEncounter: event.target.dataset.lostactionresourceposition, newTimeOfLostActionSpent: event.target.value, isInPull: event.target.dataset.isinpull}))
    }

    /**
     * Removes the selected lost action from spent lost actions in an encounter
     * @param event, the lost action that will be removed from spent lost actions at an encounter encounternumber, with position lostactionresourceposition, in the 'In Pull' or 'After Pull' area.
     */
    function HandleLostActionRemoveResource(event : BaseSyntheticEvent) {
        console.log(event);
        dispatch(clearDropdownData());
        LostActionInstanceTimelineDropdownCloseButtonReset()

        const isInPull: string = event.target.dataset.isinpull;
        const encounterNumber: number = Number(event.target.dataset.encounternumber);
        const lostActionSpentClicked: number = Number(event.target.dataset.lostactionresourceposition);

        const lostActionsSpentInOrAfterPullForEncounter : ILostActionExpenditure[] = isInPull == 'true' ? arrayOfEncounters[encounterNumber].LostActionsSpentInPull : arrayOfEncounters[encounterNumber].LostActionsSpentAfterPull;

        const newLostActionsSpentInOrAfterPullForEncounter : ILostActionExpenditure[] = [];

        lostActionsSpentInOrAfterPullForEncounter.forEach((lostActionSpent, lostActionPosition) => {
            if(lostActionSpentClicked != lostActionPosition) {              
                newLostActionsSpentInOrAfterPullForEncounter.push(lostActionSpent);
            }
        });

        dispatch(setHolsterTimelineEncounterLostActionsSpentInOrAfterPull({encounterNumber: encounterNumber, lostActionsSpentInOrAfterPullForEncounter: newLostActionsSpentInOrAfterPullForEncounter, isInPull: isInPull}))
    }

    /**
     * Sets state such that the dropdown displayed comes from Pull With
     * @param event, containing the encounter number and the type of lost action that was clicked. ('Left', 'Right', 'Essence')
     */
    function HandleLostActionPullWithClicked(event : BaseSyntheticEvent) {
        dispatch(setDropdownDataPullWith({encounterNumber: event.target.dataset.encounternumber, actionTypeLeftOrRightOrEssence: event.target.dataset.leftorrightoressence}));
    }

    /**
     * Sets state such that the dropdown displayed comes from 'In Pull' or 'Pull With'
     * @param event, containing the encounter number, position of the lost action and whether it is 'In Pull' or 'After Pull'
     */
    function HandleChangeLostActionResourceClicked(event : BaseSyntheticEvent) {
        dispatch(setDropdownDataInPull({encounterNumber: event.target.dataset.encounternumber, positionOfLostAction: event.target.dataset.positionoflostaction, isInPull: event.target.dataset.isinpull}));
    }

    function CreateLostActionResourceInOrAfterPullToPush(indexOfLostActionSpent: number, encounterNumber: number, lostActionImage: string, lostActionTimeOfUse: string, isInPull: boolean) {
        return (
            <div key={indexOfLostActionSpent} className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResource">
                <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceImageAndDropdown">

                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostAction">
                        <div onClick={HandleChangeLostActionResourceClicked} data-encounternumber={encounterNumber} data-positionoflostaction={indexOfLostActionSpent} data-isinpull={isInPull} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                            <img src={lostActionImage}></img>
                        </div>
                        <div  className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionHoverVAndRemoveResourceButton">
                            <div id={indexOfLostActionSpent.toString()} onClick={HandleLostActionRemoveResource} data-encounternumber={encounterNumber} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionRemoveResourceButton">
                                <span className="RemoveResourceButton">X</span> 
                            </div>
                            
                        </div>                             
                    </div>  
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUse">                      
                    <input onChange={HandleTimeOfUseUpdate} name={encounterNumber.toString()} type="string" contentEditable="true" maxLength={5} data-encounternumber={encounterNumber} data-lostactionresourceposition={indexOfLostActionSpent} data-isinpull={false}  className="LostActionInstanceTimelineIndividualEncounterInPullLostActionResourceTimeOfUseText" value={lostActionTimeOfUse}></input>
                </div>
            </div>
        )
    }

    console.log("CreateHolsterTimelineBossBoxes");
    const arrayOfEncounterBoxesToReturn : React.JSX.Element[] = [];

    arrayOfEncounters.forEach((encounter, encounterPosition) => {

        const lostActionResourcesSpentInPullArray : React.JSX.Element[] = [];
        // processing in pull actions and creating the HTML.
        encounter.LostActionsSpentInPull.forEach((lostActionSpent, indexOfLostActionSpent) => {
            // determine whether to display the question mark image or not if the id of lost action is -1
            const lostActionResourceUsedImageLink = lostActionSpent.LostActionUsed != -1 ? LostActionsAsObjectArray[lostActionSpent.LostActionUsed].img : QuestionMarkNoAction.img;
            const lostActionResourceSpentInPullToPush : React.JSX.Element = CreateLostActionResourceInOrAfterPullToPush(indexOfLostActionSpent, encounterPosition, lostActionResourceUsedImageLink, lostActionSpent.LostActionTimeOfUse, true);
            lostActionResourcesSpentInPullArray.push(lostActionResourceSpentInPullToPush);
        });

        // processing after pull actions and creating the HTML.
        const lostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];

        encounter.LostActionsSpentAfterPull.forEach((lostActionSpent, indexOfLostActionSpent) => {
            const lostActionResourceUsedImageLink = lostActionSpent.LostActionUsed != -1 ? LostActionsAsObjectArray[lostActionSpent.LostActionUsed].img : QuestionMarkNoAction.img;
            const lostActionResourceSpentAfterPullToPush = CreateLostActionResourceInOrAfterPullToPush(indexOfLostActionSpent, encounterPosition, lostActionResourceUsedImageLink, lostActionSpent.LostActionTimeOfUse, false);
            lostActionResourcesSpentAfterPullArray.push(lostActionResourceSpentAfterPullToPush);
        });

        // pull boss with images logic
        const leftActionImageLink = encounter.PullBossWith.LostActionLeft != -1 ? LostActionsAsObjectArray[encounter.PullBossWith.LostActionLeft].img : QuestionMarkNoAction.img
        const rightActionImageLink = encounter.PullBossWith.LostActionRight != -1 ? LostActionsAsObjectArray[encounter.PullBossWith.LostActionRight].img : QuestionMarkNoAction.img
        const essenceActionImageLink = encounter.PullBossWith.EssenceInUse != -1 ? LostActionsAsObjectArray[encounter.PullBossWith.EssenceInUse].img : QuestionMarkNoAction.img
        
        const encounterBox = (
        <div key={encounterPosition} className="LostActionInstanceTimelineIndividualEncounterContainer">

            <div className="LostActionInstanceTimelineIndividualEncounterBossNameAndFunctions">
                <div className="LostActionInstanceTimelineIndividualEncounterBossName">
                    <input id={encounterPosition.toString()} onChange={HandleBossNameChange} type="string" contentEditable="true"  className="LostActionNameOfBossInputField" value={encounter.NameOfBoss}></input>
                </div>
                <div className="LostActionInstanceTimelineIndividualEncounterFuntions">
                    <div onClick={HandleEncounterFunctionPress} id={"Up"} data-encounternumber={encounterPosition}  className="LostActionInstanceTimelineIndividualEncounterFunctionMoveUp" title="Click to Move Encounter Up">
                        <span id={"Up"}>&uarr;</span>
                    </div>
                    <div onClick={HandleEncounterFunctionPress} id={"Down"} data-encounternumber={encounterPosition} className="LostActionInstanceTimelineIndividualEncounterFunctionMoveDown" title="Click to Move Encounter Down">
                        <span id={"Down"}>&darr;</span>
                    </div>
                    <div onClick={HandleEncounterFunctionPress} id={"Delete"} data-encounternumber={encounterPosition}  className="LostActionInstanceTimelineIndividualEncounterFunctionDeleteEncounter" title="Click to Remove Encounter">
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
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={encounterPosition} data-leftorrightoressence={"Left"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftLostActionImage">
                            <img src={leftActionImageLink}></img>
                        </div>                 
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostAction">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={encounterPosition} data-leftorrightoressence={"Right"} className="LostActionInstanceTimelineIndividualEncounterPullWithRightLostActionImage">
                        <img src={rightActionImageLink}></img>
                        </div>     
                    </div>
                    <div className="LostActionInstanceTimelineIndividualEncounterPullWithEssence">
                        <div onClick={HandleLostActionPullWithClicked} data-encounternumber={encounterPosition} data-leftorrightoressence={"Essence"} className="LostActionInstanceTimelineIndividualEncounterPullWithLeftEssenceImage">
                        <img src={essenceActionImageLink}></img>
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
                    <div onClick={HandleLostActionAddResourceInPull} className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullAddLostActionButton">
                            <span id={encounterPosition.toString()}>Add Action</span>
                    </div>
                </div>
                
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsContainer">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsArray">                       
                        {lostActionResourcesSpentInPullArray}
                    </div>
                </div>
            </div>

            {AutomateSeparator()}

            <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullSection">
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullTextAndAddLostActionButton">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullText">
                        <span>After Pull Actions:</span>
                    </div>
                    <div id={encounterPosition.toString()} onClick={HandleLostActionAddResourceAfterPull} className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullAddLostActionButton">
                            <span id={encounterPosition.toString()}>Add Action</span>
                    </div>
                </div>        
                <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsContainer">
                    <div className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullLostActionsArray">                       
                        {lostActionResourcesSpentAfterPullArray}
                    </div>
                </div>
            </div>
        </div>)
        arrayOfEncounterBoxesToReturn.push(encounterBox);
    })

    return arrayOfEncounterBoxesToReturn;
}

/**
 * Creates dropdown element to display to the user depending on the value of the states.
 * @returns Dropdown HTML Element to display to the user
 */
function CreateHolsterTimelineDropdownBoxToDisplay() : React.JSX.Element {
    const dispatch = useAppDispatch();
    const currentDropdownDataToDisplay = useAppSelector((state) => state.LostActionDropdownDataForUse);
    const currentHolsterTimeline = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);
    const prepopLeftActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionLeft);
    const prepopRightActionId : number = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionRight);
    const currentActionsInHolster = useAppSelector((state) => state.LostFindsHolster.Holster);
    const currentLostFindsHolster = useAppSelector((state) => state.LostFindsHolster);

    let lostActionDropdownCloseButton : string = "";
    let lostActionDropdownElementRows : React.JSX.Element = <></>;

    /**
     * Clears dropdowndata state (resets) and resets close button HTML.
     */
    function HandleCloseLostActionDropdownWindow() {
        LostActionInstanceTimelineDropdownCloseButtonReset()
        dispatch(clearDropdownData());
    }

    /**
     * Checks if any Pull With's can be changed in the timeline. If no encounter exists, modifies HTML to display text.
     * Executes a function to reset notification text after 3000ms.
     * @returns a boolean on whether any Pull With's exist or not.
     */
    function CheckIfAnyEncounterExists() : boolean {
        console.log(currentHolsterTimeline);
        if(currentHolsterTimeline.length == 0) {
            const setAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
            setAllNotificationBox.childNodes[0].textContent = "No encounters to change.";
            setAllNotificationBox.style.color = "white";
            setTimeout(ClearSetAllNotificationBox, 3000, setAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
            return false;
        }
        return true;
    }

    /**
     * Sets all the Pull With essences to the prepop essence if any encounter exists
     * 
     */
    function HandleSetAllEssencesToPrepop() {
        const newHolsterTimelineWithPrepopEssence : IEncounter[] = [];
        if(!CheckIfAnyEncounterExists()) {
            return;
        }
        currentHolsterTimeline.forEach((encounter) => {
            if(encounter.PullBossWith.EssenceInUse == currentLostFindsHolster.PrepopHolster.EssenceInUse) {
                newHolsterTimelineWithPrepopEssence.push(encounter);
            }
            else {
                newHolsterTimelineWithPrepopEssence.push({...encounter, PullBossWith: {LostActionLeft: encounter.PullBossWith.LostActionLeft, LostActionRight: encounter.PullBossWith.LostActionRight, EssenceInUse: currentLostFindsHolster.PrepopHolster.EssenceInUse}})
            }
        });
        
        dispatch(loadHolsterTimelineEncounters({encountersToLoad: newHolsterTimelineWithPrepopEssence}));
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
        dispatch(loadHolsterTimelineEncounters({encountersToLoad: newHolsterTimelineWithPrepopLeftRightAction}));
        const SetAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
        SetAllNotificationBox.childNodes[0].textContent = "'Pull With' actions set to prepop for all encounters.";
        SetAllNotificationBox.style.color = "white";
        setTimeout(ClearSetAllNotificationBox, 3000, SetAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
    }

    /**
     * Checks if the text contained within a HTML element is still the same. If it is the same, sets text content to empty, else keeps text displayed.
     * @param messageToCheck, the string to compare to
     * @param idOfNotificationBox, the id of the HTML element to compare to
     */
    function ClearSetAllNotificationBox(messageToCheck : string, idOfNotificationBox : string) {
        const setAllNotificationBox = document.getElementById(idOfNotificationBox) as HTMLElement;
        if(setAllNotificationBox.childNodes[0].textContent?.includes(messageToCheck)) {
            setAllNotificationBox.childNodes[0].textContent = "";
        }
    }

    if(currentDropdownDataToDisplay.EncounterNumber != -1) {
        const encounterNumber = currentDropdownDataToDisplay.EncounterNumber;
        lostActionDropdownCloseButton = "X";
        const LostActionInstanceTimelineStateLostActionFunctionCloseWindowButton = document.getElementById("LostActionInstanceTimelineStateLostActionFunctionCloseWindow") as HTMLElement;
        LostActionInstanceTimelineStateLostActionFunctionCloseWindowButton.style.border = "2px solid #A5906F"
        LostActionInstanceTimelineStateLostActionFunctionCloseWindowButton.style.padding = "3px";
        if(currentDropdownDataToDisplay.IsPullWith) {
            
            const LeftOrRightOrEssence = currentDropdownDataToDisplay.LeftOrRightOrEssence;
            console.log(LeftOrRightOrEssence);
            if(LeftOrRightOrEssence == "Essence") {
                //LostActionDropdownCloseButton = "X";
                lostActionDropdownElementRows = CreateLostActionDropdownElementEssence(encounterNumber, dispatch);
                
                
            }
            else if (LeftOrRightOrEssence == "Left" || LeftOrRightOrEssence == "Right") {
                //LostActionDropdownCloseButton = "X";
                lostActionDropdownElementRows = CreateLostActionDropdownElementNoEssence(encounterNumber, LeftOrRightOrEssence, dispatch);
            }
        }
        else {
            const indexOfLostActionResource = currentDropdownDataToDisplay.IndexOfLostActionResource;
            const isInPull = currentDropdownDataToDisplay.IsInPull;
            //LostActionDropdownCloseButton = "X";
            lostActionDropdownElementRows = CreateLostActionDropdownElementAllLostActions(encounterNumber, indexOfLostActionResource, isInPull, currentActionsInHolster, dispatch);
        }
    }

    return (
        <div className="LostActionInstanceTimelineStateLostActionDropdownBoxesInnerContainer">
            <div style={{border: "2px solid #A5906F", width: "304px", height: "225px", borderRadius: "15px", display : "flex", alignItems : "center", justifyContent : "center", position : "relative", top : "5px"}}className="LostActionInstanceTimelineStateLostActionDropdownBoxElementContainer">
                {lostActionDropdownElementRows}
            </div>
           
            <div className="LostActionInstanceTimelineStateLostActionFunctions">
                <div onClick={HandleSetAllEssencesToPrepop} className="LostActionInstanceTimelineStateLostActionFunctionSetAllEssence">
                    <span>Set All Essences To Prepop Essence</span>
                </div>
                <div onClick={HandleSetLeftRightActionsToPrepop} className="LostActionInstanceTimelineStateLostActionFunctionSetAllActions">
                    <span>Set All Pull With Actions To Prepop Actions</span>
                </div>
                <div onClick={HandleCloseLostActionDropdownWindow} id="LostActionInstanceTimelineStateLostActionFunctionCloseWindow" className="LostActionInstanceTimelineStateLostActionFunctionCloseWindow">
                    <span>{lostActionDropdownCloseButton}</span>
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
        DropdownItemsArray.push(<div key={"HolsterActionsDropdownSeparator"} style={{width: "95%"}}>{AutomateSeparator()}</div>)
    }
    else {
        DropdownItemsArray.push(<div key={"EmptyHolsterForActionTimelineMessage"} style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%", width:"100%", textAlign:"center", }}>Add some actions to the holster to get started!</div>)
    }
    
    return DropdownItemsArray;
}

function CreateDropdownRowForAllLostActions(LostAction : IAction, encounterNumber : number, indexOfLostAction : number, isInPull : boolean, dispatch: (arg0: { payload: [number, number, number, boolean] | undefined; type: "LostActionDropdownDataForUse/clearDropdownData" | "LostFindsHolsterBag/setHolsterTimelineEncounterLostActionSpent"; }) => void) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfLostAction = event.target.id;
        console.log(isInPull);
        dispatch(setHolsterTimelineEncounterLostActionSpent([encounterNumber, indexOfLostAction, idOfLostAction, isInPull]));
        LostActionInstanceTimelineDropdownCloseButtonReset()
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
        LostActionInstanceTimelineDropdownCloseButtonReset()
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
        LostActionInstanceTimelineDropdownCloseButtonReset()
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

//#region Creation of Lost Action Instance Timeline
const CreateLostActionInstanceTimeline = () => {
    const dispatch = useAppDispatch();

    const currentLostFindsHolster = useAppSelector((state) => state.LostFindsHolster);

    const holsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(currentLostFindsHolster.HolsterTimeline.Encounters);
    const holsterTimelineDropdownBoxToDisplay = CreateHolsterTimelineDropdownBoxToDisplay();

    function HandleAddEncounterClick() {
        const EncounterToPush : IEncounter = {...GenerateNewBossInTimeline, PullBossWith : { LostActionLeft: currentLostFindsHolster.PrepopHolster.LostActionLeft, LostActionRight: currentLostFindsHolster.PrepopHolster.LostActionRight, EssenceInUse: currentLostFindsHolster.PrepopHolster.EssenceInUse}};

        dispatch(createNewHolsterTimelineEncounter(EncounterToPush));
     
    }

    return (
        <div className="LostActionInstanceTimelineInnerContainer">
           
            <div className="LostActionInstanceTimelineStateContainer">
                <div className="LostActionInstanceTimelineStateBossBoxes">
                    {holsterTimelineBossBoxes}
                </div>
                <div className="LostActionInstanceTimelineGap">
                    {AutomateSeparator()}
                </div>
                <div className="LostActionInstanceTimelineStateLostActionDropdownBoxes">
                    {holsterTimelineDropdownBoxToDisplay}
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
                        <span>Add New Encounter</span>
                    </div>
                </div>
                <div className="LostActionInstanceTimelineTitle">
                    <span>Lost Action Usage Timeline</span>
                </div>
                <div id="LostActionInstanceTimelineSetAllNotificationBox" className="LostActionInstanceTimelineSetAllNotificationBox">
                    <span></span>
                </div>
            </div>
        </div>
    )
}
//#endregion
export default CreateLostActionInstanceTimeline;