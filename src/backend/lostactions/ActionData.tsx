// Lost Action Data Created Here
import LostActionsWithBorder from '@app/ui/pictures/LostActionsWithBorder/LostActionsWithBorderImgInitialise';
import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

import IAction from '@backend/interfaces/IAction';

const LostFontofPower: IAction = {
    id: 103,

    name: {
        EN: "Lost Font of Power",
        DE: "",
        FR: "",
        JA: ""
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostFontofPower,
    img: LostActionsNoBorder.Offensive.LostFontofPower,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "120.00s",
    available: "10/10",
    weight: 25,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "",
        FR: "",
        JA: ""
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 30% and critical hit rate by 40%.{"\n"}{"\n"} <span style={{color: "#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Irregular Effect: </span>Damage bonus effect is increased to 40%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Platebearer Effect: </span>Grants <span style={{color:"#ffff66"}}>Solid Shield</span> to self{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Solid Shield Effect: </span>Reduces physical damage taken by 50%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR",
        DE: "",
        FR: "",
        JA: ""
    },
    category: {
        EN: "Offensive",
        DE: "",
        FR: "",
        JA: ""
    }
}

const LostActions = {
    'Offensive': {
        'LostFontofPower': LostFontofPower
    }
}

export default LostActions;

/*
export const LostActions = {
    'Offensive': {
        'LostFocus': LostFocus,
        'LostFontofMagic': LostFontofMagic,
        'LostFontofPower': LostFontofPower,
        'LostSlash': LostSlash,
        'LostDeath': LostDeath,
        'BannerofNobleEnds': BannerofNobleEnds,
        'BannerofHonoredSacrifice': BannerofHonoredSacrifice,
        'BannerofHonedAcuity': BannerofHonedAcuity,
        'LostFairTrade': LostFairTrade,
        'LostFlareStar': LostFlareStar,
        'LostChainspell': LostChainspell,
        'LostAssassination': LostAssassination
    },

    'Defensive': {
        'LostManawall': LostManawall,
        'BannerofTirelessConviction': BannerofTirelessConviction,
        'BannerofFirmResolve': BannerofFirmResolve,
        'LostIncense': LostIncense,
        'LostExcellence': LostExcellence,
        'LostBloodRage': LostBloodRage
    },

    'Restorative': {
        'BannerofSolemnClarity': BannerofSolemnClarity,
        'LostCure': LostCure,
        'LostCureII': LostCureII,
        'LostCureIII': LostCureIII,
        'LostCureIV': LostCureIV,
        'LostArise': LostArise,
        'LostSacrifice': LostSacrifice,
        'LostReraise': LostReraise,
        'LostFullCure': LostFullCure
    },

    'Beneficial': {
        'LostSpellforge': LostSpellforge,
        'LostSteelsting': LostSteelsting,
        'LostProtect': LostProtect,
        'LostShell': LostShell,
        'LostReflect': LostReflect,
        'LostStoneskin': LostStoneskin,
        'LostBravery': LostBravery,
        'LostAethershield': LostAethershield,
        'LostDervish': LostDervish,
        'LostStoneskinII': LostStoneskinII,
        'LostProtectII': LostProtectII,
        'LostShellII': LostShellII,
        'LostBubble': LostBubble,
    },

    'Tactical': {
        'LostStealth': LostStealth,
        'LostSwift': LostSwift,
        'LostFontofSkill': LostFontofSkill,
        'Mimic': Mimic,
        'LostPerception': LostPerception,
        'LostImpetus': LostImpetus,
    },

    'Detrimental': {
        'LostParalyzeIII': LostParalyzeIII,
        'LostBanishIII': LostBanishIII,
        'LostDispel': LostDispel,
        'LostRendArmor': LostRendArmor,
        'LostSeraphStrike': LostSeraphStrike,
        'LostBurst': LostBurst,
        'LostRampage': LostRampage
    },

    'ItemRelated': {
        'DynamisDice': DynamisDice,
        'ResistancePhoenix': ResistancePhoenix,
        'ResistanceReraiser': ResistanceReraiser,
        'ResistancePotionKit': ResistancePotionKit,
        'ResistanceEtherKit': ResistanceEtherKit,
        'ResistanceMedikit': ResistanceMedikit,
        'ResistancePotion': ResistancePotion,
        'EssenceAetherweaver': EssenceAetherweaver,
        'EssenceMartialist': EssenceMartialist,
        'EssenceSavior': EssenceSavior,
        'EssenceVeteran': EssenceVeteran,
        'EssencePlatebearer': EssencePlatebearer,
        'EssenceGuardian': EssenceGuardian,
        'EssenceOrdained': EssenceOrdained,
        'EssenceSkirmisher': EssenceSkirmisher,
        'EssenceWatcher': EssenceWatcher,
        'EssenceProfane': EssenceProfane,
        'EssenceIrregular': EssenceIrregular,
        'EssenceBreathtaker': EssenceBreathtaker,
        'EssenceBloodsucker': EssenceBloodsucker,
        'EssenceBeast': EssenceBeast,
        'EssenceTemplar': EssenceTemplar,
        'DeepEssenceAetherweaver': DeepEssenceAetherweaver,
        'DeepEssenceMartialist': DeepEssenceMartialist,
        'DeepEssenceSavior': DeepEssenceSavior,
        'DeepEssenceVeteran': DeepEssenceVeteran,
        'DeepEssencePlatebearer': DeepEssencePlatebearer,
        'DeepEssenceGuardian': DeepEssenceGuardian,
        'DeepEssenceOrdained': DeepEssenceOrdained,
        'DeepEssenceSkirmisher': DeepEssenceSkirmisher,
        'DeepEssenceWatcher': DeepEssenceWatcher,
        'DeepEssenceProfane': DeepEssenceProfane,
        'DeepEssenceIrregular': DeepEssenceIrregular,
        'DeepEssenceBreathtaker': DeepEssenceBreathtaker,
        'DeepEssenceBloodsucker': DeepEssenceBloodsucker,
        'DeepEssenceBeast': DeepEssenceBeast,
        'DeepEssenceTemplar': DeepEssenceTemplar,
        'PureEssenceGambler': PureEssenceGambler,
        'PureEssenceElder': PureEssenceElder,
        'PureEssenceDuelist': PureEssenceDuelist,
        'PureEssenceFiendHunter': PureEssenceFiendHunter,
        'PureEssenceIndomitable': PureEssenceIndomitable,
        'PureEssenceDivine': PureEssenceDivine,
        'Lodestone': Lodestone,
        'LightCurtain': LightCurtain,
        'ResistanceElixir': ResistanceElixir
    }
}
 */


//export const ActionList: IAction[] = [LostFontofPower];