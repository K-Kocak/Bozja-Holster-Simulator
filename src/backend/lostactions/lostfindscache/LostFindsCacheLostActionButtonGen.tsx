import React, { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import IAction from '@backend/interfaces/IAction';
import LostActions from '@backend/lostactions/actiondata/ActionData';

import { addActionToHolster, increaseCurrentWeight, incrementActionQuantity, setSelectedWeight } from '@backend/lostactions/LostFindsHolsterSlice';


import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import CreateLostActionInformationBoxes from '@app/backend/lostactions/lostfindscache/LostActionsDivGen';

import '@css/ui/components/LostFindsCache/LostFindsCacheLostActionButtonGen.scss';

const lostActionInformationBoxes : React.JSX.Element[] = CreateLostActionInformationBoxes(LostActionsAsObjectArray);

/**
 * Creates and returns a JSX Element containing a lost action's button and its information
 * @param lostAction, the lost action to create a button for in the lost cache
 * @returns JSX.Element containing the button and the lost action's information
 */
export const CreateLostCacheLostActionButton = (lostAction: IAction) => {
    const dispatch = useAppDispatch();
    
    const lostFindsHolster = useAppSelector((state) => state.LostFindsHolster);

    /**
     * Adds a lost action to the lost finds holster state while increasing the total weight of the holster
     * @param event, the lost action that was clicked in the lost cache
     * @returns A lost action being added to the lost finds holster
     */
    function HandleButtonClick(event : BaseSyntheticEvent) {
        const idOfAction : number = event.target.id;

        if(lostFindsHolster.CurrentWeight + LostActionsAsObjectArray[idOfAction].weight > 200) {
            return;
        }

        if(!lostFindsHolster.Holster[idOfAction]) 
        {
            dispatch(addActionToHolster(idOfAction));
        }

        dispatch(increaseCurrentWeight(LostActionsAsObjectArray[idOfAction].weight));      
        dispatch(incrementActionQuantity(idOfAction));
    }

    /**
     * Displays information for a lost action that was hovered over in the lost finds cache
     * @param event, the lost action button that was hovered over
     */
    function ToggleLostActionInformation(event: BaseSyntheticEvent) {
        const minimumLostActionInformationClassListLength = 1;
        event.target.nextSibling.nextSibling.classList.length > minimumLostActionInformationClassListLength ? 
            dispatch(setSelectedWeight(LostActionsAsObjectArray[event.target.id].weight)) : dispatch(setSelectedWeight(0))

        event.target.nextSibling.nextSibling.classList.toggle('hidden');
    }

    let lostActionInformationHoverDiv : JSX.Element = <></>;

    if(lostAction.id != LostActions.ItemRelated.ResistanceElixir.id && !lostAction.name.EN.includes("Pure")) {
        lostActionInformationHoverDiv = <div className="LostActionInformationHover hidden">{lostActionInformationBoxes[lostAction.id]}</div>
    }
    else if(lostAction.id == LostActions.ItemRelated.ResistanceElixir.id) {
        lostActionInformationHoverDiv = <div style={{marginLeft: "55px", marginTop: "-100px"}} className="LostActionInformationHover hidden">{lostActionInformationBoxes[lostAction.id]}</div>
    }
    else {
        lostActionInformationHoverDiv = <div style={{marginLeft: "55px", marginTop: "-100px"}} className="LostActionInformationHover hidden">{lostActionInformationBoxes[lostAction.id]}</div>
    }


    const styleChoice = lostAction.fragment.includes(useAppSelector((state) => state.ForgottenFragmentInfo.idOfFragmentHovered)) ? {filter: "brightness(1.3) drop-shadow(0px 0px 10px white)"} : {};
   
    return <div key={lostAction.id} id={lostAction.id.toString()} onClick={HandleButtonClick} className="LostCacheLostActionButton">
                <img style={styleChoice} key={lostAction.id} id={lostAction.id.toString()} className="LostActionButtonImage" onMouseEnter={ToggleLostActionInformation} onMouseLeave={ToggleLostActionInformation} src={lostAction.category.EN == "Item-Related" ? lostAction.img : lostAction.imgBorder}></img>
                <div className="LostActionButtonWeight">{lostAction.weight}</div>
            {lostActionInformationHoverDiv}
        </div>;
}

/**
 * Creates lost action buttons for the lost finds cache
 * @param LostActionsAsObjectArray, the lost actions to create the buttons from
 * @returns JSX.Element containing the lost action buttons
 */
export const CreateLostCacheLostActionButtons = (LostActionsAsObjectArray: IAction[]) : React.JSX.Element => {
    const lostActionButtonsByCategory : React.JSX.Element[][] = CreateLostActionButtonsByCategory(LostActionsAsObjectArray);

    return <div className="LostCacheLostActionButtons">
        <div className="LostActionOffensive">
            {lostActionButtonsByCategory[0]}
        </div> 
        <div className="LostActionDefensive">
            {lostActionButtonsByCategory[1]}
        </div> 
        <div className="LostActionRestorative">
            {lostActionButtonsByCategory[2]}
        </div> 
        <div className="LostActionBeneficial">
            {lostActionButtonsByCategory[3]}
        </div> 
        <div className="LostActionTactical">
            {lostActionButtonsByCategory[4]}
        </div> 
        <div className="LostActionDetrimental">
            {lostActionButtonsByCategory[5]}
        </div> 
        <div className="LostActionItemRelated">
            {lostActionButtonsByCategory[6]}
        </div> 
    </div>
}

/**
 * Creates and returns lost action buttons for given lost actions
 * @param LostActionsAsObjectArray, the lost actions to turn into buttons
 * @returns JSX.Element 2D Array containing the lost action buttons split by category
 */
export const CreateLostActionButtonsByCategory = (LostActionsAsObjectArray: IAction[]) : React.JSX.Element[][] => {

    const lostActionButtonArrayActions : React.JSX.Element[][] = [];
    for(let i = 0; i < 7; i++) {
        lostActionButtonArrayActions.push([]);
    }

    LostActionsAsObjectArray.forEach((lostAction) => {
        const lostActionButton : React.JSX.Element = CreateLostCacheLostActionButton(lostAction);
        PlaceLostActionElementTo2DArray(lostActionButtonArrayActions, lostActionButton, lostAction.id, lostAction.category.EN);
    })
    
    return lostActionButtonArrayActions;
}

/**
 * Helper function for sorting a lost action into its category within a 2D array.
 * @param array2D, the 2D array being added to
 * @param element, the JSX.Element to add
 * @param idOfLostAction, the id of the lost action to add
 * @param categoryOfLostAction, the category of the lost action to add
 * @returns edited 2D array now containing the JSX.Element for the lost action in its category
 * 
 * Will probably get moved to a separate helper file
 */
export function PlaceLostActionElementTo2DArray(array2D : React.JSX.Element[][], element: JSX.Element, idOfLostAction: number, categoryOfLostAction: "Offensive" | "Defensive" | "Restorative" | "Beneficial" | "Tactical" | "Detrimental" | "Item-Related") {
    if(array2D.length != 7 || element == <></> || idOfLostAction == -1) {
        return;
    }
    switch (categoryOfLostAction) {
        case "Offensive": {
            array2D[0][idOfLostAction] = element;
            break;
        }
        case "Defensive": {
            array2D[1][idOfLostAction] = element;
            break;
        }
        case "Restorative": {
            array2D[2][idOfLostAction] = element;
            break;
        }
        case "Beneficial": {
            array2D[3][idOfLostAction] = element;
            break;
        }
        case "Tactical": {
            array2D[4][idOfLostAction] = element;
            break;
        }
        case "Detrimental": {
            array2D[5][idOfLostAction] = element;
            break;
        }
        case "Item-Related": {
            array2D[6][idOfLostAction] = element;
            break;
        }
    }
}

export default CreateLostCacheLostActionButtons;