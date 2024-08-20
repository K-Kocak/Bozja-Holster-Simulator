import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActions from '@backend/lostactions/ActionData';

import CreateLostActionInformationBoxes from './LostActionsDivGen';
import IAction from '@app/backend/interfaces/IAction';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

//const LostActionsAsArray : IAction[] = [LostActions.Offensive.LostFocus, LostActions.Offensive.LostFontofMagic, LostActions.ItemRelated.DeepEssenceAetherweaver, LostActions.Offensive.LostFlareStar, LostActions.Detrimental.LostSeraphStrike];


const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

class LostFindsCache extends React.Component<any, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {LostActionInformationBoxes[11]}
               
            </div>
        )
    }
}

export default LostFindsCache;