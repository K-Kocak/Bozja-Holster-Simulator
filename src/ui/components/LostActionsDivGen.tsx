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
    <div className="Testing1">
        <div className="Testing1Inner1">
            <div><img src={LostActionsAsArray[0].img}></img></div>
            <div className="Testing1Inner1Inner">
                <p className="TestingActionName">{LostActionsAsArray[0].name.EN}</p>
                <p className="TestingActionCat">{LostActionsAsArray[0].category.EN}</p>
            </div>
        </div>
        <div className="Testing1Inner2">
            <div className="Testing1Inner2Inner1">Range: {LostActionsAsArray[0].range}</div>
            <div className="Testing1Inner2Inner2">Radius: {LostActionsAsArray[0].radius}</div>
        </div>
    </div>

    <div className="Testing2">
        <div className="Testing2Inner1">
            <p>Cast</p>
            <p>{LostActionsAsArray[0].cast}</p>
        </div>
        <div className="Testing2Inner2">
            <p>Recast</p>
            <p>{LostActionsAsArray[0].recast}</p>
        </div>
        <div className="Testing2Inner3">
            <p>Available</p>
            <p>{LostActionsAsArray[0].available}</p>
        </div>
    </div>

    <div className="Testing3">
        {LostActionsAsArray[0].description.EN}
    </div>

    <div className="Testing4">
        <div className="Testing4Inner1">Affinity</div>
        <div className="Testing4Inner2">{LostActionsAsArray[0].affinity.EN}</div>
    </div>
</div>];
console.log(LostActionsAsArray[0].img)
export default LostActionInformation;