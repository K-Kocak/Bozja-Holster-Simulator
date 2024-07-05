import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActions from '@backend/lostactions/ActionData';

import LostActionInformation from './LostActionsDivGen';

class LostFindsCache extends React.Component<any, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {LostActionInformation[0]}
            </div>
        )
    }
}

export default LostFindsCache;