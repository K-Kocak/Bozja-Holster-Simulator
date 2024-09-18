import '@css/ui/components/ForgottenFragmentInfo.scss';

import ForgottenFragmentInnerContainer from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSection';

function ForgottenFragmentInfo() {
    const ForgottenFragmentInnerInfoContainer = ForgottenFragmentInnerContainer();
    return (
        <div id="ForgottenFragmentContainer">
            {ForgottenFragmentInnerInfoContainer}
        </div>
    )
    
}

export default ForgottenFragmentInfo;