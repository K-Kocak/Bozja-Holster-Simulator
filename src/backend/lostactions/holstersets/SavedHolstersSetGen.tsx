import { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { clearHolster, ConvertLostActionSetToLostFindsHolster, setHolster, } from '@backend/lostactions/LostFindsHolsterSlice';
import { changeTitleOfSpecificSavedSet, setNewSavedSetsFromSets } from '@backend/lostactions/LostActionSetSlice';
import { addSelectedSavedSet, newSelectedSavedSets } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@backend/interfaces/IActionHolster';

import { SetWebsiteLinkToHolsterAndCopyToClipBoard } from '@backend/lostactions/lostfindsholster/LostFindsHolsterContents'
import { IUserSlottedActions } from '@app/backend/interfaces/IHolsterTimeline';
import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import LostActions from '@backend/lostactions/actiondata/ActionData';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage62x62.png';
import DeleteSetImage from '@ui/pictures/FFXIVExitGameIcon70x70.png';
import CopyToClipboardIcon from '@ui/pictures/CopyToClipBoardIcon.png';

import '@css/ui/components/SavedHolsters/SavedHolstersSetGen.scss';
import { GetRoleImageForCurrentRole } from '../helperfunctions/HelperFunctions';

import axios from 'axios';
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Checks if the notification box for the lost finds holster has the same text as expectedText, and if it does, resets the text.
 * @param expectedText, the text the saved set notification box is expected to have
 */
function LostFindsHolsterSetSavedNotificationHide(expectedText : string) {  
    const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
    if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
        savedSetNotificationBox.style.display = "none";
        savedSetNotificationBox.childNodes[0].textContent = "";
        savedSetNotificationBox.style.color = "";
    }
}

/**
 * Checks if the notification box for the saved sets has the same text as expectedText, and if it does, resets the text.
 * @param expectedText, the text the saved set notification box is expected to have
 */
function SavedSetSavedNotificationHide(expectedText : string) {  
    const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;
    if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
        savedSetNotificationBox.childNodes[0].textContent = "";
        savedSetNotificationBox.style.color = "";
    }
}

/**
 * Creates a jsx.element for the lost actions in a saved set, (or the lost actions in the holster of the saved set)
 * @param savedSetOfLostActions, the lost actions to use
 * @returns jsx.element containing the lost actions in the holster for this saved set
 */
const GenerateSavedSetLostActions = (savedSetOfLostActions : IActionHolster[]) : React.JSX.Element => {
    const arrayToReturn : React.JSX.Element[] = [];
    console.log(savedSetOfLostActions);
    savedSetOfLostActions.forEach((lostAction, index) => {
        console.log(index);
        console.log(lostAction);
        console.log(lostAction.id);
        
        console.log(LostActionsAsObjectArray[lostAction.id]);

        const lostActionInfo = LostActionsAsObjectArray[lostAction.id];
        console.log(lostActionInfo);
        arrayToReturn.push(
            <div key={lostAction.id} title={lostActionInfo.name.EN} className="SavedHolstersActionInSet">
                <img src={lostActionInfo.img}></img>
                <div className="SavedHolstersActionInSetSpecificQuantity">
                    <span>{lostAction.quantity}</span>
                </div>
            </div>
        );
    });
    return (
        <div className="SavedHolstersListActionsInSet">
            {arrayToReturn}
        </div>
    )
}

/**
 * Creates a jsx.element for the PREPOP lost actions in a saved set
 * @param savedSetOfLostActions, the PREPOP lost actions to use
 * @returns jsx.element containing the PREPOP lost actions for this saved set
 */
const GenerateSavedSetLostActionsPrepop = (savedSetOfLostActionsPrepop : IUserSlottedActions) : React.JSX.Element => {
    const leftActionPrepop = savedSetOfLostActionsPrepop.LostActionLeft != -1 ? LostActionsAsObjectArray[savedSetOfLostActionsPrepop.LostActionLeft] : QuestionMarkNoAction;
    const rightActionPrepopId = savedSetOfLostActionsPrepop.LostActionRight != -1 ? LostActionsAsObjectArray[savedSetOfLostActionsPrepop.LostActionRight] : QuestionMarkNoAction;
    const essenceActionPrepopId = savedSetOfLostActionsPrepop.EssenceInUse != -1 ? LostActionsAsObjectArray[savedSetOfLostActionsPrepop.EssenceInUse] : QuestionMarkNoAction;


    return (
        <div className="SavedHolstersListPrepopActionsInSet">
            <div key={0} title={leftActionPrepop.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={leftActionPrepop.img}></img>
            </div>
            <div key={1} title={rightActionPrepopId.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={rightActionPrepopId.img}></img>
            </div>
            <div key={2} title={essenceActionPrepopId.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={essenceActionPrepopId.img}></img>
            </div>
            <div key={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].toString()} title="Resistance Reraiser" className="SavedHolstersPrepopActionInSet">
                <img src={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].img} alt="Resistance Reraiser"></img>
            </div>
        </div>
    )
}

/**
 * Creates and returns the jsx element for a saved set
 * @param savedSet, saved set to create the jsx.element for
 * @param dispatch, for state changing
 * @param allSavedSets, all saved sets, for when this set needs deletion 
 * @param currentSelectedSavedSets, the sets that are currently selected
 * @returns a jsx element for a saved set
 */
function CreateSavedSet(savedSet : ILostActionSet, dispatch: any, allSavedSets : ILostActionSet[], currentSelectedSavedSets : number[]) {
    const savedSetLostActions : React.JSX.Element = GenerateSavedSetLostActions(savedSet.setLostActionContents);
    const savedSetLostActionsPrepop : React.JSX.Element = GenerateSavedSetLostActionsPrepop(savedSet.PrepopLostActions);
    
    /**
     * Displays a load notification to the lost finds holster and saved set notification boxes.
     * Loads the saved set into the holster, prepop, and to the timeline
     */
    function HandleLoadSetToHolsterClick() {
        const lostFindsHolsterSetSavedNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        lostFindsHolsterSetSavedNotificationBox.childNodes[0].textContent = "Saved Set Loaded!";
        lostFindsHolsterSetSavedNotificationBox.style.color = "white";
        lostFindsHolsterSetSavedNotificationBox.style.display = "block";

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Saved Set Loaded!";
        savedSetNotificationBox.style.color = "white";   

        setTimeout(SavedSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, lostFindsHolsterSetSavedNotificationBox.childNodes[0].textContent);
        dispatch(clearHolster());
        const savedSetAsHolster = ConvertLostActionSetToLostFindsHolster(savedSet);
        dispatch(setHolster(savedSetAsHolster));
    }

    /**
     * Deletes the saved set from saved sets and notifies the user
     * @param event, the saved set that was clicked
     */
    function HandleDeleteSetClick(event : BaseSyntheticEvent) {
        const filteredSavedSets : ILostActionSet[] = allSavedSets.filter((savedSet) => savedSet.id != event.target.id);

        dispatch(setNewSavedSetsFromSets(filteredSavedSets));

        const LostFindsHolsterSetSavedNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        LostFindsHolsterSetSavedNotificationBox.childNodes[0].textContent = "Set Has Been Deleted!";
        LostFindsHolsterSetSavedNotificationBox.style.color = "red";
        LostFindsHolsterSetSavedNotificationBox.style.display = "block";

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Set Has Been Deleted!";
        savedSetNotificationBox.style.color = "red";   

        setTimeout(SavedSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, LostFindsHolsterSetSavedNotificationBox.childNodes[0].textContent);
    }

    /**
     * Changes the title of a saved set
     * @param event, the title of a saved set that was changed
     */
    function HandleTitleChange(event : BaseSyntheticEvent) {
        const idOfSet : number = event.target.name;
        const titleOfSet : string = event.target.value;
        dispatch(changeTitleOfSpecificSavedSet({idOfSet, titleOfSet}))
    }

    /**
     * Adds the saved set to the list of selected sets
     */
    function HandleAddSetAsSelectedSet() {
        if(currentSelectedSavedSets.includes(savedSet.id)) {
            const newSelectedSavedSetsToPlace : number[] = [];
            currentSelectedSavedSets.forEach((selectedSavedSetId) => {
                if(selectedSavedSetId != savedSet.id) {
                    newSelectedSavedSetsToPlace.push(selectedSavedSetId);
                }
            });
            dispatch(newSelectedSavedSets(newSelectedSavedSetsToPlace));
            
            const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
            savedSetNotificationBox.childNodes[0].textContent = "Set Unselected!";
            savedSetNotificationBox.style.color = "white";   
            setTimeout(SavedSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
        }
        else {
            const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
            savedSetNotificationBox.childNodes[0].textContent = "Set Selected For Export!";
            savedSetNotificationBox.style.color = "white";   
            setTimeout(SavedSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
            dispatch(addSelectedSavedSet(savedSet.id));
        }
        (document.getElementById(checkBoxId) as HTMLInputElement).checked;     
    }

    /**
     * Creates a link for the saved set that was clicked on by encoding the saved set and then adding the link to the user's clipboard
     * while setting website link to the encoded link
     */
    function HandleCreateLinkForSavedSet() {
        const { ["id"]: idOfSet, ...lostActionSetNoId } = savedSet;
        lostActionSetNoId.nameOfSet = lostActionSetNoId.roleTypeOfSet + "";
        axios.post(`/api/findholster`, { set: lostActionSetNoId, idOfSet: idOfSet}).then((response) => {
            SetWebsiteLinkToHolsterAndCopyToClipBoard(response.data.keyUsed);
        });

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Set Link Copied to Clipboard!";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(SavedSetSavedNotificationHide, 6000, savedSetNotificationBox.childNodes[0].textContent);
    }

    const styleToUse = currentSelectedSavedSets.includes(savedSet.id) ? {backgroundColor: "#595644"} : {};
    const checkBoxId = (savedSet.id+1).toString();

    return (
        <div key={savedSet.id} className="MyHolstersSavedSet">
                <div className="SavedHolstersLoadAndDeleteHolster">
                    <div onClick={HandleLoadSetToHolsterClick} className="SavedHolstersLoadHolster" title="Load This Set.">
                        <img src={LoadSetImage}></img>
                    </div>
                    <div style={styleToUse} className="SavedHolstersCreateLinkForSet" title="Select for Export.">
                        <input type="checkbox" onClick={HandleAddSetAsSelectedSet} name="SavedSetCheckbox" className="SavedHolstersCreateLinkForSetCheckbox" id={checkBoxId}></input>
                    </div>
                    <div id={savedSet.id.toString()} onClick={HandleDeleteSetClick} className="SavedHolstersDeleteHolster" title="Delete This Set.">
                        <img src={DeleteSetImage}></img>
                    </div>
                </div>

                <div className="SavedHolstersTitleAndActions">
                    <div className="SavedHolstersTitle">
                        <input name={savedSet.id.toString()} type="string" contentEditable="true" onChange={HandleTitleChange} defaultValue={savedSet.nameOfSet}></input>                      
                    </div>
                    {savedSetLostActionsPrepop}
                    {savedSetLostActions}
                </div>

                <div className="SavedHolstersWeightAndTypeOfSet">
                    <div className="SavedHolsterWeightOfSet">
                        <div className="SavedHolsterWeightOfSetText">
                            <span>Weight</span>
                        </div>
                        <div className="SavedHolsterWeightOfSetValue">
                            <span>{savedSet.weightOfSet}</span>
                        </div>                
                    </div>
                    <div onClick={HandleCreateLinkForSavedSet} className="SavedHolsterCreateLinkOfSet">
                        <img title="Copy To Clipboard and Create Link" src={CopyToClipboardIcon}></img>
                    </div>
                    <div className="SavedHolstersTypeOfSet">
                        <img src={GetRoleImageForCurrentRole(savedSet.roleTypeOfSet)}></img>
                </div>
            </div>
        </div>
    )
}

/**
 * Creates and returns the jsx.element containing all the saved sets
 * @param setsToLoad, the sets to load and create the jsx.element for
 * @returns a jsx.element fo the saved sets area container
 */
const CreateSavedSets = (setsToLoad : ILostActionSet[]) => {
    const dispatch = useAppDispatch();

    const currentSelectedSavedSets : number[] = useAppSelector((state) => state.SelectedSavedSets.SelectedSets);
    const currentRoleTypeFilter = useAppSelector((state) => state.SelectedSavedSets.currentRoleFilter);
    const allSavedSets = useAppSelector((state) => state.LostActionSets.Sets);
    console.log(allSavedSets);
    const setsArray : React.JSX.Element[] = [];
    
    setsToLoad.forEach((setToUse) => {
        if(setToUse.roleTypeOfSet == currentRoleTypeFilter || currentRoleTypeFilter == "None") {
            const setCreation : React.JSX.Element = CreateSavedSet(setToUse, dispatch, allSavedSets, currentSelectedSavedSets);
            setsArray.push(setCreation);
        }       
    });

    return (
        <div className="SavedSetsAreaContainer">
            {setsArray}
        </div>
    )
}

export default CreateSavedSets;