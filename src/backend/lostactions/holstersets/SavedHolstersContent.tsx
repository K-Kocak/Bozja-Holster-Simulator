import React, { BaseSyntheticEvent } from 'react';

import LoadSetImage from '@ui/pictures/BozjaLoadSetImage81x81.png';

import '@css/ui/components/SavedHolstersContent.scss';

const Test = () => {

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
                        <img onClick={HandleDeleteSetClick}src={LoadSetImage}></img>
                    </div>
                </div>

                <div className="SavedHolstersTitleAndActions">
                    <div className="SavedHolstersTitle">
                        Title of the holster
                    </div>
                    <div className="SavedHolstersListActionsInSet">
                        <div className="SavedHolstersActionInSet">
                            An Action
                        </div>
                        <div className="SavedHolstersActionInSet">
                            An Action 2
                        </div>
                        <div className="SavedHolstersActionInSet">
                            An Action 3
                        </div>
                        <div className="SavedHolstersActionInSet">
                            An Action 4
                        </div>
                    </div>
                </div>

                <div className="SavedHolstersWeightAndTypeOfSet">
                    <div className="SavedHolsterWeightOfSet">
                        99
                    </div>
                    <div className="SavedHolstersTypeOfSet">
                        Drvsh
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Test;