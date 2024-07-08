// Divs that display when an action is hovered on is created here

import React from 'react'

import LostActions from '@backend/lostactions/ActionData';

//import LostActionsNoBorder from '../pictures/LostActions/LostActionsImgInitialise';

import '@css/ui/components/LostActionsDivGen.scss';

const LostActionsAsArray = [LostActions.Offensive.LostFocus, LostActions.Offensive.LostFontofMagic];

//const LostFocusLink = LostActionsAsArray[0].img;

/*<div className="Testing" style={{'background': 'no-repeat url(' + LostFocusLink + ')', 'backgroundSize': 'cover',
    'position': 'absolute',
    'left': '57px',
    'top': '55px'
}}></div>*/

const LostActionInformation: React.JSX.Element[] = [<div className="Testing">
    <div>
        <div>
            <div>Image Here</div>
            <div>
                <span>Action Name</span>
                <span>Action Type</span>
            </div>
        </div>
        <div>
            <div>Range</div>
            <div>Radius</div>
        </div>
    </div>

    <div>
        <div>Cast</div>
        <div>Recast</div>
        <div>Available</div>
    </div>

    <div>
        Action Description
    </div>

    <div>
        <div>Affinity</div>
        <div>Jobs that can use it.</div>
    </div>
</div>];
console.log(LostActionsAsArray[0].img)
export default LostActionInformation;