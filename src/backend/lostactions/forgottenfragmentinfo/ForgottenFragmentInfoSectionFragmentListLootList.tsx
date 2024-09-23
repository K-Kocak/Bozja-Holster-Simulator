import IForgottenFragment from "@app/backend/interfaces/IForgottenFragment";

import '@css/ui/components/ForgottenFragmentInfoSectionFragmentListLootList.scss';

function CreateLootSourceRow(LootSource : string) : React.JSX.Element {
    return (
        <div key={LootSource} className="ForgottenFragmentDetailedInfoLootSourceRow">
            <div className="ForgottenFragmentDetailedInfoLootSourceRowBulletPoint">
                &#8226;
            </div>
            <div className="ForgottenFragmentDetailedInfoLootSourceRowDescription">
                {LootSource}
            </div>
        </div>
    )
}

const ForgottenFragmentLootDropsList = (ForgottenFragment : IForgottenFragment) : React.JSX.Element => {
    const LootSourceRows : React.JSX.Element[] = [];
    ForgottenFragment.descriptionLootSources.forEach((LootSource) => {
        const LootSourceRow = CreateLootSourceRow(LootSource);
        LootSourceRows.push(LootSourceRow);
    })
    return (
    <div className="ForgottenFragmentDetailedInfoLootSourcesList">
        {LootSourceRows}
    </div>)
}
export default ForgottenFragmentLootDropsList;