import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActions from '@backend/lostactions/ActionData';

import CreateLostActionInformationBoxes from './LostActionsDivGen';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

class LostFindsCache extends React.Component<any, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {LostActionInformationBoxes[LostActions.ItemRelated.PureEssenceElder.id]}
               
            </div>
        )
    }
}

export default LostFindsCache;