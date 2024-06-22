// Lost Action Data Created Here
import LostActionsWithBorder from '@app/ui/pictures/LostActionsWithBorder/LostActionsWithBorderImgInitialise';
import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

import IAction from '@backend/interfaces/IAction';

//Completed Actions
//Focus 101
//FontofMagic 102
//FontofPower 103
//Slash 104

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
    recast: "90.0s",
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
    recast: "60.0s",
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
    recast: "4.0s",
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
    recast: "5.0s",
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
    recast: "15.0s",
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