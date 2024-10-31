
import '@css/ui/components/LostFindsCache/LostFindsCache.scss';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import CreateLostCacheLostActionButtons from '@backend/lostactions/lostfindscache/LostFindsCacheLostActionButtonGen';


function LostFindsCache() {
    const LostCacheLostActionButtonPopulation = CreateLostCacheLostActionButtons(LostActionsAsObjectArray);

    return (
        <div id="LostFindsCacheContainer">
            {LostCacheLostActionButtonPopulation}
        </div>
    )
    
}

export default LostFindsCache;