import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';
import CreateLostCacheLostActionButtons from '@backend/lostactions/LostFindsCacheLostActionButtonGen';

const LostCacheLostActionButtonPopulation = CreateLostCacheLostActionButtons(LostActionsAsObjectArray);

// {LostActionInformationBoxes[LostActions.ItemRelated.PureEssenceElder.id]} 
class LostFindsCache extends React.Component<unknown, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {LostCacheLostActionButtonPopulation}
            </div>
        )
    }
}

export default LostFindsCache;