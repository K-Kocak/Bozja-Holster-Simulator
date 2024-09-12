import React, { BaseSyntheticEvent } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';

import '@css/ui/components/SavedHolstersContent.scss';
import { useAppSelector } from '@app/backend/hooks';
import { RetrieveRoleImageUsingLostFindsHolsterState } from '../lostfindsholster/LostFindsHolsterContents';

const Test = () => {

    const holstersToLoad = useAppSelector((state) => state.LostActionSets.Sets);

    function HandleLoadSetToHolsterClick(event : BaseSyntheticEvent) {
        console.log(event);
    }

    function HandleDeleteSetClick(event : BaseSyntheticEvent) {
        console.log(event);
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
                        <span>{holstersToLoad[0].nameOfSet}</span>
                    </div>
                    <div className="SavedHolstersListActionsInSet">
                        <div className="SavedHolstersActionInSet">
                            <img src={holstersToLoad[0].setLostActionContents[0].img}></img>
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