import '@css/ui/components/LostFindsHolster.scss';

import LostFindsHolsterInformation from '@app/backend/lostactions/LostFindsHolsterContents';

// {LostActionInformationBoxes[LostActions.ItemRelated.PureEssenceElder.id]} 
function LostFindsHolster()  {
    const LostFindsHolsterToDisplay = LostFindsHolsterInformation();

    return (
        <div id="LostFindsHolsterContainer">
            {LostFindsHolsterToDisplay}
        </div>
    )
    
}

export default LostFindsHolster;