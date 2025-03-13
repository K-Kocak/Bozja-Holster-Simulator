import { useAppDispatch, useAppSelector } from '../../hooks';
import axios from 'axios';

import { clearHolster, LostFindsHolster, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';
import { addHolsterToSavedSets } from '@backend/lostactions/LostActionSetSlice';

import { AutomateSeparator } from '@app/backend/lostactions/lostfindscache/LostActionsDivGen';

import CreateLostFindsHolsterActionBoxes from '@app/backend/lostactions/lostfindsholster/LostFindsHolsterActionBoxGen';


import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';
import SaveSetImage from '@ui/pictures/BozjaSaveSetImage62x62.png';
import ClearHolsterImage from '@ui/pictures/FFXIVExitGameIcon70x70.png';
import CopyToClipboardIcon from '@ui/pictures/CopyToClipBoardIcon.png';

import '@css/ui/components/LostFindsHolster/LostFindsHolsterContents.scss';

import { clearDropdownData } from '@backend/lostactions/LostActionDropdownDataSlice';
import { ILostActionSet } from '@app/backend/interfaces/ILostActionSet';
import IActionHolster from '@app/backend/interfaces/IActionHolster';
import { GetRoleImageForCurrentRole } from '../helperfunctions/HelperFunctions';

export function ProcessHolsterToLostActionSet(holsterToBeProcessed : LostFindsHolster) : ILostActionSet {
    
    const holsterActionsToProcess : IActionHolster[] = [];

    holsterToBeProcessed.Holster.forEach((actionInHolster : IActionHolster) => {           
        const actionToAdd : IActionHolster = {...actionInHolster};
        holsterActionsToProcess.push(actionToAdd);             
    });
    return {
        id: Math.random()*10000,
        nameOfSet: holsterToBeProcessed.SelectedRole + "",
        roleTypeOfSet: holsterToBeProcessed.SelectedRole,
        weightOfSet: holsterToBeProcessed.CurrentWeight,
        setLostActionContents: holsterActionsToProcess,
        PrepopLostActions: holsterToBeProcessed.PrepopHolster,
        HolsterTimeline: holsterToBeProcessed.HolsterTimeline
    };
}

/**
 * Encodes a holster into a link
 * @param holsterToCreateLinkFor 
 * @returns 
 */
export function EncodeHolsterAsALink(holsterToCreateLinkFor : LostFindsHolster) : string {
    return window.btoa(JSON.stringify(ProcessHolsterToLostActionSet(holsterToCreateLinkFor)));
}

/**
 * Encodes a lost action set into a link
 * @param holsterToCreateLinkFor 
 * @returns 
 */
export function EncodeLostActionSetAsALink(holsterToCreateLinkFor : ILostActionSet) : string {
    return window.btoa(JSON.stringify(holsterToCreateLinkFor));
}

/**
 * Sets the current website link to the encoded link
 * @param encodedLinkForHolsterState 
 */
export function SetWebsiteLinkToHolsterAndCopyToClipBoard(encodedLinkForHolsterState : string) {
    history.replaceState(null, document.title, encodedLinkForHolsterState);
    navigator.clipboard.writeText(window.location.href);
}

/**
 * Creates and returns the lost finds holster window
 * @returns the lost finds holster component
 */
export const LostFindsHolsterInformation = () => {   
    const dispatch = useAppDispatch();

    const lostFindsHolster = useAppSelector((state) => state.LostFindsHolster);
    console.log(lostFindsHolster);

    const roleImageToUse = GetRoleImageForCurrentRole(lostFindsHolster.SelectedRole);
    const lostFindsHolsterActionBoxes : JSX.Element[][] = CreateLostFindsHolsterActionBoxes();
    const lostFindsHolsterActionCategoryCounts : number[] = Array<number>(7).fill(0);

    lostFindsHolsterActionBoxes.forEach((lostFindsHolsterActionBoxCategory, indexCategory : number) => {
        lostFindsHolsterActionBoxCategory.forEach((lostFindsHolsterActionBox) => {
            if(lostFindsHolsterActionBox.type == "div") {
                lostFindsHolsterActionCategoryCounts[indexCategory] += 1;
            }
        });
    });

    /**
     * Rotates the role to display in the holster menu depending on what the currently selected role is
     * Rotation: Tank -> Healer -> Melee -> Physical Ranged -> Magical Ranged -> Loop
     */
    function LostFindsHolsterCycleSelectedRole() {
        let roleToShow : string = "";
        switch (lostFindsHolster.SelectedRole) {
            case "Tank":
                dispatch(setSelectedRole("Healer"));
                roleToShow = "Healer";
                break;
            case "Healer":
                dispatch(setSelectedRole("Melee"));
                roleToShow = "Melee";
                break;
            case "Melee":
                dispatch(setSelectedRole("Physical Ranged"));
                roleToShow = "Physical Ranged";
                break;
            case "Physical Ranged":
                dispatch(setSelectedRole("Magical Ranged"));
                roleToShow = "Magical Ranged";               
                break;
            case "Magical Ranged":
                dispatch(setSelectedRole("Tank"));
                roleToShow = "Tank";
                break;
        }
        LostFindsHolsterRoleOfSetChangeNotification(roleToShow);
    }

    /**
     * Displays the current role the holster is made for in the notification box for 3 seconds
     * @param roleToShow, the current role that will be displayed to the user
     */
    function LostFindsHolsterRoleOfSetChangeNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;   
        savedSetNotificationBox.style.display = "block";
        savedSetNotificationBox.childNodes[0].textContent = roleToShow + " selected.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    /**
     * Checks if the notification box has the same text now as it did 3 seconds ago.
     * If it does, hides the text. Else does nothing (for multiple notification changes)
     * @param expectedText, the text that notification box is expected to be
     */
    function LostFindsHolsterSetSavedNotificationHide(expectedText : string) {  
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
            savedSetNotificationBox.style.display = "none";
            savedSetNotificationBox.childNodes[0].textContent = "";
            savedSetNotificationBox.style.color = "";
        }
        
    }

    /**
     * Gathers the current state of the holster, quantities of actions in the holster, the holster weight, the selected role, the prepop actions and the holster timeline
     * information and saves it as a new saved set, if the current weight is valid
     */
    function HandleSaveHolsterClick() {
        if(lostFindsHolster.CurrentWeight <= 99 && lostFindsHolster.CurrentWeight > 0) {
            console.log(lostFindsHolster);
            dispatch(addHolsterToSavedSets(ProcessHolsterToLostActionSet(lostFindsHolster)));
           
            const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
            savedSetNotificationBox.childNodes[0].textContent = "Set Saved!";
            savedSetNotificationBox.style.color = "#A5D6A7";
            savedSetNotificationBox.style.display = "block";
            setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
        }
        else {
            // logic for user to know their weight isn't 0 < weight of set < 100
            console.log("Bad Holster Weight");
            const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
            savedSetNotificationBox.childNodes[0].textContent = "Holster maximum capacity must be between 1 and 99!";
            savedSetNotificationBox.style.color = "red";
            savedSetNotificationBox.style.display = "block";
            setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
        }  
    }

    /**
     * Clears the holster and dropdown states
     */
    function HandleClearHolsterClick() {
        dispatch(clearHolster());
        dispatch(clearDropdownData());
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        savedSetNotificationBox.childNodes[0].textContent = "Holster Cleared.";
        savedSetNotificationBox.style.color = "white";
        savedSetNotificationBox.style.display = "block";
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
    }

    /**
     * Creates a link for the holster that is currently set out
     */
    function HandleCreateLinkForHolster() {
        const lostActionSet = ProcessHolsterToLostActionSet(lostFindsHolster);
        const { ["id"]: idOfSet, ...lostActionSetNoId } = lostActionSet;
        console.log(lostActionSet);
        axios.post(`/api/findholster`, { set: lostActionSetNoId, idOfSet: idOfSet}).then((response) => {
            SetWebsiteLinkToHolsterAndCopyToClipBoard(response.data.keyUsed);
        });

        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        savedSetNotificationBox.childNodes[0].textContent = "Link created and copied to clipboard!";
        savedSetNotificationBox.style.color = "white";
        savedSetNotificationBox.style.display = "block";
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 6000, savedSetNotificationBox.childNodes[0].textContent);

    }

    return <div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">
        
        {lostFindsHolsterActionCategoryCounts[0] > 0 ? <div className="LostFindsHolsterActionCategoryOffensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[0]}

        {lostFindsHolsterActionCategoryCounts[1] > 0 ? <div className="LostFindsHolsterActionCategoryDefensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Defensive</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[1]}  

        {lostFindsHolsterActionCategoryCounts[2] > 0 ? <div className="LostFindsHolsterActionCategoryRestorative">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Restorative</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[2]} 

        {lostFindsHolsterActionCategoryCounts[3] > 0 ? <div className="LostFindsHolsterActionCategoryBeneficial">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Beneficial</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[3]}  

        {lostFindsHolsterActionCategoryCounts[4] > 0 ? <div className="LostFindsHolsterActionCategoryTactical">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Tactical</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[4]}  

        {lostFindsHolsterActionCategoryCounts[5] > 0 ? <div className="LostFindsHolsterActionCategoryDetrimental">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Detrimental</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[5]}  

        {lostFindsHolsterActionCategoryCounts[6] > 0 ? <div className="LostFindsHolsterActionCategoryItemRelated">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Item-Related</span>
            </div>
        </div> : <></>}
        {lostFindsHolsterActionBoxes[6]}  

    </div>
    {AutomateSeparator()}
    <div className="LostFindsHolsterWeightAndCapacityBox">

        <div className="LostFindsHolsterSelectedActionWeight">

            <div className="LostFindsHolsterRoleSelection">
                <img onClick={LostFindsHolsterCycleSelectedRole} title="Click to change role" src={roleImageToUse}></img>
                
            </div>

            <div className="LostFindsHolsterCreateLink">
                <img onClick={HandleCreateLinkForHolster} title="Copy To Clipboard and Create Link" src={CopyToClipboardIcon}></img>
            </div>
           
            <div className="LostFindsHolsterSelectedActionWeightText">
                <span>Selected Action Weight</span>
            </div>

            <div className="LostFindsHolsterSelectedActionWeightDisplay">
                <span>{lostFindsHolster.SelectedWeight}</span>  
            </div>

            <div className="LostFindsHolsterSelectedActionWeightBlankSpace"></div>
            
        </div>

        <div className="LostFindsHolsterMaximumCapacity">

            <div className="LostFindsHolsterSaveHolster">
                <img onClick={HandleSaveHolsterClick} title="Save this holster." src={SaveSetImage}></img>
            </div>

            <div className="LostFindsHolsterClearHolster">
                <img onClick={HandleClearHolsterClick} title="Clear the holster." src={ClearHolsterImage}></img>
            </div>

            

            <div className="LostFindsHolsterMaximumCapacityText">
                <span>Maximum Capacity</span>
            </div>

            <div className="LostFindsHolsterMaximumCapacityNumber">
                <span style={{color: lostFindsHolster.CurrentWeight > 99 ? "#EE6A97" : "#F9CEA5",
                    textShadow: lostFindsHolster.CurrentWeight > 99 ? "-1px 0px 1px #DC3C77, 1px 0px 1px #DC3C77, 0px 1px 1px #DC3C77, 0px -1px 1px #DC3C77" : "-1px 0px 1px #C07A3C, 1px 0px 1px #C07A3C, 0px 1px 1px #C07A3C, 0px -1px 1px #C07A3C"  
                }}>{lostFindsHolster.CurrentWeight}</span>
            </div>

            <div className="LostFindsHolsterMaximumCapacity200">
                <span>/ 200</span>
            </div>  

            
        </div>  
        <div id="LostFindsHolsterSetSavedNotificationBox" className="LostFindsHolsterSetSavedNotification">
                <span></span>
        </div>
    </div>
</div>
}
export default LostFindsHolsterInformation;