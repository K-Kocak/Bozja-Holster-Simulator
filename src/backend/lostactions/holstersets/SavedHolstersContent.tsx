import '@css/ui/components/SavedHolstersContent.scss';
import CreateSavedSets from '@backend/lostactions/holstersets/SavedHolstersSetGen';

import { useAppSelector } from '@app/backend/hooks';

const CreateSavedHolsters = () => {
    const SetsToDisplay : JSX.Element = CreateSavedSets(useAppSelector((state) => state.LostActionSets.Sets));

    return (
    <div className="SavedHolstersContainer">
        <div className="SavedHolstersTitleText">
            <span>Your Holsters</span>
        </div>
        <div style={{color: "white"}} className="SavedHolstersUserButtons">
            <span>PlaceHolder For Buttons</span>
        </div>
        
        {SetsToDisplay}
        
    </div>
    )
}

export default CreateSavedHolsters;