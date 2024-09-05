import React, { BaseSyntheticEvent } from 'react';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';
import IAction from '@backend/interfaces/IAction';

import CreateLostActionInformationBoxes from '@backend/lostactions/LostActionsDivGen';

import '@css/ui/components/LostFindsCacheLostActionButtonGen.scss';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addActionToHolster, increaseCurrentWeight, incrementActionQuantity, setSelectedWeight } from './LostFindsHolsterSlice';

const LostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

const minimumLostActionInformationClassListLength = 1;

// toggles visibility of lost action info

//{dispatch(addActionToHolster(LostAction.id)); dispatch(increaseCurrentWeight(LostAction.weight)); dispatch(incrementActionQuantity(LostAction.id))}

// Creates a button which when hovered over, displays information on it
const CreateLostCacheLostActionButton = (LostAction: IAction) => {
    const dispatch = useAppDispatch();
    const holster = useAppSelector((state) => state.LostFindsHolster.Holster);
    function HandleButtonClick(event : BaseSyntheticEvent) {
        const idOfAction : number = event.target.id;
        if(!holster[idOfAction]) 
        {
            dispatch(addActionToHolster(idOfAction));
        }
        dispatch(increaseCurrentWeight(LostActionsAsObjectArray[idOfAction].weight));      
        dispatch(incrementActionQuantity(idOfAction));
        console.log(holster);
    }

    const ToggleLostActionInformation = (event: BaseSyntheticEvent) => {
        event.target.nextSibling.classList.length > minimumLostActionInformationClassListLength ? 
            dispatch(setSelectedWeight(LostActionsAsObjectArray[event.target.id].weight)) : dispatch(setSelectedWeight(0))

        console.log(event.target.nextSibling.classList);
        console.log(event);
        event.target.nextSibling.classList.toggle('hidden');
    }

    return <div key={LostAction.id} id={LostAction.id.toString()} onClick={HandleButtonClick} className="LostCacheLostActionButton">
            <img key={LostAction.id} id={LostAction.id.toString()} className="LostActionButtonImage" onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
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

export default CreateLostCacheLostActionButtons;