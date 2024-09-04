export interface IActionHolster {
    id: number,
    name: string
    img: string,
    weight: number,
    category: "Offensive" | "Defensive" | "Restorative" | "Beneficial" | "Tactical" | "Detrimental" | "Item-Related",
}

export default IActionHolster;