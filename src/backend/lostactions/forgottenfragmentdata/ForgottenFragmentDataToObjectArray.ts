import IForgottenFragment from "@backend/interfaces/IForgottenFragment";
import ForgottenFragmentData from "@backend/lostactions/forgottenfragmentdata/ForgottenFragmentData";

export const ForgottenFragmentsAsObjectArray : IForgottenFragment[] = [];
function ForgottenFragmentsToObjectArray() {
    for(const [, ForgottenFragment] of Object.entries(ForgottenFragmentData)) {
        ForgottenFragmentsAsObjectArray.push(ForgottenFragment);
    }
}

ForgottenFragmentsToObjectArray();
console.log(ForgottenFragmentsAsObjectArray);
export default ForgottenFragmentsAsObjectArray;