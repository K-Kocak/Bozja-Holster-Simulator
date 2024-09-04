import React, { BaseSyntheticEvent } from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';
import CreateLostCacheLostActionButtons from '@backend/lostactions/LostFindsCacheLostActionButtonGen';
import { useAppDispatch } from '@app/backend/hooks';



function LostFindsCache() {
    const dispatch = useAppDispatch();

    const LostCacheLostActionButtonPopulation = CreateLostCacheLostActionButtons(LostActionsAsObjectArray);

    return (
        <div id="LostFindsCacheContainer">
            {LostCacheLostActionButtonPopulation}
        </div>
    )
    
}

export default LostFindsCache;