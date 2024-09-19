import '@css/ui/components/ForgottenFragmentInfoSection.scss';
import GenerateForgottenFragmentDivs from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentList';

export const ForgottenFragmentInnerContainer = () => {
    const ForgottenFragmentDivs : React.JSX.Element[] = GenerateForgottenFragmentDivs();
    return <div className="ForgottenFragmentInfoInnerContainer">
            <div className="ForgottenFragmentInfoFragmentListContainer">
                {ForgottenFragmentDivs}
            </div>
            <div></div>
            <div className="ForgottenFragmentInfoFragmentInformationContainer">
                <span>ForgottenFragmentInfoFragmentInformationContainer</span>
            </div>
    </div>
}
export default ForgottenFragmentInnerContainer;