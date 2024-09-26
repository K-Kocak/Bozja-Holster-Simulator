/*export interface ISlottedActionsAndEssence {
    DutyActionLeft: number,
    DutyActionRight: number,
    DutyEssence: number
}

interface IStateOfSlottedActionsAndEssence extends ISlottedActionsAndEssence {
    TimeOfSlottedActionState: string
}

interface IActionInteraction {
    ActionToChange: number,
    ActionToPlace: number,
}

interface IActionInteractionOutOfCombat extends IActionInteraction {
    isMimic: boolean
}

interface IOutOfCombatActionsTaken {
    StateOfActions: IStateOfSlottedActionsAndEssence[],
    StateOfActionsModifications: IActionInteractionOutOfCombat[]
}

interface IInCombatActionsTaken {
    StateOfActions: IStateOfSlottedActionsAndEssence[],
    StateOfActionsModifications: IActionInteraction[]
}

interface IBossEncounter {
    PreBoss: IOutOfCombatActionsTaken,
    BossFight: IInCombatActionsTaken,
    PostBoss: IOutOfCombatActionsTaken
}

export interface IHolsterTimeline {
    Prepop : ISlottedActionsAndEssence
    HolsterTimeline: IBossEncounter[]
}

export const SomeCrap : IHolsterTimeline = {
    Prepop: {
        DutyActionLeft: 103,
        DutyActionRight: 305,
        DutyEssence: 715
    },

    HolsterTimeline: [{

        PreBoss: {

            StateOfActions: [{
                DutyActionLeft: 103,
                DutyActionRight: 305,
                DutyEssence: 715,
                TimeOfSlottedActionState: ""
            }, {
                DutyActionLeft: 103,
                DutyActionRight: 306,
                DutyEssence: 715,
                TimeOfSlottedActionState: "-30s"
            }],
            

            StateOfActionsModifications: [{
                isMimic: false,
                ActionToChange: 305,
                ActionToPlace: 306,
            }]

        },
        BossFight: {
            StateOfActions: [{
                DutyActionLeft: 103,
                DutyActionRight: 306,
                DutyEssence: 715,
                TimeOfSlottedActionState: ""
            }, {
                DutyActionLeft: 103,
                DutyActionRight: 202,
                DutyEssence: 715,
                TimeOfSlottedActionState: "5s"
            }],

            StateOfActionsModifications: [{
                ActionToChange: 306,
                ActionToPlace: 202,
            }]
        },
        PostBoss: {
            StateOfActions: [{
                DutyActionLeft: 103,
                DutyActionRight: 305,
                DutyEssence: 715,
                TimeOfSlottedActionState: ""
            }, {
                DutyActionLeft: 103,
                DutyActionRight: 306,
                DutyEssence: 715,
                TimeOfSlottedActionState: "-30s"
            }],
            

            StateOfActionsModifications: [{
                isMimic: false,
                ActionToChange: 305,
                ActionToPlace: 306,
            }]
        }
    }]
};

const TestCrap : IHolsterTimeline = {
    Prepop: {
        DutyActionLeft: 103,
        DutyActionRight: 305,
        DutyEssence: 715,
    },
    HolsterTimeline: []
}

const PreBoss : IOutOfCombatActionsTaken = {
   StateOfActions: [{...TestCrap.Prepop, TimeOfSlottedActionState: "N/A"}],
   StateOfActionsModifications: []
}

const BossFight : IInCombatActionsTaken = {
    StateOfActions: [{...PreBoss.StateOfActions[PreBoss.StateOfActions.length-1]}],
    StateOfActionsModifications: []
}

const PostBoss : IOutOfCombatActionsTaken = {
    StateOfActions: [{...BossFight.StateOfActions[PreBoss.StateOfActions.length-1]}],
    StateOfActionsModifications: []
 }
 
const BossToAdd : IBossEncounter = {
    PreBoss: PreBoss,
    BossFight: BossFight,
    PostBoss: PostBoss
}

TestCrap.HolsterTimeline.push(BossToAdd);
export default IHolsterTimeline;*/

export interface IUserSlottedActions {
    LostActionLeft: number,
    LostActionRight: number,
    EssenceInUse: number
}

interface ILostActionExpenditure {
    LostActionUsed: number,
    LostActionTimeOfUse: number
}

interface IEncounter {
    PullBossWith: IUserSlottedActions,
    LostActionsSpentInPull: ILostActionExpenditure[],
    LostActionsSpentAfterPull: ILostActionExpenditure[]
}

export interface IHolsterTimeline {
    Encounters: IEncounter[]
}

export default IHolsterTimeline