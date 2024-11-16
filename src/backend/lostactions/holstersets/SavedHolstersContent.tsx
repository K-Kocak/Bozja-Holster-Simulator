import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { addImportedSavedSetsToCurrentSavedSets, clearAllSavedSets, deleteSavedSetFromSets, LostActionSets } from '@backend/lostactions/LostActionSetSlice';
import { clearSelectedSavedSets, setIsConfirmDeletionOfSavedSets, setTopRoleSort } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ClearSavedSetsDataInLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';

import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';
import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import IHolsterTimeline, { ILostActionExpenditure, IUserSlottedActions } from '@backend/interfaces/IHolsterTimeline';

import '@css/ui/components/SavedHolsters/SavedHolstersContent.scss';
import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';



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

let isSavedSetTitleSortedByAscending : boolean = false;

const CreateSavedHolsters = () => {
    const dispatch = useAppDispatch();
    const savedSets = useAppSelector((state) => state.LostActionSets);
    const currentSelectedSets = useAppSelector((state) => state.SelectedSavedSets.SelectedSets)
    const confirmDeleteSavedSetsBox = useAppSelector((state) => state.SelectedSavedSets.isConfirmDeletionOfSavedSets);
    const currentRoleTypeSort = useAppSelector((state) => state.SelectedSavedSets.currentTopRole);

    const setsToDisplay : JSX.Element = CreateSavedSets(savedSets.Sets);
    console.log(currentSelectedSets);

    SaveSavedSetsToLocalStorage(savedSets);

    function HandleSaveSavedSetsAsJSON() {
        saveSavedSetsToFile(savedSets);
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
    }

    function HandleClearSelectedSavedSets() {         
        (document.getElementsByName("SavedSetCheckbox") as NodeListOf<HTMLInputElement>).forEach((checkBoxToUncheck) => checkBoxToUncheck.checked = false);
        dispatch(clearSelectedSavedSets());
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
    }

    function HandleDeleteAllSavedSets() {
        dispatch(setIsConfirmDeletionOfSavedSets(false));
        ClearSavedSetsDataInLocalStorage();
        clearSelectedSavedSets();
        dispatch(clearAllSavedSets());
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
            <div className="RestClearSetsDivConfirmationBoxReply">
                <div onClick={HandleDeleteAllSavedSets} className="RestClearSetsDivConfirmationBoxReplyBoxYes">
                    <span>Yes</span>
                </div>
                <div onClick={HandleNoDeletionOfAllSavedSets}className="RestClearSetsDivConfirmationBoxReplyBoxNo">
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
        <div className="SavedHolstersTitleText">
            <span>Your Holsters</span>
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
                        <span>Role Type</span>
                    </div>
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
            
            <div className="ResetClearSetsDiv">
                {deleteSavedSetsContent}
            </div>
        </div>
        
        {setsToDisplay}
        
    </div>
    )
}

export default CreateSavedHolsters;