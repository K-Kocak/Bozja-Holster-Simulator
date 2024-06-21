export interface IAction {
    id: number,

    name: {
        EN: string,
        DE?: string,
        FR?: string,
        JA?: string
    },

    imgBorder?: string,
    img: string,

    range: string,
    radius: string,

    cast: string,
    recast?: string,
    available?: string,
    currentCasts?: number,
    maxCasts?: number,

    weight: number,
    quantity: number,

    skillType: {
        EN: "Weaponskill" | "Ability" | "Spell" | "Item",
        DE?: string,
        FR?: string,
        JA?: string
    },

    description: {
        EN: JSX.Element,
        DE?: JSX.Element,
        FR?: JSX.Element,
        JA?: JSX.Element,
    },

    affinity: {
        EN: string,
        DE?: string,
        FR?: string,
        JA?: string
    },

    category: {
        EN: "Offensive" | "Defensive" | "Restorative" | "Beneficial" | "Tactical" | "Detrimental" | "Item-Related",
        DE?: string,
        FR?: string,
        JA?: string
    },
}

export default IAction