// Lost Action Data Created Here
import LostActionsWithBorder from '@app/ui/pictures/LostActionsWithBorder/LostActionsWithBorderImgInitialise';
import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

import IAction from '@backend/interfaces/IAction';

//Completed Actions
// Offensive Actions
//#region Offensive Actions
const LostFocus: IAction = {
    id: 101,

    imgBorder: LostActionsWithBorder.Offensive.LostFocus,
    img: LostActionsNoBorder.Offensive.LostFocus,

    name: {
        EN: "Lost Focus",
        DE: "Verschollene Ladung",
        FR: "Focalisation oubliée",
        JA: "ロスト・チャージ"
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "2.50s",
    available: "32/32",
    weight: 6,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants a stack of <span style={{color:"#FFFF66"}}>Boost</span>, up to a maximum of 16.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Boost Bonus:</span> Increases potency of next weaponskill by 15% per stack{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}Effect ends upon using another lost action.{"\n"}{"\n"}Shares a recast timer with all other weaponskills and spells.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },
    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostFontofMagic: IAction = {
    id: 102,

    imgBorder: LostActionsWithBorder.Offensive.LostFontofMagic,
    img: LostActionsNoBorder.Offensive.LostFontofMagic,

    name: {
        EN: "Lost Font of Magic",
        DE: "Verschollene Magiefontäne",
        FR: "Fontaine de magie oubliée",
        JA: "ロスト・マジックフォント"
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "120.00s",
    available: "10/10",
    weight: 25,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 70%, draining MP while in use.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Veteran Effect: </span>Grants <span style={{color:"#FFFF66"}}>Spell Shield</span> to self{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spell Shield Effect: </span>Reduces magic damage taken by 50%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者"
    },
    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostFontofPower: IAction = {
    id: 103,

    name: {
        EN: "Lost Font of Power",
        DE: "Verschollene Machtfontäne",
        FR: "Fontaine de puissance oubliée",
        JA: "ロスト・パワーフォント"
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
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 30% and critical hit rate by 40%.{"\n"}{"\n"} <span style={{color: "#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Irregular Effect: </span>Damage bonus effect is increased to 40%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Platebearer Effect: </span>Grants <span style={{color:"#ffff66"}}>Solid Shield</span> to self{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Solid Shield Effect: </span>Reduces physical damage taken by 50%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD NIN MCH DKR SAM REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD NIN MCH CHN SAM PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 忍者 機工士 暗黒騎士 侍 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostSlash: IAction = {
    id: 104,

    name: {
        EN: "Lost Slash",
        DE: "Verschollener Schlitzer",
        FR: "Taillade oubliée",
        JA: "ロスト・スラッシュ"
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostSlash,
    img: LostActionsNoBorder.Offensive.LostSlash,
    
    range: "8y",
    radius: "8y",

    cast: "Instant",
    recast: "90.00s",
    available: "10/10",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Weaponskill",
        DE: "Waffenfertigkeit",
        FR: "Technique d'arme",
        JA: "ウェポンスキル"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 30% and critical hit rate by 40%.{"\n"}{"\n"} <span style={{color: "#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Irregular Effect: </span>Damage bonus effect is increased to 40%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Platebearer Effect: </span>Grants <span style={{color:"#ffff66"}}>Solid Shield</span> to self{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Solid Shield Effect: </span>Reduces physical damage taken by 50%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD NIN MCH DKR SAM REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD NIN MCH CHN SAM PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 忍者 機工士 暗黒騎士 侍 ガンブレイカー 踊り子 リーパー"
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostDeath: IAction = {
    id: 105,

    name: {
        EN: "Lost Death",
        DE: "Verschollener Tod",
        FR: "Mort oubliée",
        JA: "ロスト・デス",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostDeath,
    img: LostActionsNoBorder.Offensive.LostDeath,
    
    range: "30y",
    radius: "0y",

    cast: "5.0s",
    recast: "60.00s",
    available: "10/10",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>KOs target. The less the target's HP, the greater the chance of success.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Ordained Effect: </span>Chance of success is increased{"\n"}{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",    
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const BannerofNobleEnds: IAction = {
    id: 106,

    name: {
        EN: "Banner of Noble Ends",
        DE: "Verschollene Machtfontäne",
        FR: "Fontaine de puissance oubliée",
        JA: "ロスト・パワーフォント"
    },
    
    imgBorder: LostActionsWithBorder.Offensive.BannerofNobleEnds,
    img: LostActionsNoBorder.Offensive.BannerofNobleEnds,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "90.00s",
    available: "10/10",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Noble Ends</span>, increasing damage dealt by 50% while reducing own HP recovery via most healing actions by 100%.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const BannerofHonoredSacrifice: IAction = {
    id: 107,

    name: {
        EN: "Banner of Honored Sacrifice",
        DE: "Gemüt der Ungehaltenheit",
        FR: "Seuil de l'abnégation",
        JA: "捨身の境地",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.BannerofHonoredSacrifice,
    img: LostActionsNoBorder.Offensive.BannerofHonoredSacrifice,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "90.00s",
    available: "10/10",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Honored Sacrifice</span>, increasing damage dealt by 55% while draining your HP.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}{"\n"}Can only be executed while in combat.{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const BannerofHonedAcuity: IAction = {
    id: 108,

    name: {
        EN: "Banner of Honed Acuity",
        DE: "Gemüt der Empfindsamkeit",
        FR: "Seuil de la perception",
        JA: "鋭敏の境地",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.BannerofHonedAcuity,
    img: LostActionsNoBorder.Offensive.BannerofHonedAcuity,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "180.00s",
    available: "10/10",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Honed Acuity</span>, gaining additional stacks each time an attack is evaded, up to a maximum of 3.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Honed Acuity Effect: </span>Increases damage taken by 10% per stack{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>120s{"\n"}{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Transcendent Finesse</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Transcendent Finesse Effect: </span>Increases critical hit rate by 30% and reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 20%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}{"\n"}Can only be executed while in combat.{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostFairTrade: IAction = {
    id: 109,

    name: {
        EN: "Lost Fair Trade",
        DE: "Verschollener Handel",
        FR: "Échange équitable oublié",
        JA: "ロスト・フェアトレード"
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostFairTrade,
    img: LostActionsNoBorder.Offensive.LostFairTrade,
    
    range: "25y",
    radius: "0y",

    cast: "Instant",
    recast: "4.00s",
    available: "99/99",
    weight: 2,
    quantity: 0,

    skillType: {
        EN: "Weaponskill",
        DE: "Waffenfertigkeit",
        FR: "Technique d'arme",
        JA: "ウェポンスキル"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Through sheer force of will, restore a random technique of the lost to physical form and throw it at a single target, dealing damage with a potency of 50.{"\n"}{"\n"}Potency increases up to 1,000 based on the weight of the lost action.{"\n"}{"\n"}The lost action thrown will be lost upon execution.{"\n"}{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostFlareStar: IAction = {
    id: 110,

    name: {
        EN: "Lost Flare Star",
        DE: "Verschollener Flare-Stern",
        FR: "Astre flamboyant oublié",
        JA: "ロスト・フレアスター",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostFlareStar,
    img: LostActionsNoBorder.Offensive.LostFlareStar,
    
    range: "0y",
    radius: "10y",

    cast: "Instant",
    recast: "5.00s",
    available: "9000",
    weight: 20,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Through sheer force of will, restore a random technique of the lost to physical form and throw it at a single target, dealing damage with a potency of 50.{"\n"}{"\n"}Potency increases up to 1,000 based on the weight of the lost action.{"\n"}{"\n"}The lost action thrown will be lost upon execution.{"\n"}{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "BLM SMN RDM",
        DE: "SMA BSW RMA",
        FR: "MNO INV MRG",
        JA: "黒魔道士 召喚士 赤魔道士",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostChainspell: IAction = {
    id: 111,

    name: {
        EN: "Lost Chainspell",
        DE: "Verschollene Zauberkette",
        FR: "Avalanche de sorts oubliée",
        JA: "ロスト・チェインスペル",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostChainspell,
    img: LostActionsNoBorder.Offensive.LostChainspell,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "90.00s",
    available: "20/20",
    weight: 20,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Through sheer force of will, restore a random technique of the lost to physical form and throw it at a single target, dealing damage with a potency of 50.{"\n"}{"\n"}Potency increases up to 1,000 based on the weight of the lost action.{"\n"}{"\n"}The lost action thrown will be lost upon execution.{"\n"}{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}

const LostAssassination: IAction = {
    id: 112,

    name: {
        EN: "Lost Assassination",
        DE: "Verschollener Meuchelmord",
        FR: "Assassinat oublié",
        JA: "ロスト・アサシネイト",
    },
    
    imgBorder: LostActionsWithBorder.Offensive.LostAssassination,
    img: LostActionsNoBorder.Offensive.LostAssassination,
    
    range: "3y",
    radius: "0y",

    cast: "Instant",
    recast: "15.00s",
    available: "99/99",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Weaponskill",
        DE: "Waffenfertigkeit",
        FR: "Technique d'arme",
        JA: "ウェポンスキル"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Through sheer force of will, restore a random technique of the lost to physical form and throw it at a single target, dealing damage with a potency of 50.{"\n"}{"\n"}Potency increases up to 1,000 based on the weight of the lost action.{"\n"}{"\n"}The lost action thrown will be lost upon execution.{"\n"}{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD NIN MCH DKR SAM REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD NIN MCH CHN SAM PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 忍者 機工士 暗黒騎士 侍 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Offensive",
        DE: "Beleidigend",
        FR: "Offensive",
        JA: "攻撃"
    }
}
//#endregion

//#region Defensive Actions

const LostManawall: IAction = {
    id: 201,

    imgBorder: LostActionsWithBorder.Defensive.LostManawall,
    img: LostActionsNoBorder.Defensive.LostManawall,

    name: {
        EN: "Lost Manawall",
        DE: "Verschollene Mana-Wand",
        FR: "Mur de mana oublié",
        JA: "ロスト・ウォール",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "360.00s",
    available: "2/2",
    weight: 16,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Temporarily applies <span style={{color:"#FFFF66"}}>Heavy</span> to self, while reducing damage taken by 90% and nullifying most knockback and draw-in effects.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 6s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },
    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}

const BannerofTirelessConviction: IAction = {
    id: 202,

    imgBorder: LostActionsWithBorder.Defensive.BannerofTirelessConviction,
    img: LostActionsNoBorder.Defensive.BannerofTirelessConviction,

    name: {
        EN: "Banner of Tireless Conviction",
        DE: "Gemüt der Beharrlichkeit",
        FR: "Seuil de la patience",
        JA: "忍耐の境地",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "180.00s",
    available: "10/10",
    weight: 6,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Tireless Conviction</span>, gaining additional stacks each time damage is taken, up to a maximum of 5.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Tireless Conviction Effect: </span>Increases damage taken by 15% per stack{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Unyielding Defense</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Unyielding Defense Effect: </span>Reduces damage taken by 30%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD WAR DRK GNB",
        DE: "PLD KRG DKR REV",
        FR: "PLD GUE CHN PSB",
        JA: "ナイト 戦士 暗黒騎士 ガンブレイカー",
    },
    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}

const BannerofFirmResolve: IAction = {
    id: 203,

    imgBorder: LostActionsWithBorder.Defensive.BannerofFirmResolve,
    img: LostActionsNoBorder.Defensive.BannerofFirmResolve,

    name: {
        EN: "Banner of Firm Resolve",
        DE: "Gemüt der Folgsamkeit",     
        FR: "Seuil de la préservation",
        JA: "堅守の境地",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "180.00s",
    available: "10/10",
    weight: 6,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Firm Resolve</span>, gaining additional stacks each time damage is taken, up to a maximum of 5.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Firm Resolve Effect: </span>Reduces damage dealt by 15% per stack{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Unyielding Defense</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Unyielding Defense Effect: </span>Reduces damage taken by 30%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
       EN: "MNK DRG BRD WHM BLM SMN SCH NIN MCH AST SAM RDM DNC RPR SGE",
    DE: "MÖN DRG BRD WMA SMA BSW GLT NIN MCH AST SAM RMA TÄN SNT WEI",
    FR: "MOI DRG BRD MBL MNO INV ÉRU NIN MCH AST SAM MRG DNS FCH SAG",
    JA: "モンク 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 占星術師 侍 赤魔道士 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}

const LostIncense: IAction = {
    id: 204,

    imgBorder: LostActionsWithBorder.Defensive.LostIncense,
    img: LostActionsNoBorder.Defensive.LostIncense,

    name: {
        EN: "Lost Incense",
        DE: "Verschollener Hohn",
        FR: "Incitation oubliée",
        JA: "ロスト・エンミティ",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "25y",
    radius: "0y",

    cast: "Instant",
    recast: "20.00s",
    available: "Unlimited",
    weight: 2,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Gesture threateningly, placing yourself at the top of a target's enmity list. {"\n"}{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Enmity generation is increased and damage taken is reduced by 20%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>20s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
       EN: "MNK DRG BRD WHM BLM SMN SCH NIN MCH AST SAM RDM DNC RPR SGE",
        DE: "MÖN DRG BRD WMA SMA BSW GLT NIN MCH AST SAM RMA TÄN SNT WEI",
        FR: "MOI DRG BRD MBL MNO INV ÉRU NIN MCH AST SAM MRG DNS FCH SAG",
        JA: "モンク 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 占星術師 侍 赤魔道士 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}

const LostExcellence: IAction = {
    id: 205,

    imgBorder: LostActionsWithBorder.Defensive.LostExcellence,
    img: LostActionsNoBorder.Defensive.LostExcellence,

    name: {
        EN: "Lost Excellence",
        DE: "Verschollene Exzellenz",
        FR: "Excellence oubliée",
        JA: "ロスト・エクセレンス",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    available: "5/5",
    cast: "Instant",
    recast: "300.00s",
    weight: 25,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Instantly cures <span style={{color:"#FFFF66"}}>Weakness</span> and temporarily nullifies most attacks, while increasing damage dealt by 65%. <span style={{color:"#FFFF66"}}>Memorable</span> will be applied when effect ends.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 10s{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Memorable Effect:</span> Increases damage dealt by 65% while decreasing damage taken by 10%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 50s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}

const LostBloodRage: IAction = {
    id: 206,

    imgBorder: LostActionsWithBorder.Defensive.LostExcellence,
    img: LostActionsNoBorder.Defensive.LostExcellence,

    name: {
        EN: "Lost Blood Rage",
        DE: "Verschollener Blutzorn",
        FR: "Rage sanguinaire oubliée",
        JA: "ロスト・ブラッドレイジ",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",
    available: "10/10",
    cast: "Instant",
    recast: "180.00s",
    weight: 25,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 15% and reduces damage taken by 5% per stack. Stacks increase with each use of a dash attack while effect is active, to a maximum of 4.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 18s{"\n"}{"\n"}Maximum stacks grant the effect of <span style={{color:"#FFFF66"}}>Blood Rush</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Blood Rush Effect:</span> Increases damage dealt by 60%, shortens recast times of abilities by 75%, and gradually restores HP and MP. Recast time reduction does not apply to charged actions.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s{"\n"}{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD WAR DRK GNB",
        DE: "PLD KRG DKR REV",
        FR: "PLD GUE CHN PSB",
        JA: "ナイト 戦士 暗黒騎士 ガンブレイカー",
    },

    category: {
        EN: "Defensive",
        DE: "Defensive",
        FR: "Défensive",
        JA: "守備的"
    }
}
//#endregion

//#region Restorative Actions

const BannerofSolemnClarity: IAction = {
    id: 301,

    imgBorder: LostActionsWithBorder.Restorative.BannerofSolemnClarity,
    img: LostActionsNoBorder.Restorative.BannerofSolemnClarity,

    name: {
        EN: "Banner of Solemn Clarity",
        DE: "Gemüt der Besinnlichkeit",
        FR: "Seuil de la contemplation",
        JA: "瞑想の境地",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    available: "10/10",
    cast: "Instant",
    recast: "180.00s",
    weight: 6,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Solemn Clarity</span>, periodically gaining additional stacks, up to a maximum of 4.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}{"\n"}Effect ends upon using another action or moving (including facing a different direction).{"\n"}{"\n"}Cancels auto-attack upon execution.{"\n"}{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Limitless Grace</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Banner of Limitless Grace Effect: </span>Increases healing potency by 50% while reducing MP cost{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>120s{"\n"}{"\n"}Can only be executed while in combat.{"\n"}{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostCure: IAction = {
    id: 302,

    name: {
        EN: "Lost Cure",
        DE: "Verschollene Vita",
        FR: "Soin oublié",
        JA: "ロスト・ケアル",
    },
    
    imgBorder: LostActionsWithBorder.Restorative.LostCure,
    img: LostActionsNoBorder.Restorative.LostCure,
    
    range: "30y",
    radius: "0y",

    cast: "2.00s",
    recast: "2.50s",

    weight: 2,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores target's HP.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency:</span> 15,000</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostCureII: IAction = {
    id: 303,

    imgBorder: LostActionsWithBorder.Restorative.LostCureII,
    img: LostActionsNoBorder.Restorative.LostCureII,

    name: {
        EN: "Lost Cure II",
        DE: "Verschollene Vitra",
        FR: "Extra Soin oublié",
        JA: "ロスト・ケアルラ",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "30y",
    radius: "0y",

    available: "50/50",
    cast: "Instant",
    recast: "5.00s",
    weight: 5,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores target's HP.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency:</span> 21,700{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Savior Effect: </span><span style={{color:"#FFFF66"}}>Regen</span>{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>6,000{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>21s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー"
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostCureIII: IAction = {
    id: 304,

    name: {
        EN: "Lost Cure III",
        DE: "Verschollene Vitaga",
        FR: "Méga Soin oublié",
        JA: "ロスト・ケアルガ",
    },
    
    imgBorder: LostActionsWithBorder.Restorative.LostCureIII,
    img: LostActionsNoBorder.Restorative.LostCureIII,
    
    range: "30y",
    radius: "15y",

    cast: "2.00s",
    recast: "2.50s",
    available: "99/99",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores own or target party member's HP and all party members nearby target.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>15,000</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostCureIV: IAction = {
    id: 305,

    imgBorder: LostActionsWithBorder.Restorative.LostCureIV,
    img: LostActionsNoBorder.Restorative.LostCureIV,

    name: {
        EN: "Lost Cure IV",
        DE: "Verschollene Vitaka",
        FR: "Giga Soin oublié",
        JA: "ロスト・ケアルジャ",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "30y",
    radius: "15y",

    available: "25/25",
    cast: "Instant",
    recast: "5.00s",
    weight: 5,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores own or target party member's HP and all party members nearby target.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>21,700{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Savior Effect: </span><span style={{color:"#FFFF66"}}>Regen</span>{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>6,000{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>21s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー"
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostArise: IAction = {
    id: 306,

    name: {
        EN: "Lost Arise",
        DE: "Verschollener Erzengel",
        FR: "Maxi-Vie oubliée",
        JA: "ロスト・アレイズ",
    },
    
    imgBorder: LostActionsWithBorder.Restorative.LostArise,
    img: LostActionsNoBorder.Restorative.LostArise,
    
    range: "30y",
    radius: "0y",

    cast: "3.00s",
    recast: "2.50s",
    available: "5/5",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores all of a KO'd target's HP.{"\n"}{"\n"}If the target was weakened at the time of Raise, the weakness effect will be removed.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD WAR WHM SCH DRK AST GNB SGE",
        DE: "PLD KRG WMA GLT DKR AST REV WEI",
        FR: "PLD GUE MBL ÉRU CHN AST PSB SAG",
        JA: "ナイト 戦士 白魔道士 学者 暗黒騎士 占星術師 ガンブレイカー 賢者",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostSacrifice: IAction = {
    id: 307,

    name: {
        EN: "Lost Sacrifice",
        DE: "Verschollene Aufopferung",
        FR: "Sacrifice oublié",
        JA: "ロスト・サクリファイス"
    },
    
    imgBorder: LostActionsWithBorder.Restorative.LostSacrifice,
    img: LostActionsNoBorder.Restorative.LostSacrifice,
    
    range: "30y",
    radius: "0y",

    cast: "3.00s",
    recast: "2.50s",
    available: "1/1",
    weight: 19,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores all of a KO'd target's HP.{"\n"}{"\n"}Cannot be executed if currently afflicted with <span style={{color:"#FFFF66"}}>Sacrifice</span>.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> Inflicts <span style={{color:"#FFFF66"}}>Sacrifice</span> on self{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Sacrifice Effect:</span> When effect expires, you will be KO'd{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 10s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者"
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostReraise: IAction = {
    id: 308,

    name: {
        EN: "Lost Reraise",
        DE: "Verschollene Rückkehr aus dem Jenseits",
        FR: "Auréole oubliée",
        JA: "ロスト・リレイズ",
    },
    
    imgBorder: LostActionsWithBorder.Restorative.LostReraise,
    img: LostActionsNoBorder.Restorative.LostReraise,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    available: "2/2",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Reraise</span> to self or target player.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Reraise Effect:</span> Grants an 80% chance of automatic revival upon KO{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 180m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

const LostFullCure: IAction = {
    id: 309,

    imgBorder: LostActionsWithBorder.Restorative.LostFullCure,
    img: LostActionsNoBorder.Restorative.LostFullCure,

    name: {
        EN: "Lost Full Cure",
        DE: "Verschollene Erneuerung",
        FR: "Maxi Soin oublié",
        JA: "ロスト・フルケア",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "15y",

    available: "10/10",
    cast: "Instant",
    recast: "180.00s",
    weight: 15,
    quantity: 0,   

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Fully restores HP and MP while granting <span style={{color:"#FFFF66"}}>Auto-potion</span> and <span style={{color:"#FFFF66"}}>Auto-ether</span> to self and nearby party members.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Auto-potion Effect: </span>Restores HP automatically when HP falls below 50%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Auto-ether Effect: </span>Restores MP automatically when MP falls below 20%{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Chance for <span style={{color:"#FFFF66"}}>Auto-potion</span> and <span style={{color:"#FFFF66"}}>Auto-ether</span> effect to end is reduced to 10%</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM SCH AST SGE",
        DE: "WMA GLT AST WEI",
        FR: "MBL ÉRU AST SAG",
        JA: "白魔道士 学者 占星術師 賢者",
    },

    category: {
        EN: "Restorative",
        DE: "Erholsam",
        FR: "Réparatrice",
        JA: "回復力のある"
    }
}

//#endregion

//#region Beneficial Actions

const LostSpellforge: IAction = {
    id: 401,

    name: {
        EN: "Lost Spellforge",
        DE: "Verschollene Zauberschmiede",
        FR: "Forgesort oublié",
        JA: "ロスト・スペルフォージ",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostSpellforge,
    img: LostActionsNoBorder.Beneficial.LostSpellforge,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Lost Spellforge</span> to self or target ally.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Lost Spellforge Effect: </span>All attacks deal magic damage. However, all bonuses to damage dealt are determined by the attack's base damage type.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>300s{"\n"}{"\n"}Effect cannot be stacked with <span>Lost Steelsting</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Beneficial",
        DE: "Vorteilhaft",
        FR: "Bénéfique",
        JA: "有益"
    }
}

const LostSteelsting: IAction = {
    id: 402,

    name: {
        EN: "Lost Steelsting",
        DE: "Verschollener Stahlstachel",
        FR: "Morsure de l'acier oubliée",
        JA: "ロスト・スチールスティング",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostSteelsting,
    img: LostActionsNoBorder.Beneficial.LostSteelsting,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Lost Steelsting</span> to self or target ally.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Lost Steelsting Effect: </span>All attacks deal physical damage. However, all bonuses to damage dealt are determined by the attack's base damage type.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>300s{"\n"}{"\n"}Effect cannot be stacked with <span>Lost Spellforge</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Beneficial",
        DE: "Vorteilhaft",
        FR: "Bénéfique",
        JA: "有益"
    }
}

const LostProtect: IAction = {
    id: 403,

    name: {
        EN: "Lost Protect",
        DE: "Verschollenes Protes",
        FR: "Bouclier oublié",
        JA: "ロスト・プロテス",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostProtect,
    img: LostActionsNoBorder.Beneficial.LostProtect,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player reducing physical damage taken by 10%.{"\n"}{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Beneficial",
        DE: "Vorteilhaft",
        FR: "Bénéfique",
        JA: "有益"
    }
}

//#endregion



const LostActions = {
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
        /*'LostShell': LostShell,
        'LostReflect': LostReflect,
        'LostStoneskin': LostStoneskin,
        'LostBravery': LostBravery,
        'LostAethershield': LostAethershield,
        'LostDervish': LostDervish,
        'LostStoneskinII': LostStoneskinII,
        'LostProtectII': LostProtectII,
        'LostShellII': LostShellII,
        'LostBubble': LostBubble,*/
    },
}


export default LostActions;

/*
export const LostActions = {
    

    

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