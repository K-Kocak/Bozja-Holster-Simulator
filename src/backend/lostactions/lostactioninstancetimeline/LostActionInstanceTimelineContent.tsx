import '@css/ui/components/LostActionInstanceTimelineContent.scss';

const CreateLostActionInstanceTimeline = () => {
    return (
        <div className="LostActionInstanceTimelineInnerContainer">
            <div className="LostActionInstanceTimelineTitleAndAddEncounter">
                <div className="LostActionInstanceTimelineTitle">
                    Title goes here, can't be changed in my opinion
                </div>
                <div className="LostActionInstanceTimelineAddEncounter">
                    Button that will append encounter state with a new value
                </div>
            </div>
            <div className="LostActionInstanceTimelineStateContainer">
                Read the encounter state to generate divs
            </div>
        </div>
    )
}
export default CreateLostActionInstanceTimeline;