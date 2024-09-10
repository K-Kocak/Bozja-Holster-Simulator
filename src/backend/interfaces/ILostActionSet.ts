import IAction from "@backend/interfaces/IAction";

export interface ILostActionSet {
    id: number,
    name: string,
    holsterType: string,
    totalWeight: number,
    holsterContents: IAction[],
}