import '../../scss/ui/components/SavedHolsters.scss';

import CreateSavedHolsters from '@backend/lostactions/holstersets/SavedHolstersContent';



function SavedHolsters() {
    const SavedHolsterWindow = CreateSavedHolsters();
    return (
        <div id="SavedHolsters">
            {SavedHolsterWindow}
        </div>
    )
    
}

export default SavedHolsters;