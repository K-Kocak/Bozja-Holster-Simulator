import '@css/ui/components/LostFindsHolster/LostFindsHolster.scss';

import LostFindsHolsterInformation from '@app/backend/lostactions/lostfindsholster/LostFindsHolsterContents';

function LostFindsHolster()  {
    const LostFindsHolsterToDisplay = LostFindsHolsterInformation();

    return (
        <div id="LostFindsHolsterContainer">
            {LostFindsHolsterToDisplay}
        </div>
    )
    
}

export default LostFindsHolster;