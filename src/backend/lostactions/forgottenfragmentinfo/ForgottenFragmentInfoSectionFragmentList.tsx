import IForgottenFragment from '@backend/interfaces/IForgottenFragment';
import ForgottenFragmentsAsObjectArray from '@backend/lostactions/forgottenfragmentdata/ForgottenFragmentDataToObjectArray';

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentList.scss';

import { useAppDispatch } from '@app/backend/hooks';
import { setFragmentHovered, setFragmentToDisplay } from '@backend/lostactions/ForgottenFragmentInfoSlice';


function CreateForgottenFragmentDiv(ForgottenFragment : IForgottenFragment) {
    const dispatch = useAppDispatch();
    
    function HandleForgottenFragmentDivClick() {
        dispatch(setFragmentToDisplay(ForgottenFragment.id));
    }

    function HandleMouseEnter() {
        dispatch(setFragmentHovered(ForgottenFragment.id));
    }

    function HandleMouseLeave() {
        dispatch(setFragmentHovered(-1));
    }

    return(
        <div onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}key={ForgottenFragment.id} id={ForgottenFragment.id.toString()} onClick={HandleForgottenFragmentDivClick}className="ForgottenFragmentDiv">
            <div className="ForgottenFragmentDivImg">
                <img src={ForgottenFragment.img}></img>
            </div>
            <div className="ForgottenFragmentDivName">
                <span>{ForgottenFragment.name}</span>
            </div>
        </div>
    )
}

const GenerateForgottenFragmentDivs = () => {
    const ForgottenFragmentDivArray : React.JSX.Element[] = [];
    ForgottenFragmentsAsObjectArray.forEach((ForgottenFragment) => {
        const ForgottenFragmentDiv : React.JSX.Element = CreateForgottenFragmentDiv(ForgottenFragment);
        ForgottenFragmentDivArray.push(ForgottenFragmentDiv);
    })
    return ForgottenFragmentDivArray;
}
export default GenerateForgottenFragmentDivs;