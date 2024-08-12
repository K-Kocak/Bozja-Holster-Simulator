// Divs that display when an action is hovered on is created here

import React from 'react'

import LostActions from '@backend/lostactions/ActionData';

//import LostActionsNoBorder from '../pictures/LostActions/LostActionsImgInitialise';

import '@css/ui/components/LostActionsDivGen.scss';

const LostActionsAsArray = [LostActions.Offensive.LostFocus, LostActions.Offensive.LostFontofMagic, LostActions.ItemRelated.DeepEssenceAetherweaver];

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
                <img src={LostActionsAsArray[0].img}></img>          
            </div>

            <div className="Testing1Inner2">
                <div className="Testing1Inner2-1">
                    <p className="TestingActionName">{LostActionsAsArray[2].name.EN}</p>
                </div>
                
                <div className="Testing1Inner2-2">
                    <div className="Testing1Inner2-2-1">
                        <p className="TestingActionCat">{LostActionsAsArray[1].skillType.EN}</p>
                    </div>

                    <div className="Testing1Inner2-2-2">
                        <div className="TestingActionRange"><span>Range</span> {LostActionsAsArray[1].range}</div>

                        <div className="TestingActionRadius"><span>Radius</span> {LostActionsAsArray[1].radius}</div>
                    </div>
                </div>            
            </div>
        </div>

        <div className="Testing2">
            <div className="Testing2Inner1">
            
                <div className="TestingTextDiv"><p className="TestingText">Cast</p></div>
                <div className="TestingTextDiv"><p className="TestingText2">{LostActionsAsArray[1].cast}</p></div>
                <div className="TestCastOverlayL"></div>
            </div>
            <div className="Testing2Inner2">
                <div className="TestingTextDiv">
                    <p className="TestingText">Recast</p>
                </div>
                <div className="TestingTextDiv">
                    <p className="TestingText2">{LostActionsAsArray[1].recast}</p>
                    </div>
                <div className="TestCastOverlay"></div>
            </div>
            <div className="Testing2Inner3">
                <div className="TestingTextDiv">
                    <p className="TestingText">Available</p>
                </div>
                <div className="TestingTextDiv">
                    <p className="TestingText2">{LostActionsAsArray[1].available}</p>
                </div>
                <div className="TestCastOverlayR"></div>
            </div>
        </div>
        <div className="SeparatorDiv">
            <div className="LeftSep"></div>
            <div className="MiddleSection">
                <div className="TestingUpperSeparator"></div>
                <div className="TestingSeparator"></div>
                <div className="TestingLowerSeparator"></div> 
            </div>
            <div className="RightSep"></div>
            
        </div>
        <div className="Testing3">
            {LostActionsAsArray[0].description.EN}
        </div>

        <div className="Testing4">
            <div className="Testing4Inner1">
                <span>Affinity</span>
            </div>
            <div className="Testing4Inner2">
                <span>{LostActionsAsArray[0].affinity.EN}</span>
            </div>
        </div>
    </div>
</div>];
console.log(LostActionsAsArray[0].img)
export default LostActionInformation;