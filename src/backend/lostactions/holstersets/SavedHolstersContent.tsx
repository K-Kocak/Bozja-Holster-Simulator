import '@css/ui/components/SavedHolstersContent.scss';
import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';

import { useAppSelector } from '@app/backend/hooks';

import { ClearSavedSetsDataInLocalStorage, LoadSavedSetsFromLocalStorage, SaveSavedSetsToLocalStorage } from '@backend/lostactions/holstersetsstorage/SavedHolstersStorage';

const CreateSavedHolsters = () => {
    const SavedSets = useAppSelector((state) => state.LostActionSets);
    const SetsToDisplay : JSX.Element = CreateSavedSets(SavedSets.Sets);

    function HandleSaveSavedSets() {
        SaveSavedSetsToLocalStorage(SavedSets);
    }

    function HandleResetSavedSets() {
        ClearSavedSetsDataInLocalStorage();
    }

    function HandleLoadSavedSets() {
        LoadSavedSetsFromLocalStorage();
    }

    return (
    <div className="SavedHolstersContainer">
        <div className="SavedHolstersTitleText">
            <span>Your Holsters</span>
        </div>
        <div style={{color: "white"}} className="SavedHolstersUserButtons">
            <span>PlaceHolder For Buttons</span>
            <button onClick={HandleSaveSavedSets}>Button For Testing Local Storage Stuff</button>
            <button onClick={HandleResetSavedSets}>Button For Testing Local Storage Reset</button>
            <button onClick={HandleLoadSavedSets}>Button For Testing Local Storage Loading</button>
        </div>
        
        {SetsToDisplay}
        
    </div>
    )
}

export default CreateSavedHolsters;