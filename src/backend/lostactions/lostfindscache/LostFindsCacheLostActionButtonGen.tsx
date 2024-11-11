import React, { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import IAction from '@backend/interfaces/IAction';
import LostActions from '@backend/lostactions/actiondata/ActionData';

import { addActionToHolster, increaseCurrentWeight, incrementActionQuantity, setSelectedWeight } from '@backend/lostactions/LostFindsHolsterSlice';


import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import CreateLostActionInformationBoxes from '@app/backend/lostactions/lostfindscache/LostActionsDivGen';

import '@css/ui/components/LostFindsCache/LostFindsCacheLostActionButtonGen.scss';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

const minimumLostActionInformationClassListLength = 1;

export const CreateLostCacheLostActionButton = (LostAction: IAction) => {
    const dispatch = useAppDispatch();
    
    const holster = useAppSelector((state) => state.LostFindsHolster.Holster);
    const currentWeight = useAppSelector((state) => state.LostFindsHolster.CurrentWeight);
    function HandleButtonClick(event : BaseSyntheticEvent) {
        const idOfAction : number = event.target.id;
        if(currentWeight + LostActionsAsObjectArray[idOfAction].weight > 200) {
            return;
        }
        if(!holster[idOfAction]) 
        {
            dispatch(addActionToHolster(idOfAction));
        }
        dispatch(increaseCurrentWeight(LostActionsAsObjectArray[idOfAction].weight));      
        dispatch(incrementActionQuantity(idOfAction));
        console.log(holster);
    }

    const ToggleLostActionInformation = (event: BaseSyntheticEvent) => {
        event.target.nextSibling.nextSibling.classList.length > minimumLostActionInformationClassListLength ? 
            dispatch(setSelectedWeight(LostActionsAsObjectArray[event.target.id].weight)) : dispatch(setSelectedWeight(0))

        console.log(event.target.nextSibling.nextSibling.classList);
        console.log(event);
        event.target.nextSibling.nextSibling.classList.toggle('hidden');
    }

    let LostActionInformationHoverDiv : JSX.Element = <></>;

    if(LostAction.id != LostActions.ItemRelated.ResistanceElixir.id && !LostAction.name.EN.includes("Pure")) {
        LostActionInformationHoverDiv = <div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div>
    }
    else if(LostAction.id == LostActions.ItemRelated.ResistanceElixir.id) {
        LostActionInformationHoverDiv = <div style={{marginLeft: "55px", marginTop: "-100px"}} className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div>
    }
    else {
        LostActionInformationHoverDiv = <div style={{marginLeft: "55px", marginTop: "-100px"}} className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div>
    }
    //const LostActionInformationHoverDiv = LostAction.id != LostActions.ItemRelated.ResistanceElixir.id ? 
    //<div className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div> 
    //:
    //<div style={{marginLeft: "75px", marginTop: "-100px"}}className="LostActionInformationHover hidden">{LostActionInformationBoxes[LostAction.id]}</div>;


    const styleChoice = LostAction.fragment.includes(useAppSelector((state) => state.ForgottenFragmentInfo.idOfFragmentHovered)) ? {filter: "brightness(1.3) drop-shadow(0px 0px 10px white)"} : {};

   
    return <div key={LostAction.id} id={LostAction.id.toString()} onClick={HandleButtonClick} className="LostCacheLostActionButton">
                
                <img style={styleChoice} key={LostAction.id} id={LostAction.id.toString()} className="LostActionButtonImage" onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
                <div className="LostActionButtonWeight">{LostAction.weight}</div>
            {LostActionInformationHoverDiv}
        </div>;
}

// Creates all the HTML for the lost action buttons inside the lost cache
export const CreateLostCacheLostActionButtons = (LostActionsAsObjectArray: IAction[]) : React.JSX.Element => {
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

export const CreateLostActionButtonsByCategory = (LostActionsAsObjectArray: IAction[]) : React.JSX.Element[][] => {
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

export default CreateLostCacheLostActionButtons;