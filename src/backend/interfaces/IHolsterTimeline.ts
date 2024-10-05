
export interface IUserSlottedActions {
    LostActionLeft: number,
    LostActionRight: number,
    EssenceInUse: number
}

export interface ILostActionExpenditure {
    LostActionUsed: number,
    LostActionTimeOfUse: string
}

export interface IEncounter {
    NameOfBoss: string,
    PullBossWith: IUserSlottedActions,
    LostActionsSpentInPull: ILostActionExpenditure[],
    LostActionsSpentAfterPull: ILostActionExpenditure[]
}

export interface IHolsterTimeline {
    Encounters: IEncounter[]
}

export default IHolsterTimeline