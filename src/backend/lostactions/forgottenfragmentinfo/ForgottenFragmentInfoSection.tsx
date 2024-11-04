import { useAppDispatch, useAppSelector } from '@backend/hooks';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSection.scss';

import GenerateForgottenFragmentDivs from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentList';
import GenerateForgottenFragmentDetailedInfoSection from '@backend/lostactions/forgottenfragmentinfo/ForgottenFragmentInfoSectionFragmentDetailedInfo';

import { setFilterValue, setIsSortedAscending } from '@backend/lostactions/ForgottenFragmentInfoSlice';


export const ForgottenFragmentInnerContainer = () => {
    const ForgottenFragmentDivs : React.JSX.Element[] = GenerateForgottenFragmentDivs();
    const ForgottenFragmentDetailedInfo : React.JSX.Element = GenerateForgottenFragmentDetailedInfoSection();
    const dispatch = useAppDispatch();
    const isSortedAscending = useAppSelector((state) => state.ForgottenFragmentInfo.isSortedAscending);
    const currentFilter = useAppSelector((state) => state.ForgottenFragmentInfo.currentFilter);

    function HandleSortFragmentsByName() {
        if(currentFilter == "name") {
            dispatch(setIsSortedAscending(!isSortedAscending));
        }
        else {
            dispatch(setFilterValue("name"));
            dispatch(setIsSortedAscending(true));
        }
    }

    function HandleSortFragmentsByRank() {
        if(currentFilter == "rank") {
            dispatch(setIsSortedAscending(!isSortedAscending));
        }
        else {
            dispatch(setFilterValue("rank"));
            dispatch(setIsSortedAscending(true));
        }
    }

    const arrowDirection = isSortedAscending ? <span>&uarr;</span> : <span>&darr;</span>
    
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
                        
                        {ForgottenFragmentDivs}
                    </div>
                </div>
            <div></div>
            <div className="ForgottenFragmentInfoFragmentInformationContainer">
                {ForgottenFragmentDetailedInfo}
            </div>
    </div>
}
export default ForgottenFragmentInnerContainer;