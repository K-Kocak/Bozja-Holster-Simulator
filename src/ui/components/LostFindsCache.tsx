import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActions from '@backend/lostactions/ActionData';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

import TestButtonCode from '@backend/lostactions/LostFindsCacheLostActionButtonGen';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);
// {LostActionInformationBoxes[LostActions.ItemRelated.PureEssenceElder.id]} 
class LostFindsCache extends React.Component<any, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {TestButtonCode}
            </div>
        )
    }
}

export default LostFindsCache;