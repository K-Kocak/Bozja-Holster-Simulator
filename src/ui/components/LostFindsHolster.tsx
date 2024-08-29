import React from 'react';

import '@css/ui/components/LostFindsHolster.scss';

import Testing from '@app/backend/lostactions/LostFindsHolsterContents';

// {LostActionInformationBoxes[LostActions.ItemRelated.PureEssenceElder.id]} 
class LostFindsHolster extends React.Component<unknown, never> {
    render() {
        return (
            <div id="LostFindsHolsterContainer">
                {Testing}
            </div>
        )
    }
}

export default LostFindsHolster;