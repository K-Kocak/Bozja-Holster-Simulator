import { BaseSyntheticEvent } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';
import DeleteSetImage from '@ui/pictures/FFXIVExitGameIcon.png';

import '@css/ui/components/SavedHolstersSetGen.scss';

import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { RetrieveRoleImageUsingLostFindsHolsterState } from '../lostfindsholster/LostFindsHolsterContents'

import { changeTitleOfSpecificSavedSet, deleteSavedSetFromSets, LostActionSets } from '../LostActionSetSlice';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@backend/interfaces/IActionHolster';

import { ThunkDispatch, UnknownAction, Dispatch } from '@reduxjs/toolkit';

import { addActionToHolster, clearHolster, increaseCurrentWeight, LostFindsHolster, setActionQuantity, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';


const GenerateSavedSetLostActions = (SavedSetOfLostActions : IActionHolster[]) : React.JSX.Element => {
    const ArrayToReturn : React.JSX.Element[] = [];
    SavedSetOfLostActions.forEach((LostAction) => {
        ArrayToReturn.push(
            <div key={LostAction.id} className="SavedHolstersActionInSet">
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
    dispatch: ThunkDispatch<{ LostFindsHolster: LostFindsHolster; LostActionSets: LostActionSets; }, undefined, UnknownAction> & Dispatch<UnknownAction>
, allSavedSets : ILostActionSet[]) => {
    const SavedSetLostActions : React.JSX.Element = GenerateSavedSetLostActions(SavedSet.setLostActionContents);
    
    function HandleLoadSetToHolsterClick(event : BaseSyntheticEvent) {
        console.log(event);
        dispatch(clearHolster());
        dispatch(setSelectedRole(SavedSet.roleTypeOfSet));
        dispatch(increaseCurrentWeight(SavedSet.weightOfSet));

        SavedSet.setLostActionContents.forEach((LostActionInSavedSet) => {
            dispatch(addActionToHolster(LostActionInSavedSet.id));
            dispatch(setActionQuantity([LostActionInSavedSet.id, LostActionInSavedSet.quantity]));
        })
    }

    function HandleDeleteSetClick(event : BaseSyntheticEvent) {
        const filteredSavedSets : ILostActionSet[] = allSavedSets.filter((SavedSet) => SavedSet.id != event.target.id);
        dispatch(deleteSavedSetFromSets(filteredSavedSets));
        
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
        <div key={SavedSet.id} className="MyHolstersSavedSet">
                <div className="SavedHolstersLoadAndDeleteHolster">
                    <div className="SavedHolstersLoadHolster">
                        <img onClick={HandleLoadSetToHolsterClick} src={LoadSetImage}></img>
                    </div>
                    <div className="SavedHolstersDeleteHolster">
                        <img id={SavedSet.id.toString()} onClick={HandleDeleteSetClick} src={DeleteSetImage}></img>
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
    const dispatch = useAppDispatch();
    const allSavedSets = useAppSelector((state) => state.LostActionSets.Sets);
    const SetsArray : React.JSX.Element[] = [];
    SetsToLoad.forEach((SetToUse) => {
        const SetCreation : React.JSX.Element = CreateSavedSet(SetToUse, dispatch, allSavedSets);
        SetsArray.push(SetCreation);
    });
    return (
        <div className="SavedSetsAreaContainer">
            {SetsArray}
        </div>
    )
}

export default CreateSavedSets;