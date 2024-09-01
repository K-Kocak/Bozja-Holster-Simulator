import React from 'react';

import IAction from '@backend/interfaces/IAction';

import LostActionsAsObjectArray from '@backend/lostactions/ActionDataToObjectArray';

function CreateLostFindsHolsterActionBox(LostAction : IAction) : React.JSX.Element {
    return (
        <div className="LostFindsHolsterActionBox">
                <div className="LostFindsHolsterActionBoxImage">
                    <span className="LostFindsHolsterActionBoxQuantity">{LostAction.quantity}</span>
                    <img src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
                </div>
                <div className="LostFindsHolsterActionBoxName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
}

export function LostFindsHolsterDecreaseActionQuantityByOne(LostActionToDecrease : IAction) : void {
    LostActionsAsObjectArray[LostActionToDecrease.id].quantity--;
}

export function LostFindsHolsterIncreaseActionQuantityByOne(LostActionToIncrease : IAction) : void {
    LostActionsAsObjectArray[LostActionToIncrease.id].quantity++;
}

export function LostFindsHolsterResetLostActionQuantitiesToZero() : void {
    LostActionsAsObjectArray.forEach((LostAction) => {
        LostAction.quantity = 0;
    })
}

export function CreateLostFindsHolsterActionBoxes() : React.JSX.Element[] {
    const LostFindsHolsterActionBoxesArray : React.JSX.Element[] = [];
    LostActionsAsObjectArray.forEach((LostAction) => {
        LostFindsHolsterActionBoxesArray[LostAction.id] = CreateLostFindsHolsterActionBox(LostAction);
    })
    return LostFindsHolsterActionBoxesArray;
}

export default CreateLostFindsHolsterActionBoxes;