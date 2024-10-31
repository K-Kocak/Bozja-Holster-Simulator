import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { addImportedSavedSetsToCurrentSavedSets, clearAllSavedSets, deleteSavedSetFromSets, LostActionSets } from '@backend/lostactions/LostActionSetSlice';
import { clearSelectedSavedSets } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ClearSavedSetsDataInLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';

import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';

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

let isSavedSetTitleSortedByAscending : boolean = false;

const CreateSavedHolsters = () => {
    const dispatch = useAppDispatch();
    const savedSets = useAppSelector((state) => state.LostActionSets);
    const currentSelectedSets = useAppSelector((state) => state.SelectedSavedSets.SelectedSets)
    const setsToDisplay : JSX.Element = CreateSavedSets(savedSets.Sets);
    console.log(currentSelectedSets);

    SaveSavedSetsToLocalStorage(savedSets);

    function HandleResetSavedSets() {
        ClearSavedSetsDataInLocalStorage();
        clearSelectedSavedSets();
        dispatch(clearAllSavedSets());
    }

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
                        const parsedSavedSet : LostActionSets = JSON.parse(JSONSavedSetAsText.target.result.toString());
                        if(parsedSavedSet.Sets.length > 0) {
                            console.log("am i here");
                            parsedSavedSet.Sets.forEach((SavedSetToAvoidDuplicateId) => {
                                SavedSetToAvoidDuplicateId.id = Math.random();
                            })
                            dispatch(addImportedSavedSetsToCurrentSavedSets(parsedSavedSet.Sets));
                        }
                        console.log(parsedSavedSet);
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
        const sortedSavedSet = currentSavedSet.slice().sort((a, b) => {
            if(a.roleTypeOfSet > b.roleTypeOfSet) {
                return 1;
            }
            else if(a.roleTypeOfSet < b.roleTypeOfSet) {
                return -1;
            }
            return 0;
        });
        dispatch(deleteSavedSetFromSets(sortedSavedSet));
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
            
            <div onClick={HandleResetSavedSets} className="ResetClearSetsDiv">
                <span>Delete All Saved Sets</span>
            </div>
        </div>
        
        {setsToDisplay}
        
    </div>
    )
}

export default CreateSavedHolsters;