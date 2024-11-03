import IForgottenFragment from '@backend/interfaces/IForgottenFragment';
import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentList.scss';

import { useAppDispatch, useAppSelector } from '@app/backend/hooks';
import { setFragmentHovered, setFragmentToDisplay } from '@backend/lostactions/ForgottenFragmentInfoSlice';


function CreateForgottenFragmentDiv(forgottenFragment : IForgottenFragment) {
    const dispatch = useAppDispatch();
    
    function HandleForgottenFragmentDivClick() {
        dispatch(setFragmentToDisplay(forgottenFragment.id));
    }

    function HandleMouseEnter() {
        dispatch(setFragmentHovered(forgottenFragment.id));
    }

    function HandleMouseLeave() {
        dispatch(setFragmentHovered(-1));
    }

    return(
        <div onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}key={forgottenFragment.id} id={forgottenFragment.id.toString()} onClick={HandleForgottenFragmentDivClick}className="ForgottenFragmentDiv">
            <div className="ForgottenFragmentDivImg">
                <img src={forgottenFragment.img}></img>
            </div>
            <div className="ForgottenFragmentDivName">
                <span>{forgottenFragment.name}</span>
            </div>
        </div>
    )
}

function SortForgottenFragmentObjectArray(forgottenFragmentObjectArray : IForgottenFragment[], isAscending : boolean, filterToUse : "name" | "rank") : IForgottenFragment[] {
    const isAscendingModifier = isAscending ? 1 : -1;
    if(filterToUse == "name") {
        forgottenFragmentObjectArray.sort((a, b) => {
            if(a.name < b.name) {
                return -1 * isAscendingModifier;
            }
            else if(a.name > b.name) {
                return 1 * isAscendingModifier;
            }
            else return 0;
        })
    }
    else if(filterToUse == "rank") {
        forgottenFragmentObjectArray.sort((a, b) => {
            if(a.rank < b.rank) {
                return -1 * isAscendingModifier;
            }
            else if(a.rank > b.rank) {
                return 1 * isAscendingModifier;
            }
            else return 0;
        })
    }
    
    return forgottenFragmentObjectArray;
}

const GenerateForgottenFragmentDivs = () => {
    const currentFilter = useAppSelector((state) => state.ForgottenFragmentInfo.currentFilter);
    const isAscending = useAppSelector((state) => state.ForgottenFragmentInfo.isSortedAscending);
    const forgottenFragmentObjectArrayCopy : IForgottenFragment[] = ForgottenFragmentsAsObjectArray;
    const forgottenFragmentCombinedObjectArray : IForgottenFragment[][] = [];
    const forgottenFragmentDivArray : React.JSX.Element[] = [];
    const sortedForgottenFragmentArray : IForgottenFragment[] = [];
    // 0 - 15 bozja
    // 16 - 23 drs
    // 24 - 35 zadnor
    forgottenFragmentCombinedObjectArray.push(forgottenFragmentObjectArrayCopy.slice(0, 16));
    forgottenFragmentCombinedObjectArray.push(forgottenFragmentObjectArrayCopy.slice(16, 24));
    forgottenFragmentCombinedObjectArray.push(forgottenFragmentObjectArrayCopy.slice(24, 36));
    forgottenFragmentCombinedObjectArray.forEach((forgottenFragmentZone) => {
        const sortedForgottenFragmentZone : IForgottenFragment[] = SortForgottenFragmentObjectArray(forgottenFragmentZone, isAscending, currentFilter);
        sortedForgottenFragmentArray.push(...sortedForgottenFragmentZone);
    })

    sortedForgottenFragmentArray.forEach((forgottenFragment) => {
        const forgottenFragmentDiv : React.JSX.Element = CreateForgottenFragmentDiv(forgottenFragment);
        forgottenFragmentDivArray.push(forgottenFragmentDiv);
    })
    return forgottenFragmentDivArray;
}
export default GenerateForgottenFragmentDivs;