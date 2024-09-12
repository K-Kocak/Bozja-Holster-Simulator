import { IActionHolster } from "./IActionHolster";

export interface ILostActionSet {
    id: number,
    nameOfSet: string,
    roleTypeOfSet: "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged"
    weightOfSet: number,
    setLostActionContents: IActionHolster[],
}