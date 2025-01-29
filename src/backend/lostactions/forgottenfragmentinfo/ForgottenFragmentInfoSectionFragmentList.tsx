import IForgottenFragment from '@backend/interfaces/IForgottenFragment';
import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentList.scss';

import { useAppDispatch, useAppSelector } from '@app/backend/hooks';
import { setFragmentHovered, setFragmentToDisplay } from '@backend/lostactions/ForgottenFragmentInfoSlice';

/**
 * Creates a JSX.Element for a forgotten fragment in the forgotten fragment section
 * @param forgottenFragment, the forgotten fragment you want to create the div for
 * @returns a JSX.Element containing an image of the forgotten fragment and its name
 */
function CreateForgottenFragmentDiv(forgottenFragment : IForgottenFragment) {
    const dispatch = useAppDispatch();
    
    /**
     * Changes fragment to display state if this forgotten fragment is clicked on
     */
    function HandleForgottenFragmentDivClick() {
        dispatch(setFragmentToDisplay(forgottenFragment.id));
    }

    /**
     * Changes fragment hovered state when mouse enters this forgotten fragment div
     */
    function HandleMouseEnter() {
        dispatch(setFragmentHovered(forgottenFragment.id));
    }

    /**
     * Resets fragment hovered state when mouse leaves this forgotten fragment div
     */
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

/**
 * Sorts a forgotten fragment array by name or rank and ascending or descending
 * @param forgottenFragmentObjectArray, the array of forgotten fragments to sort
 * @param isAscending, whether to sort ascending or descending
 * @param filterToUse, whether to sort by name or by rank
 * @returns an array containing the forgotten fragments sorted
 */
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

/**
 * Creates an array of the forgotten fragments containing a picture of the forgotten fragment and its name
 * @returns An array containing JSX.Elements of every forgotten fragment
 */
const GenerateForgottenFragmentDivs = () => {
    const forgottenFragmentInfo = useAppSelector((state) => state.ForgottenFragmentInfo);

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
        const sortedForgottenFragmentZone : IForgottenFragment[] = SortForgottenFragmentObjectArray(forgottenFragmentZone, forgottenFragmentInfo.isSortedAscending, forgottenFragmentInfo.currentFilter);
        sortedForgottenFragmentArray.push(...sortedForgottenFragmentZone);
    })

    sortedForgottenFragmentArray.forEach((forgottenFragment) => {
        const forgottenFragmentDiv : React.JSX.Element = CreateForgottenFragmentDiv(forgottenFragment);
        forgottenFragmentDivArray.push(forgottenFragmentDiv);
    })
    return forgottenFragmentDivArray;
}
export default GenerateForgottenFragmentDivs;