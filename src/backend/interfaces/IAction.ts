export interface IAction {
    id: number,

    nameEN: string,
    nameDE?: string,
    nameFR?: string,
    nameJA?: string,

    imgBorder?: string,
    img: string,

    skillTypeEN: "Weaponskill" | "Ability" | "Spell" | "Item",
    skillTypeDE?: string,
    skillTypeFR?: string,
    skillTypeJA?: string,

    range: string,
    radius: string,
    cast: string,
    recast?: string,
    available?: string,
    currentCasts?: number,
    maxCasts?: number,
    weight: number,
    quantity: number,

    descriptionEN: string,
    descriptionDE?: string,
    descriptionFR?: string,
    descriptionJA?: string,

    affinityEN: string,
    affinityDE?: string,
    affinityFR?: string,
    affinityJA?: string,
    
    categoryEN: "Offensive" | "Defensive" | "Restorative" | "Beneficial" | "Tactical" | "Detrimental" | "Item-Related",
    categoryDE?: string,
    categoryFR?: string,
    categoryJA?: string
}

export default IAction