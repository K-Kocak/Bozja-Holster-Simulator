import { BaseSyntheticEvent, Dispatch } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';
import DeleteSetImage from '@ui/pictures/FFXIVExitGameIcon.png';

import '@css/ui/components/SavedHolstersSetGen.scss';

import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { RetrieveRoleImageUsingLostFindsHolsterState } from '../lostfindsholster/LostFindsHolsterContents'

import { changeTitleOfSpecificSavedSet, deleteSavedSetFromSets, LostActionSets } from '../LostActionSetSlice';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@backend/interfaces/IActionHolster';

import { addActionToHolster, clearHolster, increaseCurrentWeight, loadHolsterTimelineEncounters, LostFindsHolster, setActionQuantity, setPrepopHolsterLostActionEssence, setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';

import { IUserSlottedActions } from '@app/backend/interfaces/IHolsterTimeline';
import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';
import LostActions from '../actiondata/ActionData';

import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';


const GenerateSavedSetLostActions = (SavedSetOfLostActions : IActionHolster[]) : React.JSX.Element => {
    const arrayToReturn : React.JSX.Element[] = [];
    SavedSetOfLostActions.forEach((LostAction) => {
        arrayToReturn.push(
            <div key={LostAction.id} className="SavedHolstersActionInSet">
                <img src={LostAction.img}></img>
                <div className="SavedHolstersActionInSetSpecificQuantity">{LostAction.quantity}</div>
            </div>
        );
    });
    return (
        <div className="SavedHolstersListActionsInSet">
            {arrayToReturn}
        </div>
    )
}

const GenerateSavedSetLostActionsPrepop = (SavedSetOfLostActionsPrepop : IUserSlottedActions) : React.JSX.Element => {
    const leftActionPrepop = LostActionsAsObjectArray[SavedSetOfLostActionsPrepop.LostActionLeft];
    const rightActionPrepopId = LostActionsAsObjectArray[SavedSetOfLostActionsPrepop.LostActionRight];
    const essenceActionPrepopId = LostActionsAsObjectArray[SavedSetOfLostActionsPrepop.EssenceInUse];
    return (
        <div className="SavedHolstersListPrepopActionsInSet">
            <div key={leftActionPrepop.id} className="SavedHolstersPrepopActionInSet">
                <img src={leftActionPrepop.img}></img>
            </div>
            <div key={rightActionPrepopId.id} className="SavedHolstersPrepopActionInSet">
                <img src={rightActionPrepopId.img}></img>
            </div>
            <div key={essenceActionPrepopId.id} className="SavedHolstersPrepopActionInSet">
                <img src={essenceActionPrepopId.img}></img>
            </div>
            <div key={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].toString()} className="SavedHolstersPrepopActionInSet">
                <img src={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].img}></img>
            </div>
        </div>
    )
}

const CreateSavedSet = (SavedSet : ILostActionSet, 
    dispatch: ThunkDispatch<{ LostFindsHolster: LostFindsHolster; LostActionSets: LostActionSets; }, undefined, UnknownAction> & Dispatch<UnknownAction>
, allSavedSets : ILostActionSet[]) => {
    const SavedSetLostActions : React.JSX.Element = GenerateSavedSetLostActions(SavedSet.setLostActionContents);
    const SavedSetLostActionsPrepop : React.JSX.Element = GenerateSavedSetLostActionsPrepop(SavedSet.PrepopLostActions);
    
    function HandleLoadSetToHolsterClick() {
        console.log(SavedSet);
        console.log(SavedSet.PrepopLostActions);
        dispatch(clearHolster());
        dispatch(setSelectedRole(SavedSet.roleTypeOfSet));
        dispatch(increaseCurrentWeight(SavedSet.weightOfSet));
        dispatch(setPrepopHolsterLostActionLeft(SavedSet.PrepopLostActions.LostActionLeft));
        dispatch(setPrepopHolsterLostActionRight(SavedSet.PrepopLostActions.LostActionRight));
        dispatch(setPrepopHolsterLostActionEssence(SavedSet.PrepopLostActions.EssenceInUse));

        SavedSet.setLostActionContents.forEach((LostActionInSavedSet) => {
            dispatch(addActionToHolster(LostActionInSavedSet.id));
            dispatch(setActionQuantity([LostActionInSavedSet.id, LostActionInSavedSet.quantity]));
        });
        dispatch(loadHolsterTimelineEncounters(SavedSet.HolsterTimeline.Encounters));
        

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
                    <div className="SavedHolstersCreateLinkForSet">
                        CLK
                    </div>
                    <div className="SavedHolstersDeleteHolster">
                        <img id={SavedSet.id.toString()} onClick={HandleDeleteSetClick} src={DeleteSetImage}></img>
                    </div>
                </div>

                <div className="SavedHolstersTitleAndActions">
                    <div className="SavedHolstersTitle">
                        <input name={SavedSet.id.toString()} type="string" contentEditable="true" onChange={HandleTitleChange} defaultValue={SavedSet.nameOfSet}></input>                      
                    </div>
                    {SavedSetLostActionsPrepop}
                    {SavedSetLostActions}
                </div>

                <div className="SavedHolstersWeightAndTypeOfSet">
                    <div className="SavedHolsterWeightOfSet">
                        <span>{SavedSet.weightOfSet}</span>
                    </div>
                    <div className="SavedHolsterBlankSpace"></div>
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