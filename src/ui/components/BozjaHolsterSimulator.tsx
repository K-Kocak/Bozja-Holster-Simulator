import LostFindsCache from '@ui/components/LostFindsCache';
import LostFindsHolster from '@ui/components/LostFindsHolster';
import SavedHolsters from '@ui/components/SavedHolsters';
import ForgottenFragmentInfo from '@ui/components/ForgottenFragmentInfo';
import PrepopHolster from '@ui/components/PrepopHolster';
import LostActionInstanceTimeline from '@ui/components/LostActionInstanceTimeline';
import LostActionInstanceTimelineResourceManagement from '@ui/components/LostActionInstanceTimelineResourceManagement';

import '@css/ui/components/BozjaHolsterSimulator.scss';

/*
import { useAppSelector } from '@app/backend/hooks';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import { ILostActionSet } from '@app/backend/interfaces/ILostActionSet';
*/

function BozjaHolsterSimulator() {
    console.log(window.location.pathname);
    /*
    TEST CODE FOR IMPLEMENTING LINKS FOR SAVED SETS
    PROCESS:
    1. Grab current state of lost finds holster
    2. Remove null fields in action list and quantities
    3. JSON.Stringy
    4. btoa the JSON (encode base64)
    5. Set that as current window.location.pathname + encoded btoa

    For decoding
    1. atob the link (decode) after removing the sim part
    2. JSON.parse the remainder to get original data
    3. Set state to data

    const currentHolster = useAppSelector((state) => state.LostFindsHolster);

    const holsterToBeSaved : IActionHolster[] = [];

    currentHolster.Holster.forEach((actionInHolster) => {              
        const actionToAdd : IActionHolster = {...actionInHolster, quantity: currentHolster.ActionQuantities[actionInHolster.id]};
        holsterToBeSaved.push(actionToAdd);             
    });
    console.log(useAppSelector((state) => state.LostActionSets.Sets))
    const set : ILostActionSet = {
        id: Math.random()*10000,
        nameOfSet: currentHolster.SelectedRole + " Holster",
        roleTypeOfSet: currentHolster.SelectedRole,
        weightOfSet: currentHolster.SelectedWeight,
        setLostActionContents: holsterToBeSaved,
        PrepopLostActions: currentHolster.PrepopHolster,
        HolsterTimeline: currentHolster.HolsterTimeline
    };
    console.log(set);
    const currentHolsterJSON : string = JSON.stringify(set);
    const stringToTest = "====";
    const stringToTestAsArray : string[] = stringToTest.split("=");
    console.log(currentHolsterJSON);
    console.log(btoa(currentHolsterJSON));
    console.log(JSON.parse(atob(btoa(currentHolsterJSON))));
    */

    return (
        <div className="AppContainer">
            <div className="ComponentsContainer">
                <div className="ComponentContainerLostFindsCacheAndForgottenFragmentInfo">
                    <LostFindsCache />
                    <ForgottenFragmentInfo />
                </div>
                <div className="ComponentContainerEverythingElse">
                    <div className="ComponentContainerLostFindsHolsterAndSavedHolsters">
                        <LostFindsHolster />
                        <SavedHolsters />
                    </div>
                    <div className="ComponentContainerPrepopAndTimelineComponents">
                        <div className="ComponentContainerPrepopAndResourceManagement">
                            <PrepopHolster />
                            <LostActionInstanceTimelineResourceManagement />
                        </div>
                        <div className="ComponentContainerInstanceTimeline">
                            <LostActionInstanceTimeline /> 
                        </div>             
                    </div>  
                </div>
            </div>
        </div>
    )
    
}

export default BozjaHolsterSimulator;