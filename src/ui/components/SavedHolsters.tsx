import '@css/ui/components/SavedHolsters/SavedHolsters.scss';

import CreateSavedHolsters from '@backend/lostactions/holstersets/SavedHolstersContent';
import { useAppSelector } from '@app/backend/hooks';

function SavedHolsters() {
    const SavedHolsterWindow = CreateSavedHolsters();
    console.log(useAppSelector((state) => state.LostFindsHolster));
    return (
        <div id="SavedHolsters">
            {SavedHolsterWindow}
        </div>
    )
    
}

export default SavedHolsters;