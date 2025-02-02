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
 * Creates and returns the cast, recast and available data in a jsx.element for a lost action
 * @param lostAction, the lost action to create the cast info for
 * @returns jsx.element containing the cast, recast and available data
 */
function CreateLostActionInfoCast(lostAction: IAction) : React.JSX.Element { 
return <div className="LostActionSectionTwo">

    <div className="LostActionCastInfo">
        <div className="LostActionCastRecastAvailable"><span className="LostActionCastRecastAvailableText">Cast</span></div>
        <div className="LostActionCastRecastAvailable"><p className="LostActionParameterData">{lostAction.cast}</p></div>
        <div className="LostActionFancyGraphicCast"></div>
    </div>    
    {CreateLostActionInfoRecast(lostAction)}
    {CreateLostActionInfoAvailable(lostAction)}
</div>
}

/**
 * Creates and returns recast jsx.element for a lost action if recast data is present
 * @param lostAction, the lost action to create the recast for
 * @returns jsx.element containing recast info for an action
 */
function CreateLostActionInfoRecast(lostAction : IAction) : React.JSX.Element {
    if('recast' in lostAction) {
        return (<div className="LostActionRecastInfo">
                    <div className="LostActionCastRecastAvailable">
                        <span className="LostActionCastRecastAvailableText RecastText">Recast</span>
                    </div>
                    <div className="LostActionCastRecastAvailable">
                        <p className="LostActionParameterData">{lostAction.recast}</p>
                    </div>
                    <div className="LostActionFancyGraphicRecast"></div>
                </div>)
    } else return <div className="LostActionRecastInfo"></div>
}

/**
 * Creates and returns jsx.element for a lost action for its 'available' data
 * @param lostAction, the lost action to create the available jsx.element for
 * @returns jsx.element for a lost action's available info
 */
function CreateLostActionInfoAvailable(lostAction: IAction) : React.JSX.Element {
    if('available' in lostAction) {   
        const IsMPCostAction = (lostAction.name.EN == "Lost Flare Star" || lostAction.name.EN == "Lost Seraph Strike") ? true : false;
        return (<div className="LostActionAvailableInfo">
                    <div>
                        <span className="LostActionCastRecastAvailableText">{IsMPCostAction ? "MP Cost" : "Available"}</span>
                    </div>
                    <div className="LostActionCastRecastAvailable">
                        <p className="LostActionParameterData">{lostAction.available}</p>
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

/**
 * Creates and returns a jsx.element containing the description of a lost action
 * @param lostAction, the lost action to create the description for
 * @returns jsx.element containing the description of a lost action
 */
function CreateLostActionInfoDescription(lostAction: IAction) : React.JSX.Element {
    return <div className="LostActionSectionThree">
        {lostAction.description.EN}
        </div>
}

/**
 * Creates and returns a jsx.element containing the jobs the lost action can use
 * @param lostAction, the lost action to create the jsx.element for
 * @returns jsx.element containing the list of jobs the lost action can be used by
 */
function CreatLostActionInfoJobAffinity(lostAction: IAction) : React.JSX.Element {
return <div className="LostActionSectionFour">
    <div className="LostActionAffinity">
        <span>Affinity</span>
    </div>
    <div className="LostActionJobs">
        <span>{lostAction.affinity.EN}</span>
    </div>
</div>
}

/**
 * Creates and returns forgotten fragment info that this lost action is acquired from
 * @param lostAction, the lost action to create a forgotten fragment info for
 * @returns jsx.element containing what forgotten fragment and name opens this lost action
 */
function CreateLostActionInfoForgottenFragment(lostAction: IAction) : React.JSX.Element {
    const FragmentDiv : React.JSX.Element[] = [];
    lostAction.fragment.forEach((fragmentID) => {
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

/**
 * Creates and returns the information boxes for lost actions
 * @param lostActions, the list of lost actions to create the information boxes for
 * @returns an array of jsx.elements containing lost action information boxes
 */
export function CreateLostActionInformationBoxes(lostActions : IAction[]) : React.JSX.Element[] {
    const createdLostActionInformationBoxes : React.JSX.Element[] = [];
    lostActions.forEach((lostAction: IAction) => {
        createdLostActionInformationBoxes[lostAction.id] = CreateLostActionBox(lostAction);
    });
    return createdLostActionInformationBoxes;
}


/**
 * Creates and returns a lost action information box for a given lost action
 * @param lostAction, the lost action to create the information box for
 * @returns a lost action information box fora lost action
 */
function CreateLostActionBox(lostAction: IAction) : React.JSX.Element {
return <div className="LostActionDetailedInfoBox">
        <div className="LostActionInnerDetailedInfoBox">
            {CreateLostActionInfoImageTypeRangeRadiusName(lostAction)}
            {CreateLostActionInfoCast(lostAction)}
            {AutomateSeparator()}
            {CreateLostActionInfoDescription(lostAction)}
            {CreatLostActionInfoJobAffinity(lostAction)}
            {AutomateSeparator()}
            {CreateLostActionInfoForgottenFragment(lostAction)}
        </div>
    </div>
}

export default CreateLostActionInformationBoxes;
