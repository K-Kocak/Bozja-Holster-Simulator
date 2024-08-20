import LostActions from "@backend/lostactions/ActionData";
import IAction from "@backend/interfaces/IAction";

export const LostActionsAsObjectArray : IAction[] = [];
function LostActionsToObjectArray() {
    for(const [, LostActionsInType] of Object.entries(LostActions)) {
        for(const [, LostActionInformation] of Object.entries(LostActionsInType)) {
            LostActionsAsObjectArray.push(LostActionInformation);
        }
    }
}

LostActionsToObjectArray();
export default LostActionsAsObjectArray;

/*for (let [key, value] of Object.entries(LostActions)) {
    console.log(key, value);
    for(let [key, values] of Object.entries(value)) {
        console.log(key, values);
        values.id
    }
}*/