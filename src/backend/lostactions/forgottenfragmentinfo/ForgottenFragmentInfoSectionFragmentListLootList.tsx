import IForgottenFragment from "@app/backend/interfaces/IForgottenFragment";

import '@css/ui/components/ForgottenFragmentInfo/ForgottenFragmentInfoSectionFragmentListLootList.scss';

/**
 * Creates and returns a loot source row
 * @param lootSource, the loot source to create a loot source row for
 * @returns JSX.Element loot source row
 */
function CreateLootSourceRow(lootSource : string) : React.JSX.Element {
    return (
        <div key={lootSource} className="ForgottenFragmentDetailedInfoLootSourceRow">
            <div className="ForgottenFragmentDetailedInfoLootSourceRowBulletPoint">
                &#8226;
            </div>
            <div className="ForgottenFragmentDetailedInfoLootSourceRowDescription">
                {lootSource}
            </div>
        </div>
    )
}

/**
 * Creates and returns loot source rows for a forgotten fragment
 * @param forgottenFragment, the forgotten fragment to create loot source for
 * @returns JSX.Element containing all the loot source for a forgotten fragment
 */
const ForgottenFragmentLootDropsList = (forgottenFragment : IForgottenFragment) : React.JSX.Element => {
    const lootSourceRows : React.JSX.Element[] = [];
    forgottenFragment.descriptionLootSources.forEach((lootSource) => {
        const lootSourceRow = CreateLootSourceRow(lootSource);
        lootSourceRows.push(lootSourceRow);
    })
    return (
    <div className="ForgottenFragmentDetailedInfoLootSourcesList">
        {lootSourceRows}
    </div>)
}
export default ForgottenFragmentLootDropsList;