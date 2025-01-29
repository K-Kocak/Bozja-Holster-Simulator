import { useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentDetailedInfo.scss';

import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';
import ForgottenFragmentLostActionList from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentListActions';
import ForgottenFragmentLootDropsList from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentListLootList';
import { AutomateSeparator } from '../lostfindscache/LostActionsDivGen';
//TO DO: INTERACTIVE MAP FOR FRAGMENTS

/**
 * Creates and returns the forgotten fragment detailed info section
 * @returns A forgotten fragment's detailed info (such as what lost actions it gives, loot drops etc)
 */
const GenerateForgottenFragmentDetailedInfoSection = () => {
    const currentSelectedForgottenFragment = useAppSelector((state) => state.ForgottenFragmentInfo.idOfFragmentDisplayed);

    if(currentSelectedForgottenFragment == -1) {
        // TO DO: Change this to display text encouraging the user to select a forgotten fragment
        return <></>;
    }

    /*function HandleViewMapHover(event : BaseSyntheticEvent) {
        console.log(event);
        event.target.nextSibling.classList.toggle("hidden");
    }*/

    const forgottenFragmentInUse = ForgottenFragmentsAsObjectArray[currentSelectedForgottenFragment];
    const forgottenFragmentLostActionListToDisplay : React.JSX.Element = ForgottenFragmentLostActionList(forgottenFragmentInUse);
    const forgottenFragmentLootListToDisplay : React.JSX.Element = ForgottenFragmentLootDropsList(forgottenFragmentInUse);
    // map stuff is hidden for now

    /*
    <span onMouseEnter={HandleViewMapHover} onMouseLeave={HandleViewMapHover}>View Map</span>
    <div className="ForgottenFragmentDetailedInfoMapImg hidden">
        <img src={ForgottenFragmentInUse.descriptionMapLocation}></img>
        
    </div>

    */

    return (
    <div className="ForgottenFragmentDetailedInfoContainer">
        <div className="ForgottenFragmentDetailedInfoNameImgMap">
            <div className="ForgottenFragmentDetailedInfoRightArrow">
                <span>={'>'}</span>
            </div>
            <div className="ForgottenFragmentDetailedInfoImage">
                {<img src={forgottenFragmentInUse.img}></img>}
            </div>
            <div className="ForgottenFragmentDetailedInfoName">
                <span>{forgottenFragmentInUse.name}</span>
            </div>
            <div className="ForgottenFragmentDetailedInfoMap hidden">
                
            </div>
        </div>
        {AutomateSeparator()}
        <div className="ForgottenFragmentDetailedInfoActionsAndLootDrops">
            <div className="ForgottenFragmentDetailedInfoActions">
                <div className="ForgottenFragmentDetailedInfoAppraisal">
                    <span>Appraise at Rank<span className="ForgottenFragmentDetailedInfoAppraisalRank"> {forgottenFragmentInUse.rank}</span>  for . . .</span>
                </div>
                {forgottenFragmentLostActionListToDisplay}
            </div>
            <div className="ForgottenFragmentDetailedInfoLootDrops">
                <div className="ForgottenFragmentDetailedInfoLootDropText">
                    <span>Fragment Sources . . .</span>
                </div>
                {forgottenFragmentLootListToDisplay}
            </div>
        </div>
    </div>
);
}
export default GenerateForgottenFragmentDetailedInfoSection;