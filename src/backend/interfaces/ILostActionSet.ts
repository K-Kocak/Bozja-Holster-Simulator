import IAction from "@backend/interfaces/IAction";

export interface ILostActionSet {
    name: string,
    holsterContents: IAction[],
    
}