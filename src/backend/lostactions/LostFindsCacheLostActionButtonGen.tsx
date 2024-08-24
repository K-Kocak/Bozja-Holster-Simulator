import React from 'react';

import LostActions from '@backend/lostactions/ActionData';
import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

import '@css/ui/components/LostFindsCacheLostActionButtonGen.scss';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

function ToggleLostActionInformation(event: any) : void {
    console.log(event);
    event.target.nextSibling.classList.toggle('hidden');
}

export const TestButtonCode : React.JSX.Element =
<div className="LostActionOffensive">
    <div  className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFocus.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFocus.id]}</div>
    </div>
    
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFontofMagic.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFontofMagic.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFontofPower.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFontofPower.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostSlash.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostSlash.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostDeath.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostDeath.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofNobleEnds.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofNobleEnds.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofHonoredSacrifice.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofHonoredSacrifice.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofHonedAcuity.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofHonedAcuity.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFairTrade.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFairTrade.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFlareStar.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFlareStar.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostChainspell.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostChainspell.id]}</div>
    </div>
    <div className="LostCacheLostActionButton">
        <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostAssassination.imgBorder}></img>
        <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostAssassination.id]}</div>
    </div>
</div> 
export default TestButtonCode;