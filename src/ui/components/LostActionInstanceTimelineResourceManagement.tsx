import '@css/ui/components/LostActionInstanceTimelineResourceManagement.scss';

import CreateLostActionInstanceTimelineResourceManagementContent from '@backend/lostactions/lostactioninstancetimeline/LostActionInstanceTimelineResourceManagementContent';

function LostActionInstanceTimelineResourceManagement() {
    const LostActionInstanceTimelineResourceManagementContent = CreateLostActionInstanceTimelineResourceManagementContent();
    return (
        <div id="LostActionInstanceTimelineResourceManagementContainer">
           {LostActionInstanceTimelineResourceManagementContent}
        </div>
    )
    
}

export default LostActionInstanceTimelineResourceManagement;