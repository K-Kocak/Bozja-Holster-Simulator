export interface IForgottenFragment {
    id: number,
    rank: number,
    name: string,
    img: string,
    descriptionContainsLostAction: number[],
    descriptionLootSources: string[],
    descriptionMapLocation?: string
}
export default IForgottenFragment;