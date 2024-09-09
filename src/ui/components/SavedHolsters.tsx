import '../../scss/ui/components/SavedHolsters.scss';

import Test from '@backend/lostactions/holstersets/SavedHolstersContent';



function SavedHolsters() {
    const testing = Test();
    return (
        <div id="SavedHolsters">
            {testing}
        </div>
    )
    
}

export default SavedHolsters;