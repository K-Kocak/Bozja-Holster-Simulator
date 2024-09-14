import { BaseSyntheticEvent } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';

import '@css/ui/components/SavedHolstersSetGen.scss';

import { useAppDispatch } from '@app/backend/hooks';

import { RetrieveRoleImageUsingLostFindsHolsterState } from '../lostfindsholster/LostFindsHolsterContents';
import { changeTitleOfSpecificSavedSet, LostActionSets } from '../LostActionSetSlice';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@backend/interfaces/IActionHolster';
import { CounterState } from '@app/backend/counterSlice';
import { ThunkDispatch, UnknownAction, Dispatch } from '@reduxjs/toolkit';
import { LostFindsHolster } from '../LostFindsHolsterSlice';


const GenerateSavedSetLostActions = (SavedSetOfLostActions : IActionHolster[]) : React.JSX.Element => {
    const ArrayToReturn : React.JSX.Element[] = [];
    SavedSetOfLostActions.forEach((LostAction) => {
        ArrayToReturn.push(
            <div className="SavedHolstersActionInSet">
                <img src={LostAction.img}></img>
                <div className="SavedHolstersActionInSetSpecificQuantity">{LostAction.quantity}</div>
            </div>
        );
    });
    return (
        <div className="SavedHolstersListActionsInSet">
            {ArrayToReturn}
        </div>
    )
}

const CreateSavedSet = (SavedSet : ILostActionSet, 
    dispatch: ThunkDispatch<{ counter: CounterState; LostFindsHolster: LostFindsHolster; LostActionSets: LostActionSets; }, undefined, UnknownAction> & Dispatch<UnknownAction>
) => {
    const SavedSetLostActions : React.JSX.Element = GenerateSavedSetLostActions(SavedSet.setLostActionContents);

    function HandleLoadSetToHolsterClick(event : BaseSyntheticEvent) {
        console.log(event);
    }

    function HandleDeleteSetClick(event : BaseSyntheticEvent) {
        console.log(event);
    }

    function HandleTitleChange(event : BaseSyntheticEvent) {
        console.log(event);
        const idOfSet : number = event.target.name;
        const titleOfSet : string = event.target.value;
        console.log(event.target.name);
        console.log(event.target.value);
        dispatch(changeTitleOfSpecificSavedSet([idOfSet, titleOfSet]))
    }

    return (
        <div className="MyHolstersSavedSet">

                <div className="SavedHolstersLoadAndDeleteHolster">
                    <div className="SavedHolstersLoadHolster">
                        <img onClick={HandleLoadSetToHolsterClick} src={LoadSetImage}></img>
                    </div>
                    <div className="SavedHolstersDeleteHolster">
                        <img onClick={HandleDeleteSetClick} src={LoadSetImage}></img>
                    </div>
                </div>

                <div className="SavedHolstersTitleAndActions">
                    <div className="SavedHolstersTitle">
                        <input name={SavedSet.id.toString()} type="string" contentEditable="true" onChange={HandleTitleChange} defaultValue={SavedSet.nameOfSet}></input>
                        
                    </div>

                    {SavedSetLostActions}
                </div>

                <div className="SavedHolstersWeightAndTypeOfSet">
                    <div className="SavedHolsterWeightOfSet">
                        <span>{SavedSet.weightOfSet}</span>
                    </div>
                    <div className="SavedHolstersTypeOfSet">
                        <img src={RetrieveRoleImageUsingLostFindsHolsterState(SavedSet.roleTypeOfSet)}></img>
                </div>
            </div>
        </div>
    )
}

const CreateSavedSets = (SetsToLoad : ILostActionSet[]) => {
    const dispatch = useAppDispatch()
    const SetsArray : React.JSX.Element[] = [];
    SetsToLoad.forEach((SetToUse) => {
        const SetCreation : React.JSX.Element = CreateSavedSet(SetToUse, dispatch);
        SetsArray.push(SetCreation);
    });
    return (
        <div className="SavedSetsAreaContainer">
            {SetsArray}
        </div>
    )
}

export default CreateSavedSets;