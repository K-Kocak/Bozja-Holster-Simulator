import { useAppSelector } from '@app/backend/hooks';
import '@css/ui/components/ForgottenFragmentInfoSectionFragmentDetailedInfo.scss';
import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

const GenerateForgottenFragmentDetailedInfoSection = () => {
    const currentSelectedForgottenFragment = useAppSelector((state) => state.ForgottenFragmentInfo.idOfFragmentDisplayed);
    console.log(currentSelectedForgottenFragment);
    return (
    <div className="ForgottenFragmentDetailedInfoContainer">
        <div className="ForgottenFragmentDetailedInfoNameImgMap">
            <div className="ForgottenFragmentDetailedInfoRightArrow">

            </div>
            <div className="ForgottenFragmentDetailedInfoImage">
                {currentSelectedForgottenFragment != -1 ? <img src={ForgottenFragmentsAsObjectArray[currentSelectedForgottenFragment].img}></img> : <></>}
            </div>
            <div className="ForgottenFragmentDetailedInfoName">

            </div>
            <div className="ForgottenFragmentDetailedInfoMap">
            </div>
        </div>
    </div>
);
}
export default GenerateForgottenFragmentDetailedInfoSection;