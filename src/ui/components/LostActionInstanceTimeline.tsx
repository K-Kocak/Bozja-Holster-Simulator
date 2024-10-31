import '@css/ui/components/LostActionInstanceTimeline/LostActionInstanceTimeline.scss';

import CreateLostActionInstanceTimeline from '@backend/lostactions/lostactioninstancetimeline/LostActionInstanceTimelineContent';

function LostFindsCache() {
    const LostActionInstanceTimelineInnerContainer = CreateLostActionInstanceTimeline();
    return (
        <div id="LostActionInstanceTimelineContainer">
           {LostActionInstanceTimelineInnerContainer}
        </div>
    )
    
}

export default LostFindsCache;