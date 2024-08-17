import React from 'react';

import '../../scss/ui/components/LostFindsCache.scss';

import LostActions from '@backend/lostactions/ActionData';

import LostActionInformation from './LostActionsDivGen';

import { AutomateActionBoxTestCode } from './LostActionsDivGen';

class LostFindsCache extends React.Component<any, never> {
    render() {
        return (
            <div id="LostFindsCacheContainer">
                {AutomateActionBoxTestCode}
            </div>
        )
    }
}

export default LostFindsCache;