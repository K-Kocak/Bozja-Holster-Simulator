// Lost Action Data Created Here
import LostActionsWithBorder from '@app/ui/pictures/LostActionsWithBorder/LostActionsWithBorderImgInitialise';
import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

import IAction from '@backend/interfaces/IAction';

export const LostFontofPower: IAction = {
    id: 103,
    nameEN: "Lost Font of Power",
    imgBorder: LostActionsWithBorder.Offensive.LostFontofPower,
    img: LostActionsNoBorder.Offensive.LostFontofPower,
    skillTypeEN: "Ability",
    range: "0y",
    radius: "0y",
    cast: "Instant",
    recast: "120.00s",
    available: "10/10",
    weight: 25,
    quantity: 0,
    descriptionEN: "Increases damage dealt by 30% and critical hit rate by 40%.\n\n<span style=\"color:#00cc22;\">Duration: </span>30s\n\n<span style=\"color:#00cc22;\">Spirit of the Irregular Effect: </span>Damage bonus effect is increased to 40%\n\n<span style=\"color:#00cc22;\">Spirit of the Platebearer Effect: </span>Grants <span style=\"color:#ffff66;\">Solid Shield</span> to self\n\n<span style=\"color:#00cc22;\">Solid Shield Effect: </span>Reduces physical damage taken by 50%\n\n<span style=\"color:#00cc22;\">Duration: </span>15s\n\nCan only be executed while in combat.",
    affinityEN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR",
    categoryEN: "Offensive"
}



/*const LostFocus: IAction = {
    id: 101,
    nameEN: "Lost Focus",
    imgBorder: images.
}*/

export const ActionList: IAction[] = [LostFontofPower];