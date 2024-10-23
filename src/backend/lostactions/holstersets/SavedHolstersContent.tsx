import '@css/ui/components/SavedHolstersContent.scss';
import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';

import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { ClearSavedSetsDataInLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';
import { addImportedSavedSetsToCurrentSavedSets, clearAllSavedSets, deleteSavedSetFromSets, LostActionSets } from '../LostActionSetSlice';

function saveSavedSetsToFile(SavedSetToSaveAsFile : Blob) {
    const a = document.createElement("a");
    a.download = "SavedHolsterSets";
    a.href = URL.createObjectURL(SavedSetToSaveAsFile);
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
    const setsToDisplay : JSX.Element = CreateSavedSets(savedSets.Sets);
    

    SaveSavedSetsToLocalStorage(savedSets);

    function HandleResetSavedSets() {
        ClearSavedSetsDataInLocalStorage();
        dispatch(clearAllSavedSets());
    }

    function HandleSaveSavedSetsAsJSON() {
        const savedSetsAsJSON = JSON.stringify(savedSets);
        const savedSetsAsBlob = new Blob([savedSetsAsJSON], { type: "application/json"});
        saveSavedSetsToFile(savedSetsAsBlob);
    }

    function HandleUploadSavedSets() {
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
 
    return (
    <div className="SavedHolstersContainer">
        <div className="SavedHolstersTitleText">
            <span>Your Holsters</span>
        </div>
        <div style={{color: "white"}} className="SavedHolstersUserButtons">
            <span>PlaceHolder For Buttons</span>
            <button onClick={HandleSaveSavedSetsAsJSON}>SaveAsJSON</button>
            <button onClick={HandleResetSavedSets}>Reset</button>
            <button onClick={HandleUploadSavedSets}>LoadTest</button>
            <button onClick={HandleSortSavedSetsByTitle}>SortByTitle</button>
            <button onClick={HandleSortSavedSetsByRoleType}>SortByRole</button>
        </div>
        
        {setsToDisplay}
        
    </div>
    )
}

export default CreateSavedHolsters;