import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { addImportedSavedSetsToCurrentSavedSets, clearAllSavedSets, LostActionSets, setNewSavedSetsFromSets } from '@backend/lostactions/LostActionSetSlice';
import { clearSelectedSavedSets, setIsConfirmDeletionOfSavedSets, setRoleFilter, setTopRoleSort } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ClearSavedSetsDataInLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';

import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';
import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import IHolsterTimeline, { ILostActionExpenditure, IUserSlottedActions } from '@backend/interfaces/IHolsterTimeline';
import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';

import '@css/ui/components/SavedHolsters/SavedHolstersContent.scss';

import { GetRoleImageForCurrentRole } from '@backend/lostactions/lostfindsholster/LostFindsHolsterContents';

/**
 * Saves sets as a json file
 * @param SavedSetToSaveAsFile, the sets to save to file
 */
function saveSavedSetsToFile(savedSetToSaveAsFile : LostActionSets) {
    const savedSetsAsJSON = JSON.stringify(savedSetToSaveAsFile);
    const savedSetsAsBlob = new Blob([savedSetsAsJSON], { type: "application/json"});
    const a = document.createElement("a");
    a.download = "SavedHolsterSets";
    a.href = URL.createObjectURL(savedSetsAsBlob);
    a.click();
    setTimeout(() => {
        URL.revokeObjectURL(a.href);
        a.remove();
    }, 200);   
}

/**
 * Validates if the imported saved set has the correct weight
 * @param holsterActionsToGetTotalWeight, the holster to check
 * @returns the true weight of the holster
 */
function WeightOfSavedSet(holsterActionsToGetTotalWeight : IActionHolster[]) : number {
    let totalWeightOfHolster : number = 0;
    holsterActionsToGetTotalWeight.forEach((lostAction) => {
        totalWeightOfHolster += LostActionsAsObjectArray[lostAction.id].weight*lostAction.quantity;
    })
    return totalWeightOfHolster;
}

//#region Saved Set Action Id Validation And Quantity
/**
 * Checks if an imported saved set has valid action ids and quantities
 * @param savedSetToCheck, the saved set to check
 * @returns true or false for whether the set is valid
 */
function IsSavedSetHasValidActionIdsAndQuantities(savedSetToCheck : ILostActionSet) : boolean {
    const actionsInHolster : IActionHolster[] = savedSetToCheck.setLostActionContents;
    // holster validation
    actionsInHolster.forEach((lostAction) => {
        // id validation
        if(typeof LostActionsAsObjectArray[lostAction.id] == "undefined" && lostAction.id != -1) {
            return false;
        }
        // quantity validation
        if(lostAction.quantity <= 0) {
            return false;
        }
    })
    // prepop or pull with (in encounter) validation
    if(!IsCheckPrepopOrPullWithActionIdsValid(savedSetToCheck.PrepopLostActions)) {
        return false;
    }
    // holster timeline resource spending validation
    if(!IsCheckHolsterTimelineActionIdsValid(savedSetToCheck.HolsterTimeline)) {
        return false;
    }
    return true;
}

/**
 * Checks if the prepop actions or the pull with actions for an encounter have valid ids
 * @param prepopOrPullWithActions, the prepop actions of a saved set
 * @returns boolean true or false on validation
 */
function IsCheckPrepopOrPullWithActionIdsValid(prepopOrPullWithActions : IUserSlottedActions) : boolean {
    if(typeof LostActionsAsObjectArray[prepopOrPullWithActions.EssenceInUse] == "undefined" || typeof LostActionsAsObjectArray[prepopOrPullWithActions.LostActionLeft] == "undefined" || typeof LostActionsAsObjectArray[prepopOrPullWithActions.LostActionRight] == "undefined") {
        if(prepopOrPullWithActions.EssenceInUse == -1 && prepopOrPullWithActions.LostActionLeft == -1 && prepopOrPullWithActions.LostActionRight == -1) {
            return true;
        }
        return false;
    }
    return true;
}

/**
 * Checks if the holster timeline actions have valid ids
 * @param holsterTimelineToCheck, the holster timeline of encounters to check
 * @returns true or false for validation
 */
function IsCheckHolsterTimelineActionIdsValid(holsterTimelineToCheck : IHolsterTimeline) : boolean {
    holsterTimelineToCheck.Encounters.forEach((encounterToCheck) => {
        if(!IsCheckPrepopOrPullWithActionIdsValid(encounterToCheck.PullBossWith)) {
            return false;
        }
        if(!IsCheckResourcesSpentActionIdsValid(encounterToCheck.LostActionsSpentInPull) || !IsCheckResourcesSpentActionIdsValid(encounterToCheck.LostActionsSpentAfterPull)) {
            return false;
        }
    })
    return true;
}

/**
 * Checks if the in pull or after pull actions have a valid id
 * @param resourcesSpent, the lost actions to check 
 * @returns true or false validation
 */
function IsCheckResourcesSpentActionIdsValid(resourcesSpent : ILostActionExpenditure[]) : boolean {
    resourcesSpent.forEach((resourceSpent) => {
        if(typeof LostActionsAsObjectArray[resourceSpent.LostActionUsed] == "undefined" && resourceSpent.LostActionUsed != -1) {
            return false;
        }
    });
    return true;
}

//#endregion

function RotateRoleSort(currentRoleSort : "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged" | "None") : "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged" | "None" {
    switch (currentRoleSort) {
        case "None":
            return "Tank";
        case "Tank":
            return "Healer";
        case "Healer":
            return "Melee";
        case "Melee":
            return "Magical Ranged";
        case "Magical Ranged":
            return "Physical Ranged";
        case "Physical Ranged":
            return "None";
        default:
            console.log("No Such Role or None Exists");
            break;
    }
    return "None";
}

function HandleSavedSetsDisplayHelpBox() {
    console.log("i was clicked");
    document.getElementById("SavedSetsHelpBox")?.classList.toggle("hidden");  
}

let isSavedSetTitleSortedByAscending : boolean = false;

/**
 * 
 * @returns 
 */
function CreateSavedHolsters() {
    const dispatch = useAppDispatch();

    const savedSets = useAppSelector((state) => state.LostActionSets);
    const selectedSavedSetsState = useAppSelector((state) => state.SelectedSavedSets);

    // gets role picture for current role. role/filter same type
    const roleTypeSortImage : string = GetRoleImageForCurrentRole(selectedSavedSetsState.currentTopRole);
    const roleTypeFilterImage: string = GetRoleImageForCurrentRole(selectedSavedSetsState.currentRoleFilter);

    const setsToDisplay : JSX.Element = CreateSavedSets(savedSets.Sets);

    const roleTypeSortElement : JSX.Element = selectedSavedSetsState.currentTopRole != "None" ? <img style={{height: "23px"}} src={roleTypeSortImage}></img> : <span>No Role</span>
    const roleTypeFilterElement : JSX.Element = selectedSavedSetsState.currentRoleFilter != "None" ? <img style={{height: "23px"}} src={roleTypeFilterImage}></img> : <span>All Roles</span>

    SaveSavedSetsToLocalStorage(savedSets);

    /**
     * Saves your sets as a json file
     */
    function HandleSaveSavedSetsAsJSON() {
        saveSavedSetsToFile(savedSets);
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "All sets exported.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Uploads json file containing saved sets to your holsters
     * Also checks if each individual set being imported is valid
     */
    function HandleUploadSavedSets() {
        dispatch(clearSelectedSavedSets());
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            const fileReader = new FileReader();
            if(input.files != null) {
                fileReader.readAsText(input.files[0], "UTF-8");
                fileReader.onload = JSONSavedSetAsText => {
                    if(JSONSavedSetAsText.target?.result != null) {
                        // check if we have valid file etc
                        try {
                            const parsedSavedSet : LostActionSets = JSON.parse(JSONSavedSetAsText.target.result.toString());
                            if(parsedSavedSet.Sets.length > 0) {
                                // possibly place this block inside a separate validation file alongside
                                // the other validation functions
                                console.log("am i here");
                                const validatedParsedSavedSets : LostActionSets = {Sets: []};
                                parsedSavedSet.Sets.forEach((savedSetToValidate) => {
                                    savedSetToValidate.id = Math.random();

                                    const totalWeightOfSavedSet : number = WeightOfSavedSet(savedSetToValidate.setLostActionContents)
                                    try {
                                        if(IsSavedSetHasValidActionIdsAndQuantities(savedSetToValidate) && totalWeightOfSavedSet <= 99 && totalWeightOfSavedSet >= 0) {
                                            if(totalWeightOfSavedSet != savedSetToValidate.weightOfSet) {
                                                savedSetToValidate.weightOfSet = totalWeightOfSavedSet;
                                                console.log("weight fixed");
                                            }
                                            
                                            console.log(savedSetToValidate);
                                            console.log("Set ids are good");
                                            validatedParsedSavedSets.Sets.push(savedSetToValidate);
                                        }
                                    } catch (exception) {
                                        if(exception instanceof TypeError) {
                                            // logic
                                            console.log("Invalid Set Found!");
                                        }
                                        else {
                                            console.error(exception);
                                        }
                                    }
                                    
                                    
                                })

                                dispatch(addImportedSavedSetsToCurrentSavedSets(validatedParsedSavedSets.Sets));
                                const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
                                savedSetNotificationBox.childNodes[0].textContent = "Sets imported.";
                                savedSetNotificationBox.style.color = "white";   
                                setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
                            }
                        } catch (exception) {
                            if(exception instanceof SyntaxError){
                                // logic for wrong file type
                                console.log("Not a JSON File!!!")
                            }
                            else {
                                console.error(exception);
                            }
                        }
                    } 
                }
            }     
        }
        input.click();
        input.remove();      
    }

    /**
     * Sorts the currently displayed saved sets by their title name ascending or descending and displays a notification to the user
     */
    function HandleSortSavedSetsByTitle() {
        const currentSavedSet = savedSets.Sets;
        isSavedSetTitleSortedByAscending = !isSavedSetTitleSortedByAscending;

        const sortedSavedSet = currentSavedSet.slice().sort((a, b) => {
            
            if(a.nameOfSet > b.nameOfSet && isSavedSetTitleSortedByAscending || a.nameOfSet < b.nameOfSet && !isSavedSetTitleSortedByAscending) {
                return 1;
            }
            else if(a.nameOfSet < b.nameOfSet && isSavedSetTitleSortedByAscending || a.nameOfSet > b.nameOfSet && !isSavedSetTitleSortedByAscending) {
                return -1;
            }
            return 0;
        });

        dispatch(setNewSavedSetsFromSets(sortedSavedSet));

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Sets sorted by title.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Sorts sets by role type, sending the current role type to sort by to the top of the list
     */
    function HandleSortSavedSetsByRoleType() {
          
        const currentSavedSet = savedSets.Sets;
        const rotateTopRoleSort = RotateRoleSort(selectedSavedSetsState.currentTopRole);
        const sortedSavedSet = currentSavedSet.slice().sort((a, b) => {
            if(a.roleTypeOfSet == rotateTopRoleSort && b.roleTypeOfSet != rotateTopRoleSort) {
                return -1;
            }
            else if(a.roleTypeOfSet != rotateTopRoleSort && b.roleTypeOfSet == rotateTopRoleSort) {
                return 1;
            }
            return 0;
        });
        dispatch(setNewSavedSetsFromSets(sortedSavedSet));
        dispatch(setTopRoleSort(rotateTopRoleSort));
        SavedHolstersSortSetsByRoleNotification(rotateTopRoleSort);
    }

    /**
     * Displays a notification to the user in the saved set area what role the sets are being sorted by
     * @param roleToShow, the role to display
     */
    function SavedHolstersSortSetsByRoleNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;   
        savedSetNotificationBox.childNodes[0].textContent = roleToShow == "None" ? "Sets No Longer Sorted." : roleToShow + " brought to top.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Checks if the saved set notification text is the same as expectedText, if it is, hide the notification
     * @param expectedText, the expected text
     */
    function LostFindsHolsterSetSavedNotificationHide(expectedText : string) {  
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;
        if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
            savedSetNotificationBox.childNodes[0].textContent = "";
            savedSetNotificationBox.style.color = "";
        }
        
    }

    /**
     * Switches the current role filter, displaying only saved sets that are of a particular role type
     */
    function HandleRotateRoleFilter() {
        const rotateRoleFilter = RotateRoleSort(selectedSavedSetsState.currentRoleFilter);
        dispatch(setRoleFilter(rotateRoleFilter));
        SavedHolstersFilterSetsByRoleNotification(rotateRoleFilter);
    }

    /**
     * Displays a notification when the role filter changes
     * @param roleToShow, the role to show for notification
     */
    function SavedHolstersFilterSetsByRoleNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = roleToShow == "None" ? "Showing All Sets." : "Showing " + roleToShow + " sets only.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Deselects every selected saved set check box and resets the selected saved set state
     */
    function HandleClearSelectedSavedSets() {         
        (document.getElementsByName("SavedSetCheckbox") as NodeListOf<HTMLInputElement>).forEach((checkBoxToUncheck) => checkBoxToUncheck.checked = false);
        dispatch(clearSelectedSavedSets());

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Cleared selected sets.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 

    }

    /**
     * Exports all the saved sets that have been selected as a json file
     */
    function HandleExportSelectedSavedSets() {
        const savedSetsToExport : LostActionSets = {Sets: []};
        savedSets.Sets.forEach((savedSet) => {
            if(selectedSavedSetsState.SelectedSets.includes(savedSet.id)) {
                savedSetsToExport.Sets.push(savedSet);
            }
        });
        saveSavedSetsToFile(savedSetsToExport);

        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Exported selected sets.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Deletes all saved sets and clears local storage of all saved sets
     */
    function HandleDeleteAllSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(false));
        dispatch(clearAllSavedSets());
        dispatch(clearSelectedSavedSets());

        ClearSavedSetsDataInLocalStorage();
        
        
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "All saved sets deleted.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Hides the confirm deletion of saved sets box
     */
    function HandleNoDeletionOfAllSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(false));
    }

    /**
     * Displays the confirm deletion of saved sets box
     */
    function HandleResetSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(true));
    }

    const deleteSavedSetsContent : JSX.Element = selectedSavedSetsState.isConfirmDeletionOfSavedSets ? 
    (
        <div className="ResetClearSetsDivConfirmationBox">
            <div className="ResetClearSetsDivConfirmationBoxText">
                <span>Are you sure ?</span>
            </div>
            <div className="ResetClearSetsDivConfirmationBoxReply">
                <div onClick={HandleDeleteAllSavedSets} className="ResetClearSetsDivConfirmationBoxReplyBoxYes">
                    <span>Yes</span>
                </div>
                <div onClick={HandleNoDeletionOfAllSavedSets}className="ResetClearSetsDivConfirmationBoxReplyBoxNo">
                    <span>No</span>
                </div>
            </div>
        </div>
    )
    : 
    (
        <div onClick={HandleResetSavedSets}>
                <span>Delete All Saved Sets</span>
        </div>
    
    )

    return (
    <div className="SavedHolstersContainer">
        <div className="SavedHolstersTitleTextAndDeleteSavedSets">
            <div className="SavedHolstersTitleText">
                <span>Your Holsters</span>
            </div>
            <div onClick={HandleSavedSetsDisplayHelpBox} className="SavedSetsHelpButton">
                <span>?</span>
            </div>
            <div id="SavedHolstersNotificationBox" className="SavedHolstersNotificationBox">
                <span></span>
            </div>
            <div className="ResetClearSetsDiv">
                {deleteSavedSetsContent}
            </div>
        </div>
        
        <div style={{color: "white"}} className="SavedHolstersUserButtons">
            <div className="SortSetsDiv">
                <div className="SortSetsDivText">
                    <span>Sort Sets By :</span>
                </div>
                <div className="SortSetsDivFunctions">
                    <div onClick={HandleSortSavedSetsByTitle} className="SortSetsByTitleDiv">
                        <span>Title Name</span>
                    </div>
                    <div onClick={HandleSortSavedSetsByRoleType} className="SortSetsByRoleDiv">
                        {roleTypeSortElement}
                    </div>
                </div>
            </div>
            <div className="FilterSetsDiv">
                <div className="FilterSetsDivText">
                    <span>Filter Sets</span>
                </div>
                <div onClick={HandleRotateRoleFilter} className="FilterSetsDivRole">
                    {roleTypeFilterElement}
                </div>
            </div>
            <div className="ImportExportOptionsForSetsDiv">
                <div className="ImportExportSetsDiv">
                    <div onClick={HandleUploadSavedSets} className="ImportSetsDiv">
                        <span>Import Sets</span>
                    </div>
                    <div onClick={HandleSaveSavedSetsAsJSON} className="ExportSetsDiv">
                        <span>Export Sets</span>
                    </div>
                </div>
                <div className="ExportSelectedClearSelectedSetsDiv">
                    <div onClick={HandleClearSelectedSavedSets} className="ClearSelectedSetsDiv">
                        Clear Selected
                    </div>
                    <div onClick={HandleExportSelectedSavedSets} className="ExportSelectedSetsDiv">
                        Export Selected
                    </div>
                </div>
            </div>
            
        </div>
        
        {setsToDisplay}
        <div id="SavedSetsHelpBox" className="SavedSetsHelpBox hidden">
            <div style={{marginTop: "5px"}} className="SavedSetsHelpBoxTitleAndClose">
                <div style={{width: "95%", paddingLeft: "5px"}} className="SavedSetsHelpBoxTitle">
                    <span>How To Use Your Saved Holsters</span>
                </div>
                <div onClick={HandleSavedSetsDisplayHelpBox} style={{width: "5%"}} className="LostActionInstanceTimelineHelpBoxCloseButton">
                    <span style={{fontSize: "20px"}}>X</span>
                </div>
            </div>
            <div className="SavedSetsHelpBoxResources">
                <div>
                    <span style={{fontSize: "18px", textDecoration: "underline"}}>Sorting and Filters</span> <br></br> You can sort your sets by title name or by role. You can also choose to display only one role at a time with the filter.
                </div>
                <div className="SavedSetsHelpBoxMiddleParagraph">
                    <span style={{fontSize: "18px", textDecoration: "underline"}}>Importing and Exporting</span> <br></br> Your sets can be exported (as a JSON) for other users to import. You can select (with the checkboxes) which specific sets you wish to export too, rather than all of your sets.
                </div>
                <div>
                <span style={{fontSize: "18px", textDecoration: "underline"}}>Set Details</span> <br></br> Every set will show its name, its prepop actions and the actions contained in its holster, plus the total weight of the set with the role it's intended to be used on. You can load up, select (for export) or delete a set.
                </div>
            </div>
        </div>
    </div>
    )
}

export default CreateSavedHolsters;