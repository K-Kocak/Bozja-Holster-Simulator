import { useAppDispatch, useAppSelector } from '@backend/hooks';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSection.scss';

import GenerateForgottenFragmentDivs from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentList';
import GenerateForgottenFragmentDetailedInfoSection from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentDetailedInfo';

import { setFilterValue, setIsSortedAscending } from '@backend/lostactions/ForgottenFragmentInfoSlice';

/**
 * Creates and returns the inner part of the forgotten fragment container. This does not include
 * The background of the container and the size of it.
 * @returns the contents of the forgotten fragment container
 */
export const ForgottenFragmentInnerContainer = () => {
    const dispatch = useAppDispatch();

    const forgottenFragmentDivs : React.JSX.Element[] = GenerateForgottenFragmentDivs();
    const forgottenFragmentDetailedInfo : React.JSX.Element = GenerateForgottenFragmentDetailedInfoSection();

    const forgottenFragmentInfo = useAppSelector((state) => state.ForgottenFragmentInfo);

    function HandleSortFragmentsByName() {
        if(forgottenFragmentInfo.currentFilter == "name") {
            dispatch(setIsSortedAscending(!forgottenFragmentInfo.isSortedAscending));
        }
        else {
            dispatch(setFilterValue("name"));
            dispatch(setIsSortedAscending(true));
        }
    }

    function HandleSortFragmentsByRank() {
        if(forgottenFragmentInfo.currentFilter == "rank") {
            dispatch(setIsSortedAscending(!forgottenFragmentInfo.isSortedAscending));
        }
        else {
            dispatch(setFilterValue("rank"));
            dispatch(setIsSortedAscending(true));
        }
    }

    const arrowDirection = forgottenFragmentInfo.isSortedAscending ? <span>&uarr;</span> : <span>&darr;</span>
    
    return <div className="ForgottenFragmentInfoInnerContainer">
                <div className="ForgottenFragmentInfoFragmentListContainer">
                    <div className="ForgottenFragmentInfoFragmentListFilters">
                            <div className="ForgottenFragmentInfoFragmentListFiltersText">
                                <span>Sort Fragments By:</span>
                            </div>
                            <div onClick={HandleSortFragmentsByName} className="ForgottenFragmentInfoFragmentListFiltersSortByName">
                                <span>Name</span>
                            </div>
                            <div onClick={HandleSortFragmentsByRank} className="ForgottenFragmentInfoFragmentListFiltersSortByRank">
                                <span>Rank of Unlock</span>
                            </div>
                            <div className="ForgottenFragmentInfoFragmentListFiltersAscendingArrow">
                                {arrowDirection}
                            </div>
                    </div>
                    <div className="ForgottenFragmentInfoFragmentListDisplayContainer">                     
                        {forgottenFragmentDivs}
                    </div>
                </div>
            <div></div>
            <div className="ForgottenFragmentInfoFragmentInformationContainer">
                {forgottenFragmentDetailedInfo}
            </div>
    </div>
}
export default ForgottenFragmentInnerContainer;