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
//<div className="TestingGradient"></div>

const LostActionInformation: React.JSX.Element[] = [<div className="Testing">
    
    <div className="TestingActionEncompass">
        <div className="Testing1">   
            <div className="Testing1Inner1">
                <div className="TestingImage"><img src={LostActionsAsArray[1].img}></img></div>
                <div className="Testing1Inner1Inner">
                    <p className="TestingActionName">{LostActionsAsArray[1].name.EN}</p>
                    <p className="TestingActionCat">{LostActionsAsArray[1].skillType.EN}</p>
                </div>
            </div>
            <div className="Testing1Inner2">
                <div className="Testing1Inner2Inner1"><span>Range</span> {LostActionsAsArray[1].range}</div>
                <div className="Testing1Inner2Inner2"><span>Radius</span> {LostActionsAsArray[1].radius}</div>
            </div>
        </div>

        <div className="Testing2">
            <div className="Testing2Inner1">
                <p className="TestingText">Cast</p>
                <p className="TestingText2">{LostActionsAsArray[1].cast}</p>
            </div>
            <div className="Testing2Inner2">
                <p className="TestingText">Recast</p>
                <p className="TestingText2">{LostActionsAsArray[1].recast}</p>
            </div>
            <div className="Testing2Inner3">
                <p className="TestingText">Available</p>
                <p className="TestingText2">{LostActionsAsArray[1].available}</p>
            </div>
        </div>
        <div className="SeparatorDiv">
            <div className="TestingUpperSeparator"></div>
            <div className="TestingSeparator"></div>
            <div className="TestingLowerSeparator"></div> 
        </div>
        <div className="Testing3">
            {LostActionsAsArray[1].description.EN}
        </div>

        <div className="Testing4">
            <div className="Testing4Inner1">Affinity</div>
            <div className="Testing4Inner2">{LostActionsAsArray[1].affinity.EN}</div>
        </div>
    </div>
</div>];
console.log(LostActionsAsArray[0].img)
export default LostActionInformation;