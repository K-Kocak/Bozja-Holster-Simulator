import React, { BaseSyntheticEvent } from 'react';

import IAction from '@backend/interfaces/IAction';

import '@css/ui/components/LostFindsHolsterContents.scss';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';
import { useAppDispatch } from '../hooks';

const LostFindsHolsterActionBoxesArray : React.JSX.Element[] = [];

export function CreateLostFindsHolsterActionBox(LostAction : IAction) : React.JSX.Element {
    const dispatch = useAppDispatch();

    function HandleButtonClick() {
        
    }

    return (
        <div id={LostAction.id.toString()} onClick={LostFindsHolsterDecreaseActionQuantityByOne} className="LostFindsHolsterActionBox">
                <div id={LostAction.id.toString()} className="LostFindsHolsterActionBoxImage">
                    <span id={LostAction.id.toString()} className="LostFindsHolsterActionBoxQuantity">{LostAction.quantity}</span>
                    <img id={LostAction.id.toString()} src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
                </div>
                <div id={LostAction.id.toString()} className="LostFindsHolsterActionBoxName">
                    <span id={LostAction.id.toString()} >{LostAction.name.EN}</span>
                </div>
        </div>
    )
}

export function LostFindsHolsterDecreaseActionQuantityByOne(event : BaseSyntheticEvent) : void {
    console.log(event);
    if(LostActionsAsObjectArray[event.target.id].quantity > 0) {
        LostActionsAsObjectArray[event.target.id].quantity--;
    }
    console.log(LostActionsAsObjectArray[event.target.id].quantity);
}



export function LostFindsHolsterResetLostActionQuantitiesToZero() : void {
    LostActionsAsObjectArray.forEach((LostAction) => {
        LostAction.quantity = 0;
    })
}

export function CreateLostFindsHolsterActionBoxes() : React.JSX.Element[] {
    LostActionsAsObjectArray.forEach((LostAction) => {
        LostFindsHolsterActionBoxesArray[LostAction.id] = CreateLostFindsHolsterActionBox(LostAction);
    })
    return LostFindsHolsterActionBoxesArray;
}

export default CreateLostFindsHolsterActionBoxes;