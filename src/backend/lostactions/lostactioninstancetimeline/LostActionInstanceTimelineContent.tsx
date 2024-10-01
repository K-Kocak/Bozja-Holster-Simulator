import { useAppDispatch, useAppSelector } from '@app/backend/hooks';

import '@css/ui/components/LostActionInstanceTimelineContent.scss';

import { createNewHolsterTimelineEncounter, createNewHolsterTimelineLostActionSpentAfterPull, createNewHolsterTimelineLostActionSpentInPull, setHolsterTimelineEncounterTitleChange } from '../LostFindsHolsterSlice';

import { IEncounter } from '@app/backend/interfaces/IHolsterTimeline';

import LostActionsAsObjectArray from '../actiondata/ActionDataToObjectArray';
import { BaseSyntheticEvent } from 'react';

function CreateHolsterTimelineBossBoxes(ArrayOfEncounters : IEncounter[], dispatch) : React.JSX.Element[] {

    function HandleBossNameChange(event : BaseSyntheticEvent) {
        console.log("function called");
        console.log(event);
        dispatch(setHolsterTimelineEncounterTitleChange([event.target.id, event.target.value]));
    }

    function HandleLostActionAddResourceInPull(event : BaseSyntheticEvent) {
        console.log("HandleLostActionAddResourceInPull");
        dispatch(createNewHolsterTimelineLostActionSpentInPull(event.target.id));
    }

    function HandleLostActionAddResourceAfterPull(event : BaseSyntheticEvent) {
        console.log("HandleLostActionAddResourceAfterPull");
        dispatch(createNewHolsterTimelineLostActionSpentAfterPull(event.target.id));
    }

    const ArrayOfEncounterBoxesToReturn : React.JSX.Element[] = [];
    ArrayOfEncounters.forEach((Encounter, index) => {
        const LostActionResourcesSpentInPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentInPull.forEach((LostActionSpent) => {
            const LostActionSpentToPush : React.JSX.Element = (
                <div key={LostActionSpent.LostActionUsed}className="LostActionResourceSpentInPullIndividual">
                    <div className="LostActionResourceSpentInPullImage">
                        <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                    </div>
                    <div className="LostActionResourceSpentInPullTimeOfUse">
                        <span>{LostActionSpent.LostActionTimeOfUse}</span>
                    </div>
                </div>
            );
            LostActionResourcesSpentInPullArray.push(LostActionSpentToPush);
        });

        const LostActionResourcesSpentAfterPullArray : React.JSX.Element[] = [];
        Encounter.LostActionsSpentAfterPull.forEach((LostActionSpent) => {
            const LostActionSpentToPush : React.JSX.Element = (
                <div key={LostActionSpent.LostActionUsed}className="LostActionResourceSpentAfterPullIndividual">
                    <div className="LostActionResourceSpentAfterPullImage">
                        <img src={LostActionsAsObjectArray[LostActionSpent.LostActionUsed].img}></img>
                    </div>
                    <div className="LostActionResourceSpentAfterPullTimeOfUse">
                        <span>{LostActionSpent.LostActionTimeOfUse}</span>
                    </div>
                </div>
            );
            LostActionResourcesSpentAfterPullArray.push(LostActionSpentToPush);
        });
       
        const EncounterBox = (
        <div key={index} className="LostActionInstanceTimelineIndividualEncounterContainer">
            <div className="LostActionPullBossWithAndNameOfBoss">
                <div className="LostActionNameOfBoss">
                    <input id={index.toString()} onChange={HandleBossNameChange} name={index.toString()} type="string" contentEditable="true"  className="LostActionNameOfBossInputField" defaultValue={Encounter.NameOfBoss}></input>
                </div>
                <div className="LostActionPullBossWith">
                    <div className="LostActionPullBossWithLeftAction">
                        {LostActionsAsObjectArray[Encounter.PullBossWith.LostActionLeft].name.EN}
                    </div>
                    <div className="LostActionPullBossWithRightAction">
                        {LostActionsAsObjectArray[Encounter.PullBossWith.LostActionRight].name.EN}
                    </div>
                    <div className="LostActionPullBossWithEssence">
                        {LostActionsAsObjectArray[Encounter.PullBossWith.EssenceInUse].name.EN}
                    </div>
                </div>
            </div>
            <div className="LostActionResourcesSpentInPull">
                <div className="LostActionResourcesSpentInPullContainer">
                    {LostActionResourcesSpentInPullArray}
                </div>
                
                <div id={index.toString()} onClick={HandleLostActionAddResourceInPull}className="LostActionResourcesSpentInPullAddResourceButton">
                    <span id={index.toString()}>Hiiii</span>
                </div>
            </div>
            <div className="LostActionResourcesSpentAfterPull">
                <div>
                    {LostActionResourcesSpentAfterPullArray}
                </div>
                <div id={index.toString()} onClick={HandleLostActionAddResourceAfterPull}className="LostActionResourcesSpentAfterPullAddResourceButton">
                    <span id={index.toString()}>Hiiii</span>
                </div>
            </div>
        </div>)
        ArrayOfEncounterBoxesToReturn.push(EncounterBox);
    })

    return ArrayOfEncounterBoxesToReturn;
}

const CreateLostActionInstanceTimeline = () => {
    const dispatch = useAppDispatch();
    const currentStateOfAllEncounters = useAppSelector((state) => state.LostFindsHolster.HolsterTimeline.Encounters);

    const HolsterTimelineBossBoxes = CreateHolsterTimelineBossBoxes(currentStateOfAllEncounters, dispatch);

    function HandleAddEncounterClick() {
        dispatch(createNewHolsterTimelineEncounter())
     
    }

    console.log(currentStateOfAllEncounters);
    return (
        <div className="LostActionInstanceTimelineInnerContainer">
            <div className="LostActionInstanceTimelineTitleAndAddEncounter">
                <div className="LostActionInstanceTimelineTitle">
                    Title of holster Set? Or just title of this little section
                </div>
                <div className="LostActionInstanceTimelineAddEncounter">
                    <div className="LostActionInstanceTimelineAddEncounterDiv" onClick={HandleAddEncounterClick}>
                        <span>Add Encounter!</span>
                    </div>
                </div>
            </div>
            <div className="LostActionInstanceTimelineStateContainer">
                {HolsterTimelineBossBoxes}
            </div>
        </div>
    )
}
export default CreateLostActionInstanceTimeline;