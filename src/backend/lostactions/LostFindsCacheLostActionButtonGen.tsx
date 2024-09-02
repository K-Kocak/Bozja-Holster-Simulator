import React, { BaseSyntheticEvent } from 'react';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';
import IAction from '@backend/interfaces/IAction';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

import '@css/ui/components/LostFindsCacheLostActionButtonGen.scss';

import { LostFindsHolsterIncreaseActionQuantityByOne } from '@backend/lostactions/LostFindsHolsterActionBoxGen';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

// toggles visibility of lost action info
function ToggleLostActionInformation(event: BaseSyntheticEvent) : void {
    console.log(event);
    event.target.nextSibling.classList.toggle('hidden');
}


// Creates a button which when hovered over, displays information on it
function CreateLostCacheLostActionButton(LostAction: IAction) : React.JSX.Element {
    return <div key={LostAction.id} onClick={LostFindsHolsterIncreaseActionQuantityByOne} className="LostCacheLostActionButton">
            <img id={LostAction.id.toString()} className="LostActionButtonImage" onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div>
        </div>
}

// Creates all the HTML for the lost action buttons inside the lost cache
export function CreateLostCacheLostActionButtons(LostActionsAsObjectArray: IAction[]) : React.JSX.Element {
    
    const LostActionButtonsByCategory : React.JSX.Element[][] = CreateLostActionButtonsByCategory(LostActionsAsObjectArray);

    return <div className="LostCacheLostActionButtons">
        <div className="LostActionOffensive">
            {LostActionButtonsByCategory[0]}
        </div> 
        <div className="LostActionDefensive">
            {LostActionButtonsByCategory[1]}
        </div> 
        <div className="LostActionRestorative">
            {LostActionButtonsByCategory[2]}
        </div> 
        <div className="LostActionBeneficial">
            {LostActionButtonsByCategory[3]}
        </div> 
        <div className="LostActionTactical">
            {LostActionButtonsByCategory[4]}
        </div> 
        <div className="LostActionDetrimental">
            {LostActionButtonsByCategory[5]}
        </div> 
        <div className="LostActionItemRelated">
            {LostActionButtonsByCategory[6]}
        </div> 
    </div>
}

export function CreateLostActionButtonsByCategory(LostActionsAsObjectArray: IAction[]) : React.JSX.Element[][] {
    const LostActionButtonArrayOffensiveActions : React.JSX.Element[] = [];
    const LostActionButtonArrayDefensiveActions : React.JSX.Element[] = [];
    const LostActionButtonArrayRestorativeActions : React.JSX.Element[] = [];
    const LostActionButtonArrayBeneficialActions : React.JSX.Element[] = [];
    const LostActionButtonArrayTacticalActions : React.JSX.Element[] = [];
    const LostActionButtonArrayDetrimentalActions : React.JSX.Element[] = [];
    const LostActionButtonArrayItemRelatedActions : React.JSX.Element[] = [];

    LostActionsAsObjectArray.forEach((LostAction) => {
        const LostActionButton : React.JSX.Element = CreateLostCacheLostActionButton(LostAction);
        switch (LostAction.category.EN) {
            case "Offensive": {
                LostActionButtonArrayOffensiveActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Defensive": {
                LostActionButtonArrayDefensiveActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Restorative": {
                LostActionButtonArrayRestorativeActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Beneficial": {
                LostActionButtonArrayBeneficialActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Tactical": {
                LostActionButtonArrayTacticalActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Detrimental": {
                LostActionButtonArrayDetrimentalActions[LostAction.id] = LostActionButton;
                break;
            }
            case "Item-Related": {
                LostActionButtonArrayItemRelatedActions[LostAction.id] = LostActionButton;
            }
        }
    })

    return [LostActionButtonArrayOffensiveActions, LostActionButtonArrayDefensiveActions,LostActionButtonArrayRestorativeActions,
        LostActionButtonArrayBeneficialActions, LostActionButtonArrayTacticalActions, LostActionButtonArrayDetrimentalActions,
        LostActionButtonArrayItemRelatedActions]
}

/*
export const TestButtonCode : React.JSX.Element =
<div className="LostCacheLostActionButtons">
    <div className="LostActionOffensive">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFocus.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFocus.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFontofMagic.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFontofMagic.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFontofPower.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFontofPower.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostSlash.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostSlash.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostDeath.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostDeath.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofNobleEnds.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofNobleEnds.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofHonoredSacrifice.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofHonoredSacrifice.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.BannerofHonedAcuity.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.BannerofHonedAcuity.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFairTrade.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFairTrade.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostFlareStar.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostFlareStar.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostChainspell.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostChainspell.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Offensive.LostAssassination.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Offensive.LostAssassination.id]}</div>
        </div>
        
    </div> 

    <div className="LostActionDefensive">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
    </div>

    <div className="LostActionRestorative">
        <div  className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.BannerofSolemnClarity.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.BannerofSolemnClarity.id]}</div>
            </div>
            
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCure.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCure.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureII.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureII.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureIII.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureIII.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostCureIV.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostCureIV.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostArise.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostArise.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostSacrifice.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostSacrifice.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostReraise.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostReraise.id]}</div>
            </div>
            <div className="LostCacheLostActionButton">
                <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Restorative.LostFullCure.imgBorder}></img>
                <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Restorative.LostFullCure.id]}

            </div>
        </div>
    </div>

    <div className="LostActionBeneficial">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostSpellforge.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostSpellforge.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostSteelsting.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostSteelsting.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostProtect.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostProtect.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostShell.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostShell.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostReflect.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostReflect.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostStoneskin.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostStoneskin.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostBravery.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostBravery.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostAethershield.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostAethershield.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostDervish.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostDervish.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostStoneskinII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostStoneskinII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostProtectII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostProtectII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostShellII.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostShellII.id]}</div>       
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Beneficial.LostBubble.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Beneficial.LostBubble.id]}</div>       
        </div>
    </div>

    <div className="LostActionTactical">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
    </div>

    <div className="LostActionDetrimental">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>   
    </div>

    <div className="LostActionItemRelated">
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div  className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofTirelessConviction.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofTirelessConviction.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.BannerofFirmResolve.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.BannerofFirmResolve.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostIncense.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostIncense.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostExcellence.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostExcellence.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.Defensive.LostBloodRage.imgBorder}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.Defensive.LostBloodRage.id]}</div>
        </div>
        <div className="LostCacheLostActionButton">
            <img className="LostActionButtonImage"  onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostActions.ItemRelated.ResistanceElixir.img}></img>
            <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostActions.ItemRelated.ResistanceElixir.id]}</div>
        </div>
    </div>
</div>
*/

export default CreateLostCacheLostActionButtons;