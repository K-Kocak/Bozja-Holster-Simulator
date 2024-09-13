import { BaseSyntheticEvent } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';

import '@css/ui/components/SavedHolstersContent.scss';
import { useAppDispatch, useAppSelector } from '@app/backend/hooks';
import { RetrieveRoleImageUsingLostFindsHolsterState } from '../lostfindsholster/LostFindsHolsterContents';
import { changeTitleOfSpecificSavedSet } from '../LostActionSetSlice';

const Test = () => {
    const dispatch = useAppDispatch();
    const holstersToLoad = useAppSelector((state) => state.LostActionSets.Sets);

    function HandleLoadSetToHolsterClick(event : BaseSyntheticEvent) {
        console.log(event);
    }

    function HandleDeleteSetClick(event : BaseSyntheticEvent) {
        console.log(event);
    }

    
    const titleOfSet = useAppSelector((state) => state.LostActionSets.Sets[0].nameOfSet);

    function HandleTitleChange(event : BaseSyntheticEvent) {
        console.log(event);
        const idOfSet : number = event.target.name;
        const titleOfSet : string = event.target.value;
        console.log(event.target.name);
        console.log(event.target.value);
        dispatch(changeTitleOfSpecificSavedSet([idOfSet, titleOfSet]))
    }

    return (
    <div className="SavedHolstersContainer">
        <div className="SavedHolstersTitleText">
            <span>Your Holsters</span>
        </div>
        <div style={{color: "white"}} className="SavedHolstersUserButtons">
            <span>PlaceHolder For Buttons</span>
        </div>
        <div className="TemplateSavedSetsAreaContainer">

            <div className="ExampleSavedSet">

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
                        <input name={holstersToLoad[0].id.toString()} type="string" contentEditable="true" onChange={HandleTitleChange} defaultValue={titleOfSet}></input>
                        
                    </div>
                    <div className="SavedHolstersListActionsInSet">
                        <div className="SavedHolstersActionInSet">
                            <img src={holstersToLoad[0].setLostActionContents[0].img}></img>
                            <div className="SavedHolstersActionInSetSpecificQuantity">{holstersToLoad[0].setLostActionContents[0].quantity}</div>
                        </div>
                        <div className="SavedHolstersActionInSet">
                            <img src={holstersToLoad[0].setLostActionContents[1].img}></img>
                            <div className="SavedHolstersActionInSetSpecificQuantity">{holstersToLoad[0].setLostActionContents[1].quantity}</div>
                        </div>
                    </div>
                </div>

                <div className="SavedHolstersWeightAndTypeOfSet">
                    <div className="SavedHolsterWeightOfSet">
                        <span>{holstersToLoad[0].weightOfSet}</span>
                    </div>
                    <div className="SavedHolstersTypeOfSet">
                        <img src={RetrieveRoleImageUsingLostFindsHolsterState(holstersToLoad[0].roleTypeOfSet)}></img>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Test;