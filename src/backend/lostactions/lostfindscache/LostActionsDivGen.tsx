// Divs that display when an action is hovered on is created here
import React from 'react';

import IAction from '@app/backend/interfaces/IAction';

import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';

/**
 * Creates and returns jsx.element info for a lost action, namely its image, type of action, range and radius, and name
 * @param lostAction, the lost action to create the jsx.element for
 * @returns jsx element
 */
function CreateLostActionInfoImageTypeRangeRadiusName(lostAction: IAction) : React.JSX.Element {
return <div className="LostActionSectionOne">
    
    <div className="LostActionImage">
        <img src={lostAction.img}></img>
    </div>

    <div className="LostActionNameTypeRangeRadius">
        <div className="LostActionName">
            <span className="ActionName">{lostAction.name.EN}</span>
        </div>
        
        <div className="LostActionTypeRangeRadius">
            
            <div className="LostActionType">
                <span className="ActionType">{lostAction.skillType.EN}</span>
            </div>

            <div className="LostActionRangeRadius">

                <div className="LostActionRange">
                    <span>Range </span> 
                    {lostAction.range}
                </div>

                <div className="LostActionRadius">
                    <span>Radius </span> 
                    {lostAction.radius}
                </div>
            </div>
        </div>            
    </div>
</div>
}

/**
 * 
 * @param lostAction 
 * @returns 
 */
function CreateLostActionCastInfo(lostAction: IAction) : React.JSX.Element { 
return <div className="LostActionSectionTwo">

    <div className="LostActionCastInfo">
        <div className="LostActionCastRecastAvailable"><span className="LostActionCastRecastAvailableText">Cast</span></div>
        <div className="LostActionCastRecastAvailable"><p className="LostActionParameterData">{lostAction.cast}</p></div>
        <div className="LostActionFancyGraphicCast"></div>
    </div>    
    {CreateLostActionSectionTwoRecast(lostAction)}
    {CreateLostActionSectionTwoAvailable(lostAction)}
</div>
}

/**
 * 
 * @param LostAction 
 * @returns 
 */
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

/**
 * 
 * @param LostAction 
 * @returns 
 */
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

/**
 * Creates the separator graphic.
 * It is made up of 3 horizontal lines with slightly differing colours.
 * Left and right ends are rounded out to create the bar
 * @returns separator component
 */
export function AutomateSeparator() : React.JSX.Element { 
return <div className="LostActionSeparatorSegment">
    <div className="LostActionSeparatorSegmentLeftEnd"></div>
        <div className="LostActionSeparatorSegmentCenter">
            <div className="LostActionSeparatorSegmentCenterUpper"></div>
            <div className="LostActionSeparatorSegmentCenterMiddle"></div>
            <div className="LostActionSeparatorSegmentCenterLower"></div> 
        </div>
    <div className="LostActionSeparatorSegmentRightEnd"></div>
</div>
}

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

function AutomateSectionFiveVar(LostAction: IAction) : React.JSX.Element {
    const FragmentDiv : React.JSX.Element[] = [];
    LostAction.fragment.forEach((fragmentID) => {
        FragmentDiv.push(<div key={fragmentID}className="LostActionForgottenFragment">
            <div className="LostActionForgottenFragmentImg">
                <img src={ForgottenFragmentsAsObjectArray[fragmentID].img}></img>
            </div>
            <div className="LostActionForgottenFragmentName">
                <span>{ForgottenFragmentsAsObjectArray[fragmentID].name}</span>
            </div>
        </div>)
    })
    return <div className="LostActionSectionFive">
        {FragmentDiv}
    </div>;
}

export function CreateLostActionInformationBoxes(lostActions : IAction[]) : React.JSX.Element[] {
    const createdLostActionInformationBoxes : React.JSX.Element[] = [];
    console.log("test");
    lostActions.forEach((lostAction: IAction) => {
        createdLostActionInformationBoxes[lostAction.id] = CreateLostActionBox(lostAction);
    });
    return createdLostActionInformationBoxes;
}

function CreateLostActionBox(lostAction: IAction) : React.JSX.Element {
return <div className="LostActionDetailedInfoBox">
        <div className="LostActionInnerDetailedInfoBox">
            {CreateLostActionInfoImageTypeRangeRadiusName(lostAction)}
            {CreateLostActionCastInfo(lostAction)}
            {AutomateSeparator()}
            {AutomateSectionThreeVar(lostAction)}
            {AutomateSectionFourVar(lostAction)}
            {AutomateSeparator()}
            {AutomateSectionFiveVar(lostAction)}
        </div>
    </div>
}

export default CreateLostActionInformationBoxes;
