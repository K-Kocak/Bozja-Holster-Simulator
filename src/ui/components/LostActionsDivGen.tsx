// Divs that display when an action is hovered on is created here

import React from 'react'

import LostActions from '@backend/lostactions/ActionData';

import LostActionsNoBorder from '../pictures/LostActions/LostActionsImgInitialise';

import '@css/ui/components/LostActionsDivGen.scss';

const LostActionsAsArray = [LostActions.Offensive.LostFocus, LostActions.Offensive.LostFontofMagic];

const LostFocusLink = LostActionsAsArray[0].img;

/*<div className="Testing" style={{'background': 'no-repeat url(' + LostFocusLink + ')', 'backgroundSize': 'cover',
    'position': 'absolute',
    'left': '57px',
    'top': '55px'
}}></div>*/

const LostActionInformation: React.JSX.Element[] = [<div className="Testing">
    <div>
        <div>
            <div></div>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>

    <div></div>
    <div></div>
    <div></div>
</div>];
console.log(LostActionsAsArray[0].img)
export default LostActionInformation;