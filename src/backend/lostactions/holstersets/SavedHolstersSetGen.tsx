import { BaseSyntheticEvent, Dispatch } from 'react';
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import { addActionToHolster, clearHolster, increaseCurrentWeight, loadHolsterTimelineEncounters, LostFindsHolster, setActionQuantity, setPrepopHolsterLostActionEssence, setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';
import { changeTitleOfSpecificSavedSet, deleteSavedSetFromSets, LostActionSets } from '@backend/lostactions/LostActionSetSlice';
import { addSelectedSavedSet, newSelectedSavedSets } from '@backend/lostactions/LostActionSetSelectedTrackerSlice';

import { ILostActionSet } from '@backend/interfaces/ILostActionSet';
import IActionHolster from '@backend/interfaces/IActionHolster';

import { RetrieveRoleImageUsingLostFindsHolsterState } from '@backend/lostactions/lostfindsholster/LostFindsHolsterContents'
import { IUserSlottedActions } from '@app/backend/interfaces/IHolsterTimeline';
import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import LostActions from '@backend/lostactions/actiondata/ActionData';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage62x62.png';
import DeleteSetImage from '@ui/pictures/FFXIVExitGameIcon70x70.png';

import '@css/ui/components/SavedHolsters/SavedHolstersSetGen.scss';

const GenerateSavedSetLostActions = (SavedSetOfLostActions : IActionHolster[]) : React.JSX.Element => {
    const arrayToReturn : React.JSX.Element[] = [];
    SavedSetOfLostActions.forEach((LostAction) => {
        arrayToReturn.push(
            <div key={LostAction.id} title={LostAction.name} className="SavedHolstersActionInSet">
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
            <div key={leftActionPrepop.id} title={leftActionPrepop.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={leftActionPrepop.img}></img>
            </div>
            <div key={rightActionPrepopId.id} title={rightActionPrepopId.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={rightActionPrepopId.img}></img>
            </div>
            <div key={essenceActionPrepopId.id} title={essenceActionPrepopId.name.EN} className="SavedHolstersPrepopActionInSet">
                <img src={essenceActionPrepopId.img}></img>
            </div>
            <div key={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].toString()} title="Resistance Reraiser" className="SavedHolstersPrepopActionInSet">
                <img src={LostActionsAsObjectArray[LostActions.ItemRelated.ResistanceReraiser.id].img} alt="Resistance Reraiser"></img>
            </div>
        </div>
    )
}

const CreateSavedSet = (SavedSet : ILostActionSet, 
    dispatch: ThunkDispatch<{ LostFindsHolster: LostFindsHolster; LostActionSets: LostActionSets; }, undefined, UnknownAction> & Dispatch<UnknownAction>
, allSavedSets : ILostActionSet[], currentSelectedSavedSets : number[]) => {
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

    function HandleAddSetAsSelectedSet() {
        if(currentSelectedSavedSets.includes(SavedSet.id)) {
            const newSelectedSavedSetsToPlace : number[] = [];
            currentSelectedSavedSets.forEach((SelectedSavedSetId) => {
                if(SelectedSavedSetId != SavedSet.id) {
                    newSelectedSavedSetsToPlace.push(SelectedSavedSetId);
                }
            });
            dispatch(newSelectedSavedSets(newSelectedSavedSetsToPlace));
        }
        else {
            dispatch(addSelectedSavedSet(SavedSet.id));
        }
        (document.getElementById(checkBoxId) as HTMLInputElement).checked;     
    }

    const styleToUse = currentSelectedSavedSets.includes(SavedSet.id) ? {backgroundColor: "#595644"} : {};
    const checkBoxId = (SavedSet.id+1).toString();

    return (
        <div key={SavedSet.id} className="MyHolstersSavedSet">
                <div className="SavedHolstersLoadAndDeleteHolster">
                    <div onClick={HandleLoadSetToHolsterClick} className="SavedHolstersLoadHolster" title="Load This Set.">
                        <img src={LoadSetImage}></img>
                    </div>
                    <div  style={styleToUse} className="SavedHolstersCreateLinkForSet" title="Select for Export.">
                        <input type="checkbox" onClick={HandleAddSetAsSelectedSet} name="SavedSetCheckbox" id={checkBoxId}></input>
                    </div>
                    <div id={SavedSet.id.toString()} onClick={HandleDeleteSetClick} className="SavedHolstersDeleteHolster" title="Delete This Set.">
                        <img src={DeleteSetImage}></img>
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
    const currentSelectedSavedSets : number[] = useAppSelector((state) => state.SelectedSavedSets.SelectedSets);
    SetsToLoad.forEach((SetToUse) => {
        console.log(currentSelectedSavedSets.includes(SetToUse.id));
        const SetCreation : React.JSX.Element = CreateSavedSet(SetToUse, dispatch, allSavedSets, currentSelectedSavedSets);
        SetsArray.push(SetCreation);
    });
    return (
        <div className="SavedSetsAreaContainer">
            {SetsArray}
        </div>
    )
}

export default CreateSavedSets;