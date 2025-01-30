import IForgottenFragment from "@app/backend/interfaces/IForgottenFragment";

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentListActions.scss'

import LostActionsAsObjectArray from "@backend/lostactions/actiondata/ActionDataToObjectArray";
import IAction from "@backend/interfaces/IAction";

/**
 * Creates and returns a lost action row for a forgotten fragment. This forgotten fragment drops this lost action
 * @param lostAction creates a lost action row in the forgotten fragment action list area
 * @returns the JSX.Element containing the lost action row
 */
const CreateLostActionRow = (lostAction : IAction) : React.JSX.Element => {
    return (
        <div key={lostAction.id} className="ForgottenFragmentDetailedInfoLostActionRow">
            <div className="ForgottenFragmentDetailedInfoLostActionRowImage">
                <img src={lostAction.img}></img>
            </div>
            <div className="ForgottenFragmentDetailedInfoLostActionRowName">
                <span>{lostAction.name.EN}</span>
            </div>
        </div>
    )
}

/**
 * Creates and returns lost action rows for a forgotten fragment based off what lost actions can be opened up from this forgotten fragment
 * @param forgottenFragment, the forgotten fragment to generate the lost action rows for
 * @returns JSX.Element containing all the lost action rows for a forgotten fragment
 */
const ForgottenFragmentLostActionList = (forgottenFragment : IForgottenFragment) : React.JSX.Element => {

    const lostActionList : React.JSX.Element[] = [];
    forgottenFragment.descriptionContainsLostAction.forEach((idOfLostAction) => {
        const lostActionRowToPush = CreateLostActionRow(LostActionsAsObjectArray[idOfLostAction]);
        lostActionList.push(lostActionRowToPush);
    })
    
    return (<div className="ForgottenFragmentDetailedInfoActionList">
        {lostActionList}
    </div>)
}
export default ForgottenFragmentLostActionList