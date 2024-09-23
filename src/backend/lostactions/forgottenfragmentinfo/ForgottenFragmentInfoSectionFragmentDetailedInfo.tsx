import { BaseSyntheticEvent } from 'react';

import { useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/ForgottenFragmentInfoSectionFragmentDetailedInfo.scss';

import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

import ForgottenFragmentLostActionList from './ForgottenFragmentInfoSectionFragmentListActions';
import ForgottenFragmentLootDropsList from './ForgottenFragmentInfoSectionFragmentListLootList';

import TempImage from '@ui/pictures/TemporaryFateCEIcons/Zadnor.jpg';

const GenerateForgottenFragmentDetailedInfoSection = () => {
    const currentSelectedForgottenFragment = useAppSelector((state) => state.ForgottenFragmentInfo.idOfFragmentDisplayed);
    console.log(currentSelectedForgottenFragment);

    
    if(currentSelectedForgottenFragment == -1) {
        return <></>;
    }

    function HandleViewMapHover(event : BaseSyntheticEvent) {
        console.log(event);
        event.target.nextSibling.classList.toggle("hidden");
    }

    const ForgottenFragmentInUse = ForgottenFragmentsAsObjectArray[currentSelectedForgottenFragment];
    const ForgottenFragmentLostActionListToDisplay : React.JSX.Element = ForgottenFragmentLostActionList(ForgottenFragmentInUse);
    const ForgottenFragmentLootListToDisplay : React.JSX.Element = ForgottenFragmentLootDropsList(ForgottenFragmentInUse);

    return (
    <div className="ForgottenFragmentDetailedInfoContainer">
        <div className="ForgottenFragmentDetailedInfoNameImgMap">
            <div className="ForgottenFragmentDetailedInfoRightArrow">
                <span>={'>'}</span>
            </div>
            <div className="ForgottenFragmentDetailedInfoImage">
                {<img src={ForgottenFragmentInUse.img}></img>}
            </div>
            <div className="ForgottenFragmentDetailedInfoName">
                <span>{ForgottenFragmentInUse.name}</span>
            </div>
            <div className="ForgottenFragmentDetailedInfoMap">
                <span onMouseEnter={HandleViewMapHover} onMouseLeave={HandleViewMapHover}>View Map</span>
                <div className="ForgottenFragmentDetailedInfoMapImg hidden">
                    <img src={TempImage}></img>
                   
                </div>
            </div>
        </div>
        <div className="ForgottenFragmentDetailedInfoActionsAndLootDrops">
            <div className="ForgottenFragmentDetailedInfoActions">
                <div className="ForgottenFragmentDetailedInfoAppraisal">
                    <span>Appraise at Rank<span className="ForgottenFragmentDetailedInfoAppraisalRank"> {ForgottenFragmentInUse.rank}</span>  for . . .</span>
                </div>
                {ForgottenFragmentLostActionListToDisplay}
            </div>
            <div className="ForgottenFragmentDetailedInfoLootDrops">
                <div className="ForgottenFragmentDetailedInfoLootDropText">
                    <span>Popular Farm Locations . . .</span>
                </div>
                {ForgottenFragmentLootListToDisplay}
            </div>
        </div>
    </div>
);
}
export default GenerateForgottenFragmentDetailedInfoSection;