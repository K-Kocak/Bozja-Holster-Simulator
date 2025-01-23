import { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { setPrepopHolsterLostActionEssence, setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight } from '@backend/lostactions/LostFindsHolsterSlice';

import IAction from '@app/backend/interfaces/IAction';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import '@css/ui/components/PrepopHolster/PrepopHolsterActions.scss';
import '@css/ui/components/LostFindsCache/LostActionsDivGen.scss';

import { AutomateSeparator } from '../lostfindscache/LostActionsDivGen';

/**
 * Creates a lost action row for the dropdown
 * @param LostAction, the lost action to create the row for
 * @param leftOrRightorEssence, whether the lost action row is for the left, right or for the essence action
 * @returns A lost action row
 */
export const CreateDropdownRowForLostAction = (lostAction : IAction, leftOrRightorEssence : string) => {
    const dispatch = useAppDispatch();

    function HandleLostActionSelected(event : BaseSyntheticEvent) {
        const actionToSet : number = event.target.id;
        switch (leftOrRightorEssence) {
            case "Left": {
                dispatch(setPrepopHolsterLostActionLeft(actionToSet));
                break;
            }
            case "Right": {
                dispatch(setPrepopHolsterLostActionRight(actionToSet));
                break;
            }
            case "Essence": {
                dispatch(setPrepopHolsterLostActionEssence(actionToSet));
                break;
            }
        }
    }

    return (
        <div key={lostAction.id} id={lostAction.id.toString()} onClick={HandleLostActionSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={lostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{lostAction.name.EN}</span>
                </div>
        </div>
    )
} 

/**
 * Creates and returns the dropdown menu for a prepop holster lost action (left, right, essence)
 * @param leftOrRightOrEssence, the prepop action to make the dropdown for
 * @returns dropdown menu containing array of lost actions for prepop action
 */
export const CreatePrepopHolsterDropdownItems = (leftOrRightOrEssence : string) : React.JSX.Element[][] => {
    const dropdownItemsAs2DArray : React.JSX.Element[][] = [];
    
    for(let i = 0; i < 7; i++) {
        dropdownItemsAs2DArray.push([]);
    }
    const lostActionCategories = ["Offensive", "Defensive", "Restorative", "Beneficial", "Tactical", "Detrimental", "Item-Related"];
    
    if(leftOrRightOrEssence == "Essence") {
        LostActionsAsObjectArray.forEach((lostAction) => {
            if(lostAction.id > 707 && lostAction.id < 744) {
                const essenceToPush = CreateDropdownRowForLostAction(lostAction, "Essence");
                dropdownItemsAs2DArray[6].push(essenceToPush);
            }
        })
        dropdownItemsAs2DArray[6].unshift(CreateDropdownLostActionHeader("Essence"))
    }
    else if(leftOrRightOrEssence == "Left" || leftOrRightOrEssence == "Right"){
        LostActionsAsObjectArray.forEach((lostAction) => {
            if(lostAction.id < 700 && lostAction.id > 100) {
                const lostActionToPush = CreateDropdownRowForLostAction(lostAction, leftOrRightOrEssence);
                switch (lostAction.category.EN) {
                    case "Offensive":
                        dropdownItemsAs2DArray[0].push(lostActionToPush);
                        break;
                    case "Defensive":
                        dropdownItemsAs2DArray[1].push(lostActionToPush);
                        break;
                    case "Restorative":
                        dropdownItemsAs2DArray[2].push(lostActionToPush);
                        break;
                    case "Beneficial":
                        dropdownItemsAs2DArray[3].push(lostActionToPush);
                        break;
                    case "Tactical":
                        dropdownItemsAs2DArray[4].push(lostActionToPush);
                        break;
                    case "Detrimental":
                        dropdownItemsAs2DArray[5].push(lostActionToPush);
                        break;
                    case "Item-Related":
                        dropdownItemsAs2DArray[6].push(lostActionToPush);
                        break;
                    default:
                        break;
                }
            }
        })
        dropdownItemsAs2DArray.forEach((dropdownItemCategory, indexOfCategory) => {
            if(dropdownItemCategory.length > 0) {
                dropdownItemCategory.unshift(CreateDropdownLostActionHeader(lostActionCategories[indexOfCategory]))
            }
        })
    }
    if(dropdownItemsAs2DArray.length > 0) {
        dropdownItemsAs2DArray[dropdownItemsAs2DArray.length-1].push(<div key={"PrepopActionsDropdownSeparator"} style={{width: "95%"}}>{AutomateSeparator()}</div>);
    }
    return dropdownItemsAs2DArray;
}

/**
 * Creates a category header for dropdown menu using categoryOfSection as the text
 * @param categoryOfSection, the name of the category to place
 * @returns a div HTML
 */
export function CreateDropdownLostActionHeader(categoryOfSection: string) : React.JSX.Element {
    return (
        <div key={categoryOfSection} className="LostActionDropdownCategoryHeader">
            {AutomateSeparator()}
            <div className="LostActionDropdownCategoryText">
                <span>{categoryOfSection} Actions</span>
            </div>
        </div>
    )
}

/**
 * Creates and returns the prepop holster contents
 * @returns Prepop component
 */
const PrepopHolsterContents = () => {

    const prepopHolsterLostActions = useAppSelector((state) => state.LostFindsHolster.PrepopHolster);

    const prepopHolsterLostActionLeftImageToShow : React.JSX.Element = prepopHolsterLostActions.LostActionLeft != -1 ? <img src={LostActionsAsObjectArray[prepopHolsterLostActions.LostActionLeft].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    const prepopHolsterLostActionRightImageToShow : React.JSX.Element = prepopHolsterLostActions.LostActionRight != -1 ? <img src={LostActionsAsObjectArray[prepopHolsterLostActions.LostActionRight].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    const prepopHolsterLostActionEssenceImageToShow : React.JSX.Element = prepopHolsterLostActions.EssenceInUse != -1 ? <img src={LostActionsAsObjectArray[prepopHolsterLostActions.EssenceInUse].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    return (
        <div className="PrepopHolsterInnerContainer">
            <div className="PrepopHolsterText">
                <span>Prepop Actions & Essence</span>
            </div>
            <div className="PrepopHolsterLostActionsAndEssence">
                <div className="PrepopHolsterLostActionLeftSide">
                    <div className="PrepopHolsterLostActionLeftSideImage">
                        {prepopHolsterLostActionLeftImageToShow}
                    </div>
                    <div className="PrepopHolsterLostActionLeftSideSelectorList">                      
                        <span className="DropdownArrow">V</span>

                        <div className="PrepopHolsterLostActionLeftSideDropdownContent">
                            <div className="PrepopHolsterLostActionDropdownContentInnerContainer">
                                {CreatePrepopHolsterDropdownItems("Left")}
                            </div>                      
                        </div>
                        
                    </div>
                </div>
                <div className="PrepopHolsterLostActionRightSide">
                    <div className="PrepopHolsterLostActionRightSideImage">
                        {prepopHolsterLostActionRightImageToShow}
                    </div>
                    <div className="PrepopHolsterLostActionRightSideSelectorList">                      
                        <span className="DropdownArrow">V</span>
                        <div className="PrepopHolsterLostActionRightSideDropdownContent">
                            <div className="PrepopHolsterLostActionDropdownContentInnerContainer">
                                {CreatePrepopHolsterDropdownItems("Right")}
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="PrepopHolsterLostActionEssence">
                    <div className="PrepopHolsterLostActionEssenceImage">
                        {prepopHolsterLostActionEssenceImageToShow}
                    </div>
                    <div className="PrepopHolsterLostActionEssenceSelectorList">                      
                        <span className="DropdownArrow">V</span>
                        <div className="PrepopHolsterLostActionEssenceDropdownContent">
                            <div className="PrepopHolsterLostActionDropdownContentInnerContainer">
                                {CreatePrepopHolsterDropdownItems("Essence")}  
                            </div>
                                                                      
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default PrepopHolsterContents;