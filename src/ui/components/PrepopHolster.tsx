import PrepopHolsterContents from '@backend/lostactions/prepopholster/PrepopHolsterActions';

import '@css/ui/components/PrepopHolster.scss';

function LostFindsHolster()  {
    const DisplayPrepopHolster = PrepopHolsterContents();

    return (
        <div id="PrepopHolsterContainer">
            {DisplayPrepopHolster}
        </div>
    )
    
}

export default LostFindsHolster;