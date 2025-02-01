import { BaseSyntheticEvent } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

//import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';
import '@css/ui/components/LostActionInstanceTimeline/LostActionInstanceTimelineContent.scss';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, editHolsterTimelineEncounter, loadHolsterTimelineEncounters, setHolsterTimelineEncounterLostActionSpent, setHolsterTimelineEncounterLostActionSpentTime, setHolsterTimelineEncounterLostActionsSpentInOrAfterPull, setHolsterTimelineEncounterPullBossWith, setHolsterTimelineEncounterTitleChange } from '@backend/lostactions/LostFindsHolsterSlice';

import { IEncounter, ILostActionExpenditure, IUserSlottedActions } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';

import IAction from '@app/backend/interfaces/IAction';
import { clearDropdownData, setDropdownDataInPull, setDropdownDataPullWith } from '@backend/lostactions/LostActionDropdownDataSlice';
import { AutomateSeparator } from '@backend/lostactions/lostfindscache/LostActionsDivGen';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import { CreateDropdownLostActionHeader } from '@backend/lostactions/prepopholster/PrepopHolsterActions';

const GenerateNewBossInTimeline : IEncounter = {
    NameOfBoss: "Boss Name",
    PullBossWith: {
        LostActionLeft: -1,
        LostActionRight: -1,
        EssenceInUse: -1,
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
                    <div id={encounterPosition.toString()} onClick={HandleLostActionAddResourceInPull} className="LostActionInstanceTimelineIndividualEncounterResourcesSpentInPullAddLostActionButton">
                            <span style={{pointerEvents: "none"}}>Add Action</span>
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
                            <span style={{pointerEvents: "none"}}>Add Action</span>
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

    const holsterTimelineEncounters : IEncounter[] = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);
    const prepopActions : IUserSlottedActions = useAppSelector((state) => state.LostFindsHolster.PrepopHolster);
    const currentHolster : IActionHolster[] = useAppSelector((state) => state.LostFindsHolster.Holster);

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
        if(holsterTimelineEncounters.length == 0) {
            const setAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
            setAllNotificationBox.childNodes[0].textContent = "No encounters to change.";
            setTimeout(ClearSetAllNotificationBox, 3000, setAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
            return false;
        }
        return true;
    }

    /**
     * Sets all the Pull With essences to the prepop essence if any encounter exists
     * State is read only, so a copy must be made and sent through to state
     */
    function HandleSetAllEssencesToPrepop() {
        const newHolsterTimelineWithPrepopEssence : IEncounter[] = [];
        if(!CheckIfAnyEncounterExists()) {
            return;
        }
        holsterTimelineEncounters.forEach((encounter) => {
            if(encounter.PullBossWith.EssenceInUse == prepopActions.EssenceInUse) {
                newHolsterTimelineWithPrepopEssence.push(encounter);
            }
            else {
                newHolsterTimelineWithPrepopEssence.push({...encounter, PullBossWith: {LostActionLeft: encounter.PullBossWith.LostActionLeft, LostActionRight: encounter.PullBossWith.LostActionRight, EssenceInUse: prepopActions.EssenceInUse}})
            }
        });

        dispatch(loadHolsterTimelineEncounters({encountersToLoad: newHolsterTimelineWithPrepopEssence}));
        const setAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
        setAllNotificationBox.childNodes[0].textContent = "'Pull With' essences set to prepop for all encounters.";
        setTimeout(ClearSetAllNotificationBox, 3000, setAllNotificationBox.childNodes[0].textContent, "LostActionInstanceTimelineSetAllNotificationBox"); 
    }

    /**
     * Sets all the Pull With left & right action to the prepop left & right action if any encounter exists
     * State is read only, so a copy must be made and sent through to state
     */
    function HandleSetLeftRightActionsToPrepop() {
        const newHolsterTimelineWithPrepopLeftRightAction : IEncounter[] = [];
        if(!CheckIfAnyEncounterExists()) {
            return;
        }
        holsterTimelineEncounters.forEach((encounter) => {
            newHolsterTimelineWithPrepopLeftRightAction.push({...encounter, PullBossWith: {LostActionLeft: prepopActions.LostActionLeft, LostActionRight: prepopActions.LostActionRight, EssenceInUse: encounter.PullBossWith.EssenceInUse}})
        });
        dispatch(loadHolsterTimelineEncounters({encountersToLoad: newHolsterTimelineWithPrepopLeftRightAction}));
        const SetAllNotificationBox = document.getElementById("LostActionInstanceTimelineSetAllNotificationBox") as HTMLElement; 
        SetAllNotificationBox.childNodes[0].textContent = "'Pull With' actions set to prepop for all encounters.";
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
        // setting up close button styles/X text
        lostActionDropdownCloseButton = "X";
        const lostActionInstanceTimelineStateLostActionFunctionCloseWindowButton = document.getElementById("LostActionInstanceTimelineStateLostActionFunctionCloseWindow") as HTMLElement;
        lostActionInstanceTimelineStateLostActionFunctionCloseWindowButton.style.border = "2px solid #A5906F"
        lostActionInstanceTimelineStateLostActionFunctionCloseWindowButton.style.padding = "3px";

        if(currentDropdownDataToDisplay.IsPullWith) {        
            const leftOrRightOrEssence = currentDropdownDataToDisplay.LeftOrRightOrEssence;

            if(leftOrRightOrEssence == "Essence") {
                //LostActionDropdownCloseButton = "X";
                lostActionDropdownElementRows = CreateLostActionDropdownElementEssence(encounterNumber, dispatch);
            }
            else if (leftOrRightOrEssence == "Left" || leftOrRightOrEssence == "Right") {
                //LostActionDropdownCloseButton = "X";
                lostActionDropdownElementRows = CreateLostActionDropdownElementNoEssence(encounterNumber, leftOrRightOrEssence, dispatch);
            }
        }
        else {
            const indexOfLostActionResource : number = currentDropdownDataToDisplay.IndexOfLostActionResource;
            const isInPull : string = currentDropdownDataToDisplay.IsInPull.toString();
            //LostActionDropdownCloseButton = "X";
            lostActionDropdownElementRows = CreateLostActionDropdownElementAllLostActions(encounterNumber, indexOfLostActionResource, isInPull, currentHolster, dispatch);
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

/**
 * Creates the dropdown menu when a lost action 'In Pull' or 'After Pull' is clicked
 * @param encounterNumber, the encounter number the dropdown box is for
 * @param indexOfLostAction, the id of the lost action in 'In Pull' or 'After Pull' that the dropdown box is for
 * @param isInPull, whether it is 'In Pull' or 'After Pull'
 * @param currentActionsInHolster, the actions in your lost action holster
 * @param dispatch, for onclick event of dropdown rows
 * @returns dropdown menu for all possible lost actions
 */
function CreateLostActionDropdownElementAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : string, currentActionsInHolster : IActionHolster[], dispatch: any) : React.JSX.Element {

    const dropdownRowsForNoEssences = CreateDropdownRowsForAllLostActions(encounterNumber, indexOfLostAction, isInPull, currentActionsInHolster, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">     
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {dropdownRowsForNoEssences}
            </div>                      
        </div>  
    )
}

/**
 * Creates and returns the lost action rows for a dropdown menu consisting of the lost actions in the holster
 * @param encounterNumber 
 * @param indexOfLostAction 
 * @param isInPull 
 * @param currentActionsInHolster 
 * @param dispatch 
 * @returns lost action rows for dropdown menu
 */
function CreateDropdownRowsForAllLostActions(encounterNumber : number, indexOfLostAction : number, isInPull : string, currentActionsInHolster : IActionHolster[], dispatch : any) : React.JSX.Element[] {
    const dropdownItemsArray : React.JSX.Element[] = [];

    currentActionsInHolster.forEach((lostActionInHolster) => {   
        const lostAction : IAction = LostActionsAsObjectArray[lostActionInHolster.id];
        const actionToPush = CreateDropdownRowForAllLostActions(lostAction, encounterNumber, indexOfLostAction, isInPull, dispatch);
        dropdownItemsArray.push(actionToPush);   
    });

    if(dropdownItemsArray.length > 0) {
        dropdownItemsArray.unshift(CreateDropdownLostActionHeader("Holster"))
        dropdownItemsArray.push(<div key={"HolsterActionsDropdownSeparator"} style={{width: "95%"}}>{AutomateSeparator()}</div>)
    }
    else {
        dropdownItemsArray.push(<div key={"EmptyHolsterForActionTimelineMessage"} style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%", width:"100%", textAlign:"center", }}>Add some actions to the holster to get started!</div>)
    }
    
    return dropdownItemsArray;
}

/**
 * Creates a lost action row based of an action in the holster
 * @param lostAction, the lost action to create the row for
 * @param encounterNumber, the encounter this lost action is from
 * @param indexOfLostAction, the position of the lost action in 'In Pull' or 'After Pull' for its encounter
 * @param isInPull, whether it is 'In Pull' or 'After Pull'
 * @param dispatch, for onclick event
 * @returns a lost action row
 */
function CreateDropdownRowForAllLostActions(lostAction : IAction, encounterNumber : number, indexOfLostAction : number, isInPull : string, dispatch: any) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfLostAction = event.target.id;
        dispatch(setHolsterTimelineEncounterLostActionSpent({encounterNumber: encounterNumber, indexOfLostAction: indexOfLostAction, idOfLostAction: idOfLostAction, isInPull: isInPull}));
        LostActionInstanceTimelineDropdownCloseButtonReset();
        dispatch(clearDropdownData());
    }

    return (
        <div key={Math.random()} id={lostAction.id.toString()} onClick={HandleLostActionResourceSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={lostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{lostAction.name.EN}</span>
                </div>
        </div>
    )
}

//#endregion

//#region No Essence Dropdown

/**
 * Creates dropdown menu from a clicked left or right lost action at an encounter number with no essence rows 
 * @param encounterNumber, the encounter number that the action that was click on is in
 * @param LeftOrRight, whether it is the left action or the right action
 * @param dispatch, for onclick event for dropdown rows
 * @returns React.JSX.Element containing the dropdown HTML
 */
function CreateLostActionDropdownElementNoEssence(encounterNumber : number, LeftOrRight : string, dispatch : any) : React.JSX.Element {

    const dropdownRowsForNoEssences = CreateDropdownRowsForNoEssences(encounterNumber, LeftOrRight, dispatch);

    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {dropdownRowsForNoEssences}
            </div>                      
        </div>  
    )
}

function CreateDropdownRowsForNoEssences(encounterNumber : number, LeftOrRight : string, dispatch: any) : React.JSX.Element[][] {
    const dropdownItemsAs2DArray : React.JSX.Element[][] = [];
    const lostActionCategories = ["Offensive", "Defensive", "Restorative", "Beneficial", "Tactical", "Detrimental", "Item-Related"];

    for(let i = 0; i < lostActionCategories.length; i++) {
        dropdownItemsAs2DArray.push([]);
    }
    //const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((lostAction) => {
        if(lostAction.id < 700 && lostAction.id > 100) {
            // TO DO: Merge the no essence and essence functions together, as they essentially do the same thing but with a different type of action (left, right or essence)
            const nonEssenceToPush = CreateDropdownRowForLostAction(lostAction, encounterNumber, LeftOrRight, dispatch);
            switch (lostAction.category.EN) {
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
    
    dropdownItemsAs2DArray.forEach((dropdownItemCategory, index) => {
        if(dropdownItemCategory.length > 0) {
            dropdownItemCategory.unshift(CreateDropdownLostActionHeader(lostActionCategories[index]))
        }
    })
    return dropdownItemsAs2DArray;
    //return DropdownItemsArray;
}

/**
 * Returns a dropdown row for a lost action
 * @param lostAction, the lost action to create the row for
 * @param encounterNumber, the encounter number for the lost action
 * @param dispatch, to change state for onclick event
 * @returns a React.JSX.Element, the row itself
 */
function CreateDropdownRowForLostAction(lostAction : IAction, encounterNumber : number, leftOrRight : string, dispatch: any) : React.JSX.Element {

    function HandleLostActionResourceSelected(event : BaseSyntheticEvent) {
        const idOfLostAction : number = Number(event.target.id);
        dispatch(setHolsterTimelineEncounterPullBossWith({encounterNumber: encounterNumber, idOfLostAction: idOfLostAction, leftOrRightOrEssence: leftOrRight}));
        LostActionInstanceTimelineDropdownCloseButtonReset()
        dispatch(clearDropdownData());
    }

    return (
        <div key={Math.random()} id={lostAction.id.toString()} onClick={HandleLostActionResourceSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={lostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{lostAction.name.EN}</span>
                </div>
        </div>
    )
}
//#endregion

//#region Essence Dropdown
/**
 * Creates and returns the dropdown box for essences.
 * @param encounterNumber, the encounter number it is displaying the dropdown for
 * @param dispatch, required for onClick event for a row to change some data
 * @returns the rows of lost action images and names for essences in the dropdown area
 */
function CreateLostActionDropdownElementEssence(encounterNumber : number, dispatch : any) : React.JSX.Element {
    const dropdownRowsForEssences = CreateDropdownRowsForEssences(encounterNumber, dispatch);
    return (
        <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContent">
            <div className="LostActionInstanceTimelineIndividualEncounterPullWithLostActionDropdownContentInnerContainer">
                {dropdownRowsForEssences}
            </div>                      
        </div>  
    )
}

/**
 * Creates an array of rows as React.JSX.Elements for essences and returns it
 * @param encounterNumber, the encounter number it is displaying the dropdown for
 * @param dispatch, required for onClick event for a row to change some data
 * @returns Returns an Array containg the rows of lost action name and lost action image as React.JSX.Element
 */
function CreateDropdownRowsForEssences(encounterNumber : number, dispatch: any) : React.JSX.Element[] {
    
    const DropdownItemsArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((lostAction) => {
        if(lostAction.id > 707 && lostAction.id < 744) {
            const EssenceToPush = CreateDropdownRowForLostAction(lostAction, encounterNumber, "Essence", dispatch);
            DropdownItemsArray.push(EssenceToPush);
        }
    });
    DropdownItemsArray.unshift(CreateDropdownLostActionHeader("Essence"));
    return DropdownItemsArray;
}

//#endregion

//#region Creation of Lost Action Instance Timeline

/**
 * Creates lost action timeline component
 * @returns Returns a lost action timeline component
 */
const CreateLostActionInstanceTimeline = () => {
    const dispatch = useAppDispatch();
    console.log("check");

    const holsterTimelineEncounters : IEncounter[] = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);
    const prepopActions : IUserSlottedActions = useAppSelector((state) => state.LostFindsHolster.PrepopHolster);
    
    const holsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(holsterTimelineEncounters);
    const holsterTimelineDropdownBoxToDisplay = CreateHolsterTimelineDropdownBoxToDisplay();

    function HandleAddEncounterClick() {
        const encounterToPush : IEncounter = {...GenerateNewBossInTimeline, PullBossWith : { LostActionLeft: prepopActions.LostActionLeft, LostActionRight: prepopActions.LostActionRight, EssenceInUse: prepopActions.EssenceInUse}};

        dispatch(createNewHolsterTimelineEncounter({newBlankEncounter: encounterToPush}));
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