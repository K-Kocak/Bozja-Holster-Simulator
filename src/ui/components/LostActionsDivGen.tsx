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
                    <p className="TestingActionName">{LostActionsAsArray[0].name.EN}</p>
                </div>
                
                <div className="Testing1Inner2-2">
                    <div className="Testing1Inner2-2-1">
                        <p className="TestingActionCat">{LostActionsAsArray[1].skillType.EN}</p>
                    </div>

                    <div className="Testing1Inner2-2-2">
                        <div className="TestingActionRange"><span>Range</span> {LostActionsAsArray[0].range}</div>

                        <div className="TestingActionRadius"><span>Radius</span> {LostActionsAsArray[0].radius}</div>
                    </div>
                </div>            
            </div>
        </div>

        <div className="Testing2">
            <div className="Testing2Inner1">
            
                <div className="TestingTextDiv"><p className="TestingText">Cast</p></div>
                <div className="TestingTextDiv"><p className="TestingText2">{LostActionsAsArray[0].cast}</p></div>
                <div className="TestCastOverlayL"></div>
            </div>
            <div className="Testing2Inner2">
                <div className="TestingTextDiv">
                    <p className="TestingText Middle">Recast</p>
                </div>
                <div className="TestingTextDiv">
                    <p className="TestingText2">{LostActionsAsArray[0].recast}</p>
                    </div>
                <div className="TestCastOverlay"></div>
            </div>
            <div className="Testing2Inner3">
                <div className="TestingTextDiv">
                    <p className="TestingText Last">Available</p>
                </div>
                <div className="TestingTextDiv">
                    <p className="TestingText2">{LostActionsAsArray[0].available}</p>
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

// test code for building automation for all actions
// this variable is always static, every action has this exact structure
// only thing that differs is what the literal values of the action is
const AutomateSectionOneVar : React.JSX.Element = 
<div className="LostActionSectionOne">
    
    <div className="LostActionImage">
        <img src={LostActionsAsArray[0].img}></img>
    </div>

    <div className="LostActionNameTypeRangeRadius">
        <div className="LostActionName">
            <span className="ActionName">{LostActionsAsArray[0].name.EN}</span>
        </div>
        
        <div className="LostActionTypeRangeRadius">
            
            <div className="LostActionType">
                <span className="ActionType">{LostActionsAsArray[1].skillType.EN}</span>
            </div>

            <div className="LostActionRangeRadius">

                <div className="LostActionRange">
                    <span>Range </span> 
                    {LostActionsAsArray[0].range}
                </div>

                <div className="LostActionRadius">
                    <span>Radius </span> 
                    {LostActionsAsArray[0].radius}
                </div>
            </div>
        </div>            
    </div>
</div>

// first div - cast part
// second div - recast part
// final div - available part

// tie the inner part of the second div to a variable
// check if the recast parameter exists, and if it does, create the variable and use it when building the overall div
// same thing with final div.
const AutomateSectionTwoVar : React.JSX.Element = 
<div className="LostActionSectionTwo">

    <div className="LostActionCastInfo">
        <div className="LostActionCastRecastAvailable"><span className="LostActionCastRecastAvailableText">Cast</span></div>
        <div className="LostActionCastRecastAvailable"><p className="LostActionParameterData">{LostActionsAsArray[0].cast}</p></div>
        <div className="LostActionFancyGraphicCast"></div>
    </div>

    <div className="LostActionRecastInfo">
        <div className="LostActionCastRecastAvailable">
            <span className="LostActionCastRecastAvailableText RecastText">Recast</span>
        </div>
        <div className="LostActionCastRecastAvailable">
            <p className="LostActionParameterData">{LostActionsAsArray[0].recast}</p>
            </div>
        <div className="LostActionFancyGraphicRecast"></div>
    </div>

    <div className="LostActionAvailableInfo">
        <div>
            <span className="LostActionCastRecastAvailableText">Available</span>
        </div>
        <div className="LostActionCastRecastAvailable">
            <p className="LostActionParameterData">{LostActionsAsArray[0].available}</p>
        </div>
        <div className="LostActionFancyGraphicAvailable"></div>
    </div>

</div>

// Separator line in the lost action info.
// this is static for all actions
const AutomateSeparator : React.JSX.Element = 
<div className="LostActionSeparatorSegment">
    <div className="LostActionSeparatorSegmentLeftEnd"></div>
        <div className="LostActionSeparatorSegmentCenter">
            <div className="LostActionSeparatorSegmentCenterUpper"></div>
            <div className="LostActionSeparatorSegmentCenterMiddle"></div>
            <div className="LostActionSeparatorSegmentCenterLower"></div> 
        </div>
    <div className="LostActionSeparatorSegmentRightEnd"></div>
</div>

const AutomateSectionThreeVar : React.JSX.Element =
<div className="LostActionSectionThree">
    {LostActionsAsArray[0].description.EN}
</div>

const AutomateSectionFourVar : React.JSX.Element =
<div className="LostActionSectionFour">
    <div className="LostActionAffinity">
        <span>Affinity</span>
    </div>
    <div className="LostActionJobs">
        <span>{LostActionsAsArray[0].affinity.EN}</span>
    </div>
</div>

export const AutomateActionBoxTestCode : React.JSX.Element = 
<div className="LostActionDetailedInfoBox">
    <div className="LostActionInnerDetailedInfoBox">
        {AutomateSectionOneVar}
        {AutomateSectionTwoVar}
        {AutomateSeparator}
        {AutomateSectionThreeVar}
        {AutomateSectionFourVar}
    </div>
</div>;

export default LostActionInformation;