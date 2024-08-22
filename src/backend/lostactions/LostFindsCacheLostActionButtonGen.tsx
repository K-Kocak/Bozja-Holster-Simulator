import React from 'react';

import LostActions from '@backend/lostactions/ActionData';
import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

export const TestButtonCode : React.JSX.Element = 
<div>
    <img src={LostActions.Offensive.LostFocus.imgBorder}></img>
</div>

export default TestButtonCode;