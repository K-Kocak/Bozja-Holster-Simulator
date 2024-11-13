import { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import { setPrepopHolsterLostActionEssence, setPrepopHolsterLostActionLeft, setPrepopHolsterLostActionRight } from '@backend/lostactions/LostFindsHolsterSlice';

import IAction from '@app/backend/interfaces/IAction';

import LostActionsAsObjectArray from '@backend/lostactions/actiondata/ActionDataToObjectArray';
import QuestionMarkNoAction from '@backend/lostactions/actiondata/ActionBlank';

import '@css/ui/components/PrepopHolster/PrepopHolsterActions.scss';

export const CreateDropdownRowForLostAction = (LostAction : IAction, LeftOrRightorEssence : string) => {

    const dispatch = useAppDispatch();

    function HandleLostActionSelected(event : BaseSyntheticEvent) {
        const ActionToSet : number = event.target.id;
        switch (LeftOrRightorEssence) {
            case "Left": {
                dispatch(setPrepopHolsterLostActionLeft(ActionToSet));
                break;
            }
            case "Right": {
                dispatch(setPrepopHolsterLostActionRight(ActionToSet));
                break;
            }
            case "Essence": {
                dispatch(setPrepopHolsterLostActionEssence(ActionToSet));
                break;
            }
        }
    }

    return (
        <div key={LostAction.id} id={LostAction.id.toString()} onClick={HandleLostActionSelected} className="DropdownItemLostActionRow">
                <div className="DropdownItemLostActionImage">
                    <img src={LostAction.img}></img>
                </div>
                <div className="DropdownItemLostActionName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
} 

export const CreatePrepopHolsterDropdownItems = (LeftOrRightOrEssence : string) : React.JSX.Element[][] => {
    const DropdownItemsArrayOffensive : React.JSX.Element[] = [];
    const DropdownItemsArrayDefensive : React.JSX.Element[] = [];
    const DropdownItemsArrayRestorative : React.JSX.Element[] = [];
    const DropdownItemsArrayBeneficial : React.JSX.Element[] = [];
    const DropdownItemsArrayTactical : React.JSX.Element[] = [];
    const DropdownItemsArrayDetrimental : React.JSX.Element[] = [];
    const DropdownItemsArrayItemRelated : React.JSX.Element[] = [];

    if(LeftOrRightOrEssence == "Essence") {
        LostActionsAsObjectArray.forEach((LostAction) => {
            if(LostAction.id > 707 && LostAction.id < 744) {
                const EssenceToPush = CreateDropdownRowForLostAction(LostAction, "Essence");
                DropdownItemsArrayItemRelated.push(EssenceToPush);
                //DropdownItemsArray.push(EssenceToPush);
            }
        })
    }
    else {
        LostActionsAsObjectArray.forEach((LostAction) => {
            if(LostAction.id < 700 && LostAction.id > 100) {
                const LostActionToPush = CreateDropdownRowForLostAction(LostAction, LeftOrRightOrEssence);
                switch (LostAction.category.EN) {
                    case "Offensive":
                        DropdownItemsArrayOffensive.push(LostActionToPush);
                        break;
                    case "Defensive":
                        DropdownItemsArrayDefensive.push(LostActionToPush);
                        break;
                    case "Restorative":
                        DropdownItemsArrayRestorative.push(LostActionToPush);
                        break;
                    case "Beneficial":
                        DropdownItemsArrayBeneficial.push(LostActionToPush);
                        break;
                    case "Tactical":
                        DropdownItemsArrayTactical.push(LostActionToPush);
                        break;
                    case "Detrimental":
                        DropdownItemsArrayDetrimental.push(LostActionToPush);
                        break;
                    case "Item-Related":
                        DropdownItemsArrayItemRelated.push(LostActionToPush);
                        break;
                    default:
                        break;
                }
                //DropdownItemsArray.push(LostActionToPush);
            }
        })
        if(DropdownItemsArrayOffensive.length > 0) {
            DropdownItemsArrayOffensive.unshift(CreateDropdownLostActionHeader("Offensive"));
        }
        if(DropdownItemsArrayDefensive.length > 0) {
            DropdownItemsArrayDefensive.unshift(CreateDropdownLostActionHeader("Defensive"));
        }
        if(DropdownItemsArrayRestorative.length > 0) {
            DropdownItemsArrayRestorative.unshift(CreateDropdownLostActionHeader("Restorative"));
        }
        if(DropdownItemsArrayBeneficial.length > 0) {
            DropdownItemsArrayBeneficial.unshift(CreateDropdownLostActionHeader("Beneficial"));
        }
        if(DropdownItemsArrayTactical.length > 0) {
            DropdownItemsArrayTactical.unshift(CreateDropdownLostActionHeader("Tactical"));
        }
        if(DropdownItemsArrayDetrimental.length > 0) {
            DropdownItemsArrayDetrimental.unshift(CreateDropdownLostActionHeader("Detrimental"));
        }
        if(DropdownItemsArrayItemRelated.length > 0) {
            DropdownItemsArrayItemRelated.unshift(CreateDropdownLostActionHeader("Item-Related"));
        }
    }

    
    return [DropdownItemsArrayOffensive, DropdownItemsArrayDefensive, DropdownItemsArrayRestorative, DropdownItemsArrayBeneficial, DropdownItemsArrayTactical, DropdownItemsArrayDetrimental, DropdownItemsArrayItemRelated];
}

function CreateDropdownLostActionHeader(categoryOfSection: string) : React.JSX.Element {
    return (
        <div className="LostActionDropdownCategoryHeader">
            <span>{categoryOfSection}</span>
        </div>
    )
}

const PrepopHolsterContents = () => {

    const PrepopHolsterLostActionLeft = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionLeft);
    const PrepopHolsterLostActionRight = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.LostActionRight);
    const PrepopHolsterLostActionEssence = useAppSelector((state) => state.LostFindsHolster.PrepopHolster.EssenceInUse);

    const PrepopHolsterLostActionLeftImageToShow : React.JSX.Element = PrepopHolsterLostActionLeft != -1 ? <img src={LostActionsAsObjectArray[PrepopHolsterLostActionLeft].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    const PrepopHolsterLostActionRightImageToShow : React.JSX.Element = PrepopHolsterLostActionRight != -1 ? <img src={LostActionsAsObjectArray[PrepopHolsterLostActionRight].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    const PrepopHolsterLostActionEssenceImageToShow : React.JSX.Element = PrepopHolsterLostActionEssence != -1 ? <img src={LostActionsAsObjectArray[PrepopHolsterLostActionEssence].img}></img> : <img src={QuestionMarkNoAction.img}></img>

    return (
        <div className="PrepopHolsterInnerContainer">
            <div className="PrepopHolsterText">
                <span>Prepop Actions & Essence</span>
            </div>
            <div className="PrepopHolsterLostActionsAndEssence">
                <div className="PrepopHolsterLostActionLeftSide">
                    <div className="PrepopHolsterLostActionLeftSideImage">
                        {PrepopHolsterLostActionLeftImageToShow}
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
                        {PrepopHolsterLostActionRightImageToShow}
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
                        {PrepopHolsterLostActionEssenceImageToShow}
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