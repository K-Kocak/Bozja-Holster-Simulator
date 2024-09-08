import LostActions from "@backend/lostactions/actiondata/ActionData";
import IAction from "@backend/interfaces/IAction";

export const LostActionsAsObjectArray : IAction[] = [];
function LostActionsToObjectArray() {
    for(const [, LostActionsInType] of Object.entries(LostActions)) {
        for(const [, LostActionInformation] of Object.entries(LostActionsInType)) {
            //LostActionsAsObjectArray.push(LostActionInformation);
            LostActionsAsObjectArray[LostActionInformation.id] = LostActionInformation;
        }
    }
}

LostActionsToObjectArray();

export default LostActionsAsObjectArray;
