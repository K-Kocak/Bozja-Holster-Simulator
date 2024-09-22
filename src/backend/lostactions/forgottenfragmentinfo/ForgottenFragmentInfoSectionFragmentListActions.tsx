import IForgottenFragment from "@app/backend/interfaces/IForgottenFragment";

import '@css/ui/components/ForgottenFragmentInfoSectionFragmentListActions.scss'

import LostActionsAsObjectArray from "@backend/lostactions/actiondata/ActionDataToObjectArray";
import IAction from "@backend/interfaces/IAction";


const CreateLostActionRow = (LostAction : IAction) : React.JSX.Element => {
    return (
        <div key={LostAction.id} className="ForgottenFragmentDetailedInfoLostActionRow">
            <div className="ForgottenFragmentDetailedInfoLostActionRowImage">
                <img src={LostAction.img}></img>
            </div>
            <div className="ForgottenFragmentDetailedInfoLostActionRowName">
                <span>{LostAction.name.EN}</span>
            </div>
        </div>
    )
}


const ForgottenFragmentLostActionList = (ForgottenFragment : IForgottenFragment) : React.JSX.Element => {

    const LostActionList : React.JSX.Element[] = [];
    ForgottenFragment.descriptionContainsLostAction.forEach((IdOfLostAction) => {
        const LostActionRowToPush = CreateLostActionRow(LostActionsAsObjectArray[IdOfLostAction]);
        LostActionList.push(LostActionRowToPush);
    })
    return (<div className="ForgottenFragmentDetailedInfoActionList">
        {LostActionList}
    </div>)
}
export default ForgottenFragmentLostActionList