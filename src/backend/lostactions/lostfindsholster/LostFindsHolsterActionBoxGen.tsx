import React from 'react';

import '@css/ui/components/LostFindsHolsterContents.scss';
import '@css/ui/components/LostActionsDivGen.scss';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';

import IAction from '../../interfaces/IAction';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decreaseCurrentWeight, decrementActionQuantity, removeActionFromHolster } from '../LostFindsHolsterSlice';

const CreateLostFindsHolsterActionBox = (LostAction : IAction) => {
    const dispatch = useAppDispatch();
    const currentActionQuantity = useAppSelector((state) => state.LostFindsHolster.ActionQuantities[LostAction.id])
    const holsterTrack = useAppSelector((state) => state.LostFindsHolster.Holster);
    const quantities = useAppSelector((state) => state.LostFindsHolster.ActionQuantities);
    if(!quantities[LostAction.id]) {
        return <></>;
    }
    function HandleButtonClick() {
        if(currentActionQuantity == 0) {
            // debugging
            return;
        }
        if(currentActionQuantity - 1 == 0) {
            dispatch(removeActionFromHolster(LostAction.id));
        }
        dispatch(decrementActionQuantity(LostAction.id))
        dispatch(decreaseCurrentWeight(LostAction.weight));
        console.log(holsterTrack); 
        console.log(quantities);
    }


    return (
        <div key={LostAction.id} id={LostAction.id.toString()} onClick={HandleButtonClick} className="LostFindsHolsterActionBox">

                <div key={LostAction.id} id={LostAction.id.toString()} className="LostFindsHolsterActionBoxImage">
                    
                    <img id={LostAction.id.toString()} src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>                
                </div>
                <div id={LostAction.id.toString()} className="LostFindsHolsterActionBoxNameAndQuantity">
                    <div className="LostFindsHolsterActionBoxQuantity">
                        <span id={LostAction.id.toString()}>{currentActionQuantity}</span>
                    </div>
                    <div className="LostFindsHolsterActionBoxName">
                        <span id={LostAction.id.toString()}>{LostAction.name.EN}</span>
                    </div>  
                             
                </div>
                
                
                
                
        </div>
    )
}


export function LostFindsHolsterResetLostActionQuantitiesToZero() : void {
    LostActionsAsObjectArray.forEach((LostAction) => {
        LostAction.quantity = 0;
    })
}

export const CreateLostFindsHolsterActionBoxes = () : React.JSX.Element[][] => {
    //const LostFindsHolsterActionBoxesArray : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayOffensiveActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayDefensiveActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayRestorativeActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayBeneficialActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayTacticalActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayDetrimentalActions : React.JSX.Element[] = [];
    const LostFindsHolsterActionBoxesArrayItemRelatedActions : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        //LostFindsHolsterActionBoxesArray[LostAction.id] = CreateLostFindsHolsterActionBox(LostAction); 
        
        const LostFindsHolsterActionBox = CreateLostFindsHolsterActionBox(LostAction);
        
        switch (LostAction.category.EN) {
            case "Offensive": {
                LostFindsHolsterActionBoxesArrayOffensiveActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Defensive": {
                LostFindsHolsterActionBoxesArrayDefensiveActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Restorative": {
                LostFindsHolsterActionBoxesArrayRestorativeActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Beneficial": {
                LostFindsHolsterActionBoxesArrayBeneficialActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Tactical": {
                LostFindsHolsterActionBoxesArrayTacticalActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Detrimental": {
                LostFindsHolsterActionBoxesArrayDetrimentalActions[LostAction.id] = LostFindsHolsterActionBox;
                break;
            }
            case "Item-Related": {
                LostFindsHolsterActionBoxesArrayItemRelatedActions[LostAction.id] = LostFindsHolsterActionBox;
            }
        }
    })
    return [LostFindsHolsterActionBoxesArrayOffensiveActions, LostFindsHolsterActionBoxesArrayDefensiveActions,LostFindsHolsterActionBoxesArrayRestorativeActions,
        LostFindsHolsterActionBoxesArrayBeneficialActions, LostFindsHolsterActionBoxesArrayTacticalActions, LostFindsHolsterActionBoxesArrayDetrimentalActions,
        LostFindsHolsterActionBoxesArrayItemRelatedActions]
    //return LostFindsHolsterActionBoxesArray;
}

export default CreateLostFindsHolsterActionBoxes;