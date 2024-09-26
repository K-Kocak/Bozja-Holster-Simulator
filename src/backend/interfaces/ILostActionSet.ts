import { IActionHolster } from "./IActionHolster";
import { IUserSlottedActions } from "./IHolsterTimeline";

export interface ILostActionSet {
    id: number,
    nameOfSet: string,
    roleTypeOfSet: "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged"
    weightOfSet: number,
    setLostActionContents: IActionHolster[],
    PrepopLostActions: IUserSlottedActions 
}