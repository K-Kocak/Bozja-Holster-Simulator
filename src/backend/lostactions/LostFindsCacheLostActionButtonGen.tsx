import React from 'react';

import LostActions from '@backend/lostactions/ActionData';
import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

import '@css/ui/components/LostFindsCacheLostActionButtonGen.scss';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

export const TestButtonCode : React.JSX.Element =
<div className="LostActionOffensive">
    <div className="LostCacheLostActionButton">
        <img src={LostActions.Offensive.LostFocus.imgBorder}></img>
    </div>
    <div className="LostCacheLostActionButton">
        <img src={LostActions.Offensive.LostFontofMagic.imgBorder}></img>
    </div>
</div> 
export default TestButtonCode;