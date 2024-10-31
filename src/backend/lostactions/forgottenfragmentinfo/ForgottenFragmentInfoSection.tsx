import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSection.scss';

import GenerateForgottenFragmentDivs from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentList';
import GenerateForgottenFragmentDetailedInfoSection from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentDetailedInfo';

export const ForgottenFragmentInnerContainer = () => {
    const ForgottenFragmentDivs : React.JSX.Element[] = GenerateForgottenFragmentDivs();
    const ForgottenFragmentDetailedInfo : React.JSX.Element = GenerateForgottenFragmentDetailedInfoSection();
    
    return <div className="ForgottenFragmentInfoInnerContainer">
            <div className="ForgottenFragmentInfoFragmentListContainer">
                {ForgottenFragmentDivs}
            </div>
            <div></div>
            <div className="ForgottenFragmentInfoFragmentInformationContainer">
                {ForgottenFragmentDetailedInfo}
            </div>
    </div>
}
export default ForgottenFragmentInnerContainer;