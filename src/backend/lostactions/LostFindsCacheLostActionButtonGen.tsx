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
<div className="LostCacheLostActionButtons">
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

    <div className="LostActionDefensive">
        <div  className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
    </div>

    <div className="LostActionDefensive">
        <div  className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.BannerofSolemnClarity.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.BannerofSolemnClarity.id]}</div>
            </div>
            
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCure.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCure.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureII.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureII.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureIII.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureIII.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureIV.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureIV.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostArise.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostArise.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostSacrifice.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostSacrifice.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostReraise.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostReraise.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostFullCure.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostFullCure.id]}

            </div>
        </div>
    </div>

    <div className="LostActionDefensive">
        <div  className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostSpellforge.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostSpellforge.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostSteelsting.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostSteelsting.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostProtect.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostProtect.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostShell.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostShell.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostReflect.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostReflect.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostStoneskin.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostStoneskin.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostBravery.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostBravery.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostAethershield.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostAethershield.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostDervish.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostDervish.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostStoneskinII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostStoneskinII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostProtectII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostProtectII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostShellII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostShellII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostBubble.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostBubble.id]}</div>       
        </div>
    </div>
</div>
export default TestButtonCode;