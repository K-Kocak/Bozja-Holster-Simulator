import React from 'react';

import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import { PlaceLostActionElementTo2DArray } from '@backend/lostactions/lostfindscache/LostFindsCacheLostActionButtonGen';

import IAction from '@backend/interfaces/IAction';
import { useAppDispatch, useAppSelector } from '@backend/hooks';
import { decreaseCurrentWeight, decrementActionQuantity, removeActionFromHolster } from '@backend/lostactions/LostFindsHolsterSlice';

/**
 * Creates and returns an Element for a lost action in the lost finds holster
 * @param lostAction, the lost action to create the action box for in the lost finds holster
 * @returns HTML for the lost action box
 */
const CreateLostFindsHolsterActionBox = (lostAction : IAction, quantityOfLostAction : number) => {
    const dispatch = useAppDispatch();
    const lostActionIdAsString : string = lostAction.id.toString();

    const currentHolster = useAppSelector((state) => state.LostFindsHolster.Holster);
    
    if(!quantityOfLostAction) {
        return <></>;
    }
    
    /**
     * Removes one quantity from the clicked lost action in the holster. If quantity hits 0, removes the lost action from the holster
     * @returns updates holster state for quantity of action
     */
    function HandleButtonClick() {
        if(quantityOfLostAction == 0) {
            // debugging
            return;
        }
        if(quantityOfLostAction - 1 == 0) {
            const filteredHolster = currentHolster.filter((actions) => actions.id != lostAction.id);
            dispatch(removeActionFromHolster(filteredHolster));
        }
        dispatch(decrementActionQuantity(lostAction.id))
        dispatch(decreaseCurrentWeight(lostAction.weight));
    }


    return (
        <div key={lostAction.id} id={lostActionIdAsString} onClick={HandleButtonClick} className="LostFindsHolsterActionBox">

                <div id={lostActionIdAsString} className="LostFindsHolsterActionBoxImage">
                    
                    <img id={lostActionIdAsString} src={lostAction.category.EN == "Item-Related" ? lostAction.img : lostAction.imgBorder}></img>                
                </div>
                <div id={lostActionIdAsString} className="LostFindsHolsterActionBoxNameAndQuantity">
                    <div className="LostFindsHolsterActionBoxQuantity">
                        <span id={lostActionIdAsString}>{quantityOfLostAction}</span>
                    </div>
                    <div className="LostFindsHolsterActionBoxName">
                        <span id={lostActionIdAsString}>{lostAction.name.EN}</span>
                    </div>                      
                </div>     
        </div>
    )
}

/*
This function does not do anything, but was originally intended to reset the lost action quantity property on lost actions
export function LostFindsHolsterResetLostActionQuantitiesToZero() : void {
    LostActionsAsObjectArray.forEach((lostAction) => {
        lostAction.quantity = 0;
    })
}
*/


/**
 * Creates and returns the JSX Elements of the lost actions inside the lost finds holster.
 * @returns A 2D array containing the JSX Element of lost actions separated by the lost action's category
 */
export const CreateLostFindsHolsterActionBoxes = () : React.JSX.Element[][] => {
    
    const quantities : number[]= useAppSelector((state) => state.LostFindsHolster.ActionQuantities);

    const lostFindsHolsterActionBoxesAs2DArray : React.JSX.Element[][] = [];
    
    for(let i = 0; i < 7; i++) {
        lostFindsHolsterActionBoxesAs2DArray.push([]);
    }

    LostActionsAsObjectArray.forEach((lostAction) => {

        const lostFindsHolsterActionBox = CreateLostFindsHolsterActionBox(lostAction, quantities[lostAction.id]);

        if(quantities[lostAction.id]) { 
            PlaceLostActionElementTo2DArray(lostFindsHolsterActionBoxesAs2DArray, lostFindsHolsterActionBox, lostAction.id, lostAction.category.EN);      
            /*switch (lostAction.category.EN) {
                case "Offensive": {
                    lostFindsHolsterActionBoxesAs2DArray[0][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Defensive": {
                    lostFindsHolsterActionBoxesAs2DArray[1][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Restorative": {
                    lostFindsHolsterActionBoxesAs2DArray[2][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Beneficial": {
                    lostFindsHolsterActionBoxesAs2DArray[3][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Tactical": {
                    lostFindsHolsterActionBoxesAs2DArray[4][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Detrimental": {
                    lostFindsHolsterActionBoxesAs2DArray[5][lostAction.id] = lostFindsHolsterActionBox;
                    break;
                }
                case "Item-Related": {
                    lostFindsHolsterActionBoxesAs2DArray[6][lostAction.id] = lostFindsHolsterActionBox;
                }
            }*/
        }  
    })
    return lostFindsHolsterActionBoxesAs2DArray;
}

export default CreateLostFindsHolsterActionBoxes;