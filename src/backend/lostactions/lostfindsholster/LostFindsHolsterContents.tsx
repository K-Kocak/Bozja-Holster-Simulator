import '@css/ui/components/LostFindsHolsterContents.scss';
//import '@css/ui/components/LostActionsDivGen.scss';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';

import SaveSetImage from '@ui/pictures/BozjaSaveSetImage81x81.png';
import ClearHolsterImage from '@ui/pictures/FFXIVExitGameIcon.png';

import { AutomateSeparator } from '@app/backend/lostactions/lostfindscache/LostActionsDivGen';

import CreateLostFindsHolsterActionBoxes from '@app/backend/lostactions/lostfindsholster/LostFindsHolsterActionBoxGen';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { FFXIVRolePicturesAsObject } from '@backend/lostactions/RolePictureImport';

import { clearHolster, setSelectedRole } from '@backend/lostactions/LostFindsHolsterSlice';
import { addHolsterToSavedSets } from '@backend/lostactions/LostActionSetSlice';

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
    const savedSets = useAppSelector((state) => state.LostActionSets.Sets);
    console.log(savedSets);
    const roleImageToUse = RetrieveRoleImageUsingLostFindsHolsterState(roleTypeOfHolster);
    const PrepopHolster = useAppSelector((state) => state.LostFindsHolster.PrepopHolster);

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
        switch (roleTypeOfHolster) {
            case "Tank":
                dispatch(setSelectedRole("Healer"));
                break;
            case "Healer":
                dispatch(setSelectedRole("Melee"));
                break;
            case "Melee":
                dispatch(setSelectedRole("Physical Ranged"));
                break;
            case "Physical Ranged":
                dispatch(setSelectedRole("Magical Ranged"));               
                break;
            case "Magical Ranged":
                dispatch(setSelectedRole("Tank"));
                break;
        }
    }

    function HandleSaveHolsterClick() {
        dispatch(addHolsterToSavedSets([currentHolster, actionQuantities, currentWeight, roleTypeOfHolster, PrepopHolster]));
    }

    function HandleClearHolsterClick() {
        dispatch(clearHolster());
    }

    return <div className="LostFindsHolsterInnerContainer">
    <div key={1001} className="LostFindsHolsterPlayerHolster">
        
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
    </div>
</div>
}
export default LostFindsHolsterInformation;