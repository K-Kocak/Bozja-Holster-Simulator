import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { addImportedSavedSetsToCurrentSavedSets, clearAllSavedSets, deleteSavedSetFromSets, LostActionSets } from '@backend/lostactions/LostActionSetSlice';
import { clearSelectedSavedSets, setIsConfirmDeletionOfSavedSets, setRoleFilter, setTopRoleSort } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ClearSavedSetsDataInLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';

import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';
import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import IHolsterTimeline, { ILostActionExpenditure, IUserSlottedActions } from '@backend/interfaces/IHolsterTimeline';
import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import { FFXIVRolePicturesAsObject } from '@backend/lostactions/RolePictureImport';

import '@css/ui/components/SavedHolsters/SavedHolstersContent.scss';




function saveSavedSetsToFile(SavedSetToSaveAsFile : LostActionSets) {
    const savedSetsAsJSON = JSON.stringify(SavedSetToSaveAsFile);
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

function WeightOfSavedSet(HolsterActionsToGetTotalWeight : IActionHolster[]) : number {
    let totalWeightOfHolster : number = 0;
    HolsterActionsToGetTotalWeight.forEach((LostAction) => {
        totalWeightOfHolster += LostActionsAsObjectArray[LostAction.id].weight*LostAction.quantity;
    })
    return totalWeightOfHolster;
}

//#region Saved Set Action Id Validation And Quantity
function IsSavedSetHasValidActionIdsAndQuantities(SavedSetToCheck : ILostActionSet) : boolean {
    const actionsInHolster : IActionHolster[] = SavedSetToCheck.setLostActionContents;
    // holster validation
    actionsInHolster.forEach((LostAction) => {
        // id validation
        if(typeof LostActionsAsObjectArray[LostAction.id] == "undefined" && LostAction.id != -1) {
            return false;
        }
        // quantity validation
        if(LostAction.quantity <= 0) {
            return false;
        }
    })
    // prepop or pull with (in encounter) validation
    if(!IsCheckPrepopOrPullWithActionIdsValid(SavedSetToCheck.PrepopLostActions)) {
        return false;
    }
    // holster timeline resource spending validation
    if(!IsCheckHolsterTimelineActionIdsValid(SavedSetToCheck.HolsterTimeline)) {
        return false;
    }
    return true;
}

function IsCheckPrepopOrPullWithActionIdsValid(PrepopOrPullWithActions : IUserSlottedActions) : boolean {
    if(typeof LostActionsAsObjectArray[PrepopOrPullWithActions.EssenceInUse] == "undefined" || typeof LostActionsAsObjectArray[PrepopOrPullWithActions.LostActionLeft] == "undefined" || typeof LostActionsAsObjectArray[PrepopOrPullWithActions.LostActionRight] == "undefined") {
        if(PrepopOrPullWithActions.EssenceInUse == -1 && PrepopOrPullWithActions.LostActionLeft == -1 && PrepopOrPullWithActions.LostActionRight == -1) {
            return true;
        }
        return false;
    }
    return true;
}

function IsCheckHolsterTimelineActionIdsValid(HolsterTimelineToCheck : IHolsterTimeline) : boolean {
    HolsterTimelineToCheck.Encounters.forEach((EncounterToCheck) => {
        if(!IsCheckPrepopOrPullWithActionIdsValid(EncounterToCheck.PullBossWith)) {
            return false;
        }
        if(!IsCheckResourcesSpentActionIdsValid(EncounterToCheck.LostActionsSpentInPull) || !IsCheckResourcesSpentActionIdsValid(EncounterToCheck.LostActionsSpentAfterPull)) {
            return false;
        }
    })
    return true;
}

function IsCheckResourcesSpentActionIdsValid(ResourcesSpent : ILostActionExpenditure[]) : boolean {
    ResourcesSpent.forEach((ResourceSpent) => {
        if(typeof LostActionsAsObjectArray[ResourceSpent.LostActionUsed] == "undefined" && ResourceSpent.LostActionUsed != -1) {
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

function getAssociatedRoleImageForRole(roleToGetImageOf : string) : string {
    switch(roleToGetImageOf) {
        case "None":
            return "None";
        case "Healer":
            return FFXIVRolePicturesAsObject.Healer;
        case "Tank":
            return FFXIVRolePicturesAsObject.Tank;
        case "Melee":
            return FFXIVRolePicturesAsObject.MeleeDPS;
        case "Physical Ranged":
            return FFXIVRolePicturesAsObject.PhysicalRangedDPS;
        case "Magical Ranged":
            return FFXIVRolePicturesAsObject.MagicalRangedDPS;
    }
    return "None";
}

function HandleSavedSetsDisplayHelpBox() {
    console.log("i was clicked");
    document.getElementById("SavedSetsHelpBox")?.classList.toggle("hidden");  
}

let isSavedSetTitleSortedByAscending : boolean = false;

const CreateSavedHolsters = () => {
    const dispatch = useAppDispatch();
    const savedSets = useAppSelector((state) => state.LostActionSets);
    const currentSelectedSets = useAppSelector((state) => state.SelectedSavedSets.SelectedSets)
    const confirmDeleteSavedSetsBox = useAppSelector((state) => state.SelectedSavedSets.isConfirmDeletionOfSavedSets);
    const currentRoleTypeSort = useAppSelector((state) => state.SelectedSavedSets.currentTopRole);
    const currentRoleTypeFilter = useAppSelector((state) => state.SelectedSavedSets.currentRoleFilter);
    const roleTypeSortImage : string = getAssociatedRoleImageForRole(currentRoleTypeSort);
    const roleTypeFilterImage: string = getAssociatedRoleImageForRole(currentRoleTypeFilter);
    const setsToDisplay : JSX.Element = CreateSavedSets(savedSets.Sets);
    const roleTypeSortElement : JSX.Element = currentRoleTypeSort != "None" ? <img style={{height: "23px"}} src={roleTypeSortImage}></img> : <span>No Role</span>
    const roleTypeFilterElement : JSX.Element = currentRoleTypeFilter != "None" ? <img style={{height: "23px"}} src={roleTypeFilterImage}></img> : <span>All Roles</span>
    console.log(currentSelectedSets);

    SaveSavedSetsToLocalStorage(savedSets);

    function HandleSaveSavedSetsAsJSON() {
        saveSavedSetsToFile(savedSets);
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "All sets exported.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function HandleUploadSavedSets() {
        clearSelectedSavedSets();
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
                                console.log("am i here");
                                const validatedParsedSavedSets : LostActionSets = {Sets: []};
                                parsedSavedSet.Sets.forEach((SavedSetToValidate) => {
                                    SavedSetToValidate.id = Math.random();

                                    const totalWeightOfSavedSet : number = WeightOfSavedSet(SavedSetToValidate.setLostActionContents)
                                    try {
                                        if(IsSavedSetHasValidActionIdsAndQuantities(SavedSetToValidate) && totalWeightOfSavedSet <= 99 && totalWeightOfSavedSet >= 0) {
                                            if(totalWeightOfSavedSet != SavedSetToValidate.weightOfSet) {
                                                SavedSetToValidate.weightOfSet = totalWeightOfSavedSet;
                                                console.log("weight fixed");
                                            }
                                            
                                            console.log(SavedSetToValidate);
                                            console.log("Set ids are good");
                                            validatedParsedSavedSets.Sets.push(SavedSetToValidate);
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
        dispatch(deleteSavedSetFromSets(sortedSavedSet));
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Sets sorted by title.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function HandleSortSavedSetsByRoleType() {
        // TO-DO: alternate between the 5 roles ?      
        const currentSavedSet = savedSets.Sets;
        const rotateTopRoleSort = RotateRoleSort(currentRoleTypeSort);
        const sortedSavedSet = currentSavedSet.slice().sort((a, b) => {
            /*
            if(a.roleTypeOfSet > b.roleTypeOfSet) {
                return 1;
            }
            else if(a.roleTypeOfSet < b.roleTypeOfSet) {
                return -1;
            }
            return 0;
            */
            if(a.roleTypeOfSet == rotateTopRoleSort && b.roleTypeOfSet != rotateTopRoleSort) {
                return -1;
            }
            else if(a.roleTypeOfSet != rotateTopRoleSort && b.roleTypeOfSet == rotateTopRoleSort) {
                return 1;
            }
            return 0;
        });
        dispatch(deleteSavedSetFromSets(sortedSavedSet));
        dispatch(setTopRoleSort(rotateTopRoleSort));
        SavedHolstersSortSetsByRoleNotification(rotateTopRoleSort);
    }

    function SavedHolstersSortSetsByRoleNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;   
        savedSetNotificationBox.childNodes[0].textContent = roleToShow + " brought to top.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function LostFindsHolsterSetSavedNotificationHide(expectedText : string) {  
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;
        if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
            savedSetNotificationBox.childNodes[0].textContent = "";
            savedSetNotificationBox.style.color = "";
        }
        
    }

    function HandleRotateRoleFilter() {
        const rotateRoleFilter = RotateRoleSort(currentRoleTypeFilter);
        dispatch(setRoleFilter(rotateRoleFilter));
        SavedHolstersFilterSetsByRoleNotification(rotateRoleFilter);
    }

    function SavedHolstersFilterSetsByRoleNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement;   
        savedSetNotificationBox.childNodes[0].textContent = "Showing " + roleToShow + " sets only.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function HandleClearSelectedSavedSets() {         
        (document.getElementsByName("SavedSetCheckbox") as NodeListOf<HTMLInputElement>).forEach((checkBoxToUncheck) => checkBoxToUncheck.checked = false);
        dispatch(clearSelectedSavedSets());
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Cleared selected sets.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 

    }

    function HandleExportSelectedSavedSets() {
        const savedSetsToExport : LostActionSets = {Sets: []};
        savedSets.Sets.forEach((SavedSet) => {
            console.log(currentSelectedSets);
            console.log(SavedSet.id);
            if(currentSelectedSets.includes(SavedSet.id)) {
                savedSetsToExport.Sets.push(SavedSet);
            }
        });
        saveSavedSetsToFile(savedSetsToExport);
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "Exported selected sets.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function HandleDeleteAllSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(false));
        ClearSavedSetsDataInLocalStorage();
        clearSelectedSavedSets();
        dispatch(clearAllSavedSets());
        const savedSetNotificationBox = document.getElementById("SavedHolstersNotificationBox") as HTMLElement; 
        savedSetNotificationBox.childNodes[0].textContent = "All saved sets deleted.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function HandleNoDeletionOfAllSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(false));
    }

    function HandleResetSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(true));
    }

    const deleteSavedSetsContent : JSX.Element = confirmDeleteSavedSetsBox ? 
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

    /*
    <span>PlaceHolder For Buttons</span>
    <button onClick={HandleSaveSavedSetsAsJSON}>SaveAsJSON</button>
    <button onClick={HandleResetSavedSets}>Reset</button>
    <button onClick={HandleUploadSavedSets}>LoadTest</button>
    <button onClick={HandleSortSavedSetsByTitle}>SortByTitle</button>
    <button onClick={HandleSortSavedSetsByRoleType}>SortByRole</button>
    */
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
                    <span>How To Manage Your Saved Holsters</span>
                </div>
                <div onClick={HandleSavedSetsDisplayHelpBox} style={{width: "5%"}} className="LostActionInstanceTimelineHelpBoxCloseButton">
                    <span style={{fontSize: "20px"}}>X</span>
                </div>
            </div>
            <div className="SavedSetsHelpBoxResources">
                <div>
                    <span style={{fontSize: "18px", textDecoration: "underline"}}>Sorting and Filters</span> <br></br> You can sort your sets by title name or by the role it's intended for. You can also display only one role at a time with the filter.
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