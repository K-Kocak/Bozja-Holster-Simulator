// Divs that display when an action is hovered on is created here
import React from 'react';
import LostActions from '@backend/lostactions/ActionData';

//import LostActionsNoBorder from '../pictures/LostActions/LostActionsImgInitialise';

import '@css/ui/components/LostActionsDivGen.scss';
import IAction from '@app/backend/interfaces/IAction';

const LostActionsAsArray : IAction[] = [LostActions.Offensive.LostFocus, LostActions.Offensive.LostFontofMagic, LostActions.ItemRelated.DeepEssenceAetherweaver, LostActions.Offensive.LostFlareStar, LostActions.Detrimental.LostSeraphStrike];

//const LostFocusLink = LostActionsAsArray[0].img;


console.log(LostActionsAsArray[0].img)

// test code for building automation for all actions
// this variable is always static, every action has this exact structure
// only thing that differs is what the literal values of the action is
// double check: every lost action has the exact same structure for this first section
// all that would need to be changed is what the LostActionsAsArray number is
function AutomateSectionOneVar(LostAction: IAction) : React.JSX.Element {
return <div className="LostActionSectionOne">
    
    <div className="LostActionImage">
        <img src={LostAction.img}></img>
    </div>

    <div className="LostActionNameTypeRangeRadius">
        <div className="LostActionName">
            <span className="ActionName">{LostAction.name.EN}</span>
        </div>
        
        <div className="LostActionTypeRangeRadius">
            
            <div className="LostActionType">
                <span className="ActionType">{LostAction.skillType.EN}</span>
            </div>

            <div className="LostActionRangeRadius">

                <div className="LostActionRange">
                    <span>Range </span> 
                    {LostAction.range}
                </div>

                <div className="LostActionRadius">
                    <span>Radius </span> 
                    {LostAction.radius}
                </div>
            </div>
        </div>            
    </div>
</div>
}

// first div - cast part
// second div - recast part
// final div - available part

// tie the inner part of the second div to a variable
// check if the recast parameter exists, and if it does, create the variable and use it when building the overall div
// same thing with final div.
// second check: for "available", lost flare star and lost seraph strike use "MP Cost" instead of "available"
// actions with no "available" parameter need to have that entire div not appear at all
// some actions (namely items) dont have a "recast" part either, so that needs to be gone too sometimes.
// "Cast" is present in all actions, this is static
// we will need an if condition for "recast", if it exists then we present the information as established below, else, we will just have the basic div but its contents will be empty.
// for available, we will need an if condition to check if our action has an available defined. same idea as "recast". we will however need to perform an additional check if the action is flare star or seraph strike, where the text must say "MP Cost" instead of "available".
function AutomateSectionTwoVar(LostAction: IAction) : React.JSX.Element { 
return <div className="LostActionSectionTwo">

    <div className="LostActionCastInfo">
        <div className="LostActionCastRecastAvailable"><span className="LostActionCastRecastAvailableText">Cast</span></div>
        <div className="LostActionCastRecastAvailable"><p className="LostActionParameterData">{LostActionsAsArray[0].cast}</p></div>
        <div className="LostActionFancyGraphicCast"></div>
    </div>    
    {CreateLostActionSectionTwoRecast(LostAction)}
    {CreateLostActionSectionTwoAvailable(LostAction)}
</div>
}

function CreateLostActionSectionTwoRecast(LostAction : IAction) : React.JSX.Element {
    if('recast' in LostAction) {
        return (<div className="LostActionRecastInfo">
                    <div className="LostActionCastRecastAvailable">
                        <span className="LostActionCastRecastAvailableText RecastText">Recast</span>
                    </div>
                    <div className="LostActionCastRecastAvailable">
                        <p className="LostActionParameterData">{LostAction.recast}</p>
                    </div>
                    <div className="LostActionFancyGraphicRecast"></div>
                </div>)
    } else return <div className="LostActionRecastInfo"></div>
}

function CreateLostActionSectionTwoAvailable(LostAction: IAction) : React.JSX.Element {
    if('available' in LostAction) {   
        const IsMPCostAction = (LostAction.name.EN == "Lost Flare Star" || LostAction.name.EN == "Lost Seraph Strike") ? true : false;
        return (<div className="LostActionAvailableInfo">
                    <div>
                        <span className="LostActionCastRecastAvailableText">{IsMPCostAction ? "MP Cost" : "Available"}</span>
                    </div>
                    <div className="LostActionCastRecastAvailable">
                        <p className="LostActionParameterData">{LostAction.available}</p>
                    </div>
                    <div className="LostActionFancyGraphicAvailable"></div>
                </div>)
    } else return <div className="LostActionAvailableInfo"></div>
}

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

// static, description just always goes here
function AutomateSectionThreeVar(LostAction: IAction) : React.JSX.Element {
    return <div className="LostActionSectionThree">
        {LostAction.description.EN}
        </div>
}

// also static
function AutomateSectionFourVar(LostAction: IAction) : React.JSX.Element {
return <div className="LostActionSectionFour">
    <div className="LostActionAffinity">
        <span>Affinity</span>
    </div>
    <div className="LostActionJobs">
        <span>{LostAction.affinity.EN}</span>
    </div>
</div>
}

export function CreateLostActionInformationBoxes(LostActionInformationBoxesStorage : IAction[]) : React.JSX.Element[] {
    const CreatedLostActionInformationBoxes : React.JSX.Element[] = [];
    LostActionInformationBoxesStorage.forEach((LostAction) => {
        CreatedLostActionInformationBoxes.push(CreateLostActionBox(LostAction));
    });
    return CreatedLostActionInformationBoxes;
}

function CreateLostActionBox(LostAction: IAction) : React.JSX.Element {
return <div className="LostActionDetailedInfoBox">
    <div className="LostActionInnerDetailedInfoBox">
        {AutomateSectionOneVar(LostAction)}
        {AutomateSectionTwoVar(LostAction)}
        {AutomateSeparator}
        {AutomateSectionThreeVar(LostAction)}
        {AutomateSectionFourVar(LostAction)}
    </div>
</div>
}

export default CreateLostActionInformationBoxes;
//const LostActionInformationBoxesToExport : React.JSX.Element[] = [];
//CreateLostActionInformationBoxes(LostActionInformationBoxesToExport);
//export default LostActionInformationBoxesToExport;