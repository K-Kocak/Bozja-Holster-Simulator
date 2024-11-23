import { useAppDispatch, useAppSelector } from '../../hooks';

import { clearHolster, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';
import { addHolsterToSavedSets } from '@backend/lostactions/LostActionSetSlice';

import { AutomateSeparator } from '@app/backend/lostactions/lostfindscache/LostActionsDivGen';

import CreateLostFindsHolsterActionBoxes from '@app/backend/lostactions/lostfindsholster/LostFindsHolsterActionBoxGen';

import { FFXIVRolePicturesAsObject } from '@backend/lostactions/RolePictureImport';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';
import SaveSetImage from '@ui/pictures/BozjaSaveSetImage62x62.png';
import ClearHolsterImage from '@ui/pictures/FFXIVExitGameIcon70x70.png';

import '@css/ui/components/LostFindsHolster/LostFindsHolsterContents.scss';
import { clearDropdownData } from '../LostActionDropdownDataSlice';
//import '@css/ui/components/LostActionsDivGen.scss';

const LostFindsHolsterSeparator = AutomateSeparator();

export function RetrieveRoleImageUsingLostFindsHolsterState(roleToUse : string) : string {
    switch (roleToUse) {
        case "Tank":
            return FFXIVRolePicturesAsObject.Tank;
        case "Healer":
            return FFXIVRolePicturesAsObject.Healer;
        case "Melee":
            return FFXIVRolePicturesAsObject.MeleeDPS;
        case "Physical Ranged":
            return FFXIVRolePicturesAsObject.PhysicalRangedDPS;
        case "Magical Ranged":
            return FFXIVRolePicturesAsObject.MagicalRangedDPS;
    }
    return "";
}

export const LostFindsHolsterInformation = () => {   
    const dispatch = useAppDispatch();

    const currentWeight = useAppSelector((state) => state.LostFindsHolster.CurrentWeight);
    const selectedWeight = useAppSelector((state) => state.LostFindsHolster.SelectedWeight);
    const currentHolster = useAppSelector((state) => state.LostFindsHolster.Holster);
    const actionQuantities = useAppSelector((state) => state.LostFindsHolster.ActionQuantities);
    const roleTypeOfHolster = useAppSelector((state) => state.LostFindsHolster.SelectedRole);
    console.log(currentHolster, actionQuantities, selectedWeight, currentWeight, roleTypeOfHolster);
    
    const roleImageToUse = RetrieveRoleImageUsingLostFindsHolsterState(roleTypeOfHolster);
    const PrepopHolster = useAppSelector((state) => state.LostFindsHolster.PrepopHolster);
    const holsterTimeline = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline);
    console.log("lostfindsholster");
    const LostFindsHolsterActionBoxes = CreateLostFindsHolsterActionBoxes();
    const LostFindsHolsterActionCategoryCounts : number[] = Array<number>(7).fill(0);

    LostFindsHolsterActionBoxes.forEach((LostFindsHolsterActionBoxCategory, indexCategory : number) => {
        LostFindsHolsterActionBoxCategory.forEach((LostFindsHolsterActionBox) => {
            if(LostFindsHolsterActionBox.type == "div") {
                LostFindsHolsterActionCategoryCounts[indexCategory] += 1;
            }
        });
    });

    function LostFindsHolsterCycleSelectedRole() {
        let roleToShow : string = "";
        switch (roleTypeOfHolster) {
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

    function LostFindsHolsterRoleOfSetChangeNotification(roleToShow : string) {     
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;   
        savedSetNotificationBox.style.display = "block";
        savedSetNotificationBox.childNodes[0].textContent = roleToShow + " selected.";
        savedSetNotificationBox.style.color = "white";   
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent); 
    }

    function LostFindsHolsterSetSavedNotificationHide(expectedText : string) {  
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        if(savedSetNotificationBox.childNodes[0].textContent?.includes(expectedText)) {
            savedSetNotificationBox.style.display = "none";
            savedSetNotificationBox.childNodes[0].textContent = "";
            savedSetNotificationBox.style.color = "";
        }
        
    }

    function HandleSaveHolsterClick() {
        if(currentWeight <= 99 && currentWeight > 0) {
            dispatch(addHolsterToSavedSets([currentHolster, actionQuantities, currentWeight, roleTypeOfHolster, PrepopHolster, holsterTimeline])); 
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

    function HandleClearHolsterClick() {
        dispatch(clearHolster());
        dispatch(clearDropdownData());
        const savedSetNotificationBox = document.getElementById("LostFindsHolsterSetSavedNotificationBox") as HTMLElement;
        savedSetNotificationBox.childNodes[0].textContent = "Holster Cleared.";
        savedSetNotificationBox.style.color = "white";
        savedSetNotificationBox.style.display = "block";
        setTimeout(LostFindsHolsterSetSavedNotificationHide, 3000, savedSetNotificationBox.childNodes[0].textContent);
    }

    return <div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">
        
        {LostFindsHolsterActionCategoryCounts[0] > 0 ? <div className="LostFindsHolsterActionCategoryOffensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[0]}

        {LostFindsHolsterActionCategoryCounts[1] > 0 ? <div className="LostFindsHolsterActionCategoryDefensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Defensive</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[1]}  

        {LostFindsHolsterActionCategoryCounts[2] > 0 ? <div className="LostFindsHolsterActionCategoryRestorative">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Restorative</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[2]} 

        {LostFindsHolsterActionCategoryCounts[3] > 0 ? <div className="LostFindsHolsterActionCategoryBeneficial">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Beneficial</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[3]}  

        {LostFindsHolsterActionCategoryCounts[4] > 0 ? <div className="LostFindsHolsterActionCategoryTactical">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Tactical</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[4]}  

        {LostFindsHolsterActionCategoryCounts[5] > 0 ? <div className="LostFindsHolsterActionCategoryDetrimental">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Detrimental</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[5]}  

        {LostFindsHolsterActionCategoryCounts[6] > 0 ? <div className="LostFindsHolsterActionCategoryItemRelated">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Item-Related</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[6]}  

    </div>
    {LostFindsHolsterSeparator}
    <div className="LostFindsHolsterWeightAndCapacityBox">

        <div className="LostFindsHolsterSelectedActionWeight">

            <div className="LostFindsHolsterRoleSelection">
                <img onClick={LostFindsHolsterCycleSelectedRole} title="Click to change role" src={roleImageToUse}></img>
                
            </div>
           
            <div className="LostFindsHolsterSelectedActionWeightText">
                <span>Selected Action Weight</span>
            </div>

            <div className="LostFindsHolsterSelectedActionWeightDisplay">
                <span>{selectedWeight}</span>  
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
                <span style={{color: currentWeight > 99 ? "#EE6A97" : "#F9CEA5",
                    textShadow: currentWeight > 99 ? "-1px 0px 1px #DC3C77, 1px 0px 1px #DC3C77, 0px 1px 1px #DC3C77, 0px -1px 1px #DC3C77" : "-1px 0px 1px #C07A3C, 1px 0px 1px #C07A3C, 0px 1px 1px #C07A3C, 0px -1px 1px #C07A3C"  
                }}>{currentWeight}</span>
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