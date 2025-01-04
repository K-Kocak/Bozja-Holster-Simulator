// Lost Action Data Created Here
import LostActionsWithBorder from '@app/ui/pictures/LostActionsWithBorder/LostActionsWithBorderImgInitialise';
import LostActionsNoBorder from '@app/ui/pictures/LostActions/LostActionsImgInitialise';

import IAction from '@backend/interfaces/IAction';

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
    fragment: [15],
   
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants a stack of <span style={{color:"#FFFF66"}}>Boost</span>, up to a maximum of 16.{"\n"}<span style={{color:"#00CC22"}}>Boost Bonus:</span> Increases potency of next weaponskill by 15% per stack{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}Effect ends upon using another lost action.{"\n"}Shares a recast timer with all other weaponskills and spells.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [10],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 70%, draining MP while in use.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Veteran Effect: </span>Grants <span style={{color:"#FFFF66"}}>Spell Shield</span> to self{"\n"}<span style={{color:"#00CC22"}}>Spell Shield Effect: </span>Reduces magic damage taken by 50%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
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
    fragment: [10],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 30% and critical hit rate by 40%.{"\n"} <span style={{color: "#00CC22"}}>Duration: </span>30s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Irregular Effect: </span>Damage bonus effect is increased to 40%{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Platebearer Effect: </span>Grants <span style={{color:"#ffff66"}}>Solid Shield</span> to self{"\n"}<span style={{color:"#00CC22"}}>Solid Shield Effect: </span>Reduces physical damage taken by 50%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR VPR",
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
    fragment: [15],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Delivers an attack with a potency of 800 to all enemies in a cone before you. When critical damage is dealt, potency is tripled.{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions."</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR VPR",
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
    fragment: [15],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>KOs target. The less the target's HP, the greater the chance of success.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Ordained Effect: </span>Chance of success is increased{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Noble Ends</span>, increasing damage dealt by 50% while reducing own HP recovery via most healing actions by 100%.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}Can only be executed while in combat.{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Honored Sacrifice</span>, increasing damage dealt by 55% while draining your HP.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>15s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Duelist Effect: </span>Increases the duration of <span style={{color:"#FFFF66"}}>Banner of Honored Sacrifice</span> to 30s and reduces the health drain effect to 1 HP{"\n"}Can only be executed while in combat.{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Honed Acuity</span>, gaining additional stacks each time an attack is evaded, up to a maximum of 3.{"\n"}<span style={{color:"#00CC22"}}>Banner of Honed Acuity Effect: </span>Increases damage taken by 10% per stack{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>120s{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Transcendent Finesse</span>.{"\n"}<span style={{color:"#00CC22"}}>Banner of Transcendent Finesse Effect: </span>Increases critical hit rate by 30% and reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 20%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}Can only be executed while in combat.{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [2],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Through sheer force of will, restore a random technique of the lost to physical form and throw it at a single target, dealing damage with a potency of 50.{"\n"}Potency increases up to 1,000 based on the weight of the lost action.{"\n"}The lost action thrown will be lost upon execution.{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [16],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Consumes MP to deal unaspected damage with a potency of 300 to all nearby enemies.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Unaspected damage over time{"\n"}<span style={{color:"#00CC22"}}>Potency:</span> 350{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 60s{"\n"}The damage over time effect of Lost Flare Star can only be applied once per target at any given time. This effect cannot be stacked by multiple players.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "BLM SMN RDM PCT",
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
    fragment: [24],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Temporarily eliminates cast time for all spells.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> <span style={{color:"#FFFF66"}}>Magic Burst</span>{"\n"}<span style={{color:"#00CC22"}}>Magic Burst Effect:</span> Increases spell damage by 45% while increasing MP cost{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Ordained Effect:</span> Raises <span style={{color:"#FFFF66"}}>Magic Burst</span> spell damage increase to 100% and nullifies additional MP cost{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Watcher Effect:</span> <span style={{color:"#FF7B1A"}}>Lost Chainspell</span> duration is extended to 90s{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
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
    fragment: [24],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Delivers a close-quarter attack with a potency of 350. Chance of instant KO when attacking from the rear, which increases the lower the target's HP.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Beast Effect:</span> Grants the effect of <span style={{color:"#FFFF66"}}>Lost Font of Power</span> to self{"\n"}<span style={{color:"#00CC22"}}>Lost Font of Power Effect:</span> Increases damage dealt by 30% and critical hit rate by 40%{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 18s{"\n"}This action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions.</div>
        ,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR VPR",
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
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Temporarily applies <span style={{color:"#FFFF66"}}>Heavy</span> to self, while reducing damage taken by 90% and nullifying most knockback and draw-in effects.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 6s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Tireless Conviction</span>, gaining additional stacks each time damage is taken, up to a maximum of 5.{"\n"}<span style={{color:"#00CC22"}}>Banner of Tireless Conviction Effect: </span>Increases damage taken by 15% per stack{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Unyielding Defense</span>.{"\n"}<span style={{color:"#00CC22"}}>Banner of Unyielding Defense Effect: </span>Reduces damage taken by 30%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}Effect cannot be stacked with other Banner actions.</div>,
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Firm Resolve</span>, gaining additional stacks each time damage is taken, up to a maximum of 5.{"\n"}<span style={{color:"#00CC22"}}>Banner of Firm Resolve Effect: </span>Reduces damage dealt by 15% per stack{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Unyielding Defense</span>.{"\n"}<span style={{color:"#00CC22"}}>Banner of Unyielding Defense Effect: </span>Reduces damage taken by 30%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180s{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD WHM BLM SMN SCH NIN MCH AST SAM RDM DNC RPR SGE VPR PCT",
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
    fragment: [4],
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Gesture threateningly, placing yourself at the top of a target's enmity list. {"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Enmity generation is increased and damage taken is reduced by 20%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>20s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
       EN: "MNK DRG BRD WHM BLM SMN SCH NIN MCH AST SAM RDM DNC RPR SGE VPR PCT",
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
    fragment: [28],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Instantly cures <span style={{color:"#FFFF66"}}>Weakness</span> and temporarily nullifies most attacks, while increasing damage dealt by 65%. <span style={{color:"#FFFF66"}}>Memorable</span> will be applied when effect ends.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 10s{"\n"}<span style={{color:"#00CC22"}}>Memorable Effect:</span> Increases damage dealt by 65% while decreasing damage taken by 10%{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 50s{"\n"}Can only be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
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

    imgBorder: LostActionsWithBorder.Defensive.LostBloodRage,
    img: LostActionsNoBorder.Defensive.LostBloodRage,

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
    fragment: [25],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 15% and reduces damage taken by 5% per stack. Stacks increase with each use of a dash attack while effect is active, to a maximum of 4.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 18s{"\n"}Maximum stacks grant the effect of <span style={{color:"#FFFF66"}}>Blood Rush</span>.{"\n"}<span style={{color:"#00CC22"}}>Blood Rush Effect:</span> Increases damage dealt by 60%, shortens recast times of abilities by 75%, and gradually restores HP and MP. Recast time reduction does not apply to charged actions.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s{"\n"}Can only be executed while in combat.</div>,
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
    fragment: [9],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Storm the field under the <span style={{color:"#FFFF66"}}>Banner of Solemn Clarity</span>, periodically gaining additional stacks, up to a maximum of 4.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30s{"\n"}Effect ends upon using another action or moving (including facing a different direction).{"\n"}Cancels auto-attack upon execution.{"\n"}At maximum stacks, take up the <span style={{color:"#FFFF66"}}>Banner of Limitless Grace</span>.{"\n"}<span style={{color:"#00CC22"}}>Banner of Limitless Grace Effect: </span>Increases healing potency by 50% while reducing MP cost{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>120s{"\n"}Can only be executed while in combat.{"\n"}Effect cannot be stacked with other Banner actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores target's HP.{"\n"}<span style={{color:"#00CC22"}}>Cure Potency:</span> 15,000</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
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
    fragment: [5],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores target's HP.{"\n"}<span style={{color:"#00CC22"}}>Cure Potency:</span> 21,700{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Savior Effect: </span><span style={{color:"#FFFF66"}}>Regen</span>{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>6,000{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>21s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Fiendhunter Effect: </span>Grants <span style={{color:"#FFFF66"}}>Refresh</span> to target, while inflicting a stack of <span style={{color:"#FFFF66"}}>Slow+</span> to self{"\n"}<span style={{color:"#00CC22"}}>Refresh Effect: </span>Recover 1000 MP every 3 seconds{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>18s{"\n"}<span style={{color:"#00CC22"}}>Slow+ Effect: </span>Weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay are increased by 1% per stack to a maximum of 16 Effect cannot be nullified.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>18s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
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
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores own or target party member's HP and all party members nearby target.{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>15,000</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
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
    fragment: [5],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores own or target party member's HP and all party members nearby target.{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>21,700{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Savior Effect: </span><span style={{color:"#FFFF66"}}>Regen</span>{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>6,000{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>21s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Elder Effect: </span>Grants <span style={{color:"#FFFF66"}}>Bravery</span> to self and nearby party members{"\n"}<span style={{color:"#00CC22"}}>Bravery Effect: </span>Increases damage dealt by 10%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
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
    fragment: [5],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores all of a KO'd target's HP.{"\n"}If the target was weakened at the time of Raise, the weakness effect will be removed.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Divine Effect: </span>Action becomes usable in Delubrum Reginae Savage at a rate of 15%</div>,
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
    fragment: [22],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores all of a KO'd target's HP.{"\n"}Cannot be executed if currently afflicted with <span style={{color:"#FFFF66"}}>Sacrifice</span>.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> Inflicts <span style={{color:"#FFFF66"}}>Sacrifice</span> on self{"\n"}<span style={{color:"#00CC22"}}>Sacrifice Effect:</span> When effect expires, you will be KO'd{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 10s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Indomitable Effect: </span>Reduces chance of inflicting<span style={{color:"#FFFF66"}}> Sacrifice </span>on self to 50%</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [30],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Reraise</span> to self or target player.{"\n"}<span style={{color:"#00CC22"}}>Reraise Effect:</span> Grants an 80% chance of automatic revival upon KO{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 180m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [34],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Fully restores HP and MP while granting <span style={{color:"#FFFF66"}}>Auto-potion</span> and <span style={{color:"#FFFF66"}}>Auto-ether</span> to self and nearby party members.{"\n"}<span style={{color:"#00CC22"}}>Auto-potion Effect: </span>Restores HP automatically when HP falls below 50%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}<span style={{color:"#00CC22"}}>Auto-ether Effect: </span>Restores MP automatically when MP falls below 20%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Chance for <span style={{color:"#FFFF66"}}>Auto-potion</span> and <span style={{color:"#FFFF66"}}>Auto-ether</span> effect to end is reduced to 10%</div>,
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
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Lost Spellforge</span> to self or target ally.{"\n"}<span style={{color:"#00CC22"}}>Lost Spellforge Effect: </span>All attacks deal magic damage. However, all bonuses to damage dealt are determined by the attack's base damage type.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>300s{"\n"}Effect cannot be stacked with <span>Lost Steelsting</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Lost Steelsting</span> to self or target ally.{"\n"}<span style={{color:"#00CC22"}}>Lost Steelsting Effect: </span>All attacks deal physical damage. However, all bonuses to damage dealt are determined by the attack's base damage type.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>300s{"\n"}Effect cannot be stacked with <span>Lost Spellforge</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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
    weight: 2,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player reducing physical damage taken by 10%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostShell: IAction = {
    id: 404,

    name: {
        EN: "Lost Shell",
        DE: "Verschollenes Vallum",
        FR: "Barrière oubliée",
        JA: "ロスト・シェル",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostShell,
    img: LostActionsNoBorder.Beneficial.LostShell,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    weight: 2,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player reducing magic damage taken by 10%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostReflect: IAction = {
    id: 405,

    name: {
        EN: "Lost Reflect",
        DE: "Verschollene Reflexion",
        FR: "Miroir oublié",
        JA: "ロスト・リフレク",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostReflect,
    img: LostActionsNoBorder.Beneficial.LostReflect,
    
    range: "30y",
    radius: "0y",

    cast: "Instant",
    recast: "2.50s",
    available: "99/99",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [13],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Creates a barrier around self or party member that reflects most magic attacks.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>10s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Guardian Effect: </span>Duration is increased to 30s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostStoneskin: IAction = {
    id: 406,

    name: {
        EN: "Lost Stoneskin",
        DE: "Verschollene Steinhaut",
        FR: "Cuirasse oubliée",
        JA: "ロスト・ストンスキン",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostStoneskin,
    img: LostActionsNoBorder.Beneficial.LostStoneskin,
    
    range: "30y",
    radius: "0y",

    cast: "2.00s",
    recast: "2.50s",
    available: "99/99",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [13],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player that absorbs damage totaling 15% of target's maximum HP.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostBravery: IAction = {
    id: 407,

    name: {
        EN: "Lost Bravery",
        DE: "Verschollene Courage",
        FR: "Bravoure oubliée",
        JA: "ロスト・ブレイブ",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostBravery,
    img: LostActionsNoBorder.Beneficial.LostBravery,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    available: "99/99",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [13],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by an ally or self by 5%.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostAethershield: IAction = {
    id: 408,

    name: {
        EN: "Lost Aethershield",
        DE: "Verschollener Ätherschild",
        FR: "Égide d'éther oubliée",
        JA: "ロスト・エーテルシールド",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostAethershield,
    img: LostActionsNoBorder.Beneficial.LostAethershield,
    
    range: "0y",
    radius: "15y",

    cast: "Instant",
    recast: "60.00s",
    available: "15/15",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    fragment: [21],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Reduces damage taken by self and nearby party members by 30%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 15s</div>,
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
        EN: "Beneficial",
        DE: "Vorteilhaft",
        FR: "Bénéfique",
        JA: "有益"
    }
}

const LostDervish: IAction = {
    id: 409,

    name: {
        EN: "Lost Dervish",
        DE: "Verschollener Rapidus",
        FR: "Célérité extrême oubliée",
        JA: "ロスト・スピードスター",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostDervish,
    img: LostActionsNoBorder.Beneficial.LostDervish,
    
    range: "0y",
    radius: "15y",

    cast: "Instant",
    recast: "90.00s",
    available: "15/15",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    fragment: [20],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases critical hit rate of self and nearby party members by 10%, increases damage dealt by 7%, and reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 1%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "BRD MCH DNC",
        DE: "BRD MCH TÄN",
        FR: "BRD MCH DNS",
        JA: "吟遊詩人 機工士 踊り子",
    },

    category: {
        EN: "Beneficial",
        DE: "Vorteilhaft",
        FR: "Bénéfique",
        JA: "有益"
    }
}

const LostStoneskinII: IAction = {
    id: 410,

    name: {
        EN: "Lost Stoneskin II",
        DE: "Verschollene Steinrahaut",
        FR: "Extra Cuirasse oubliée",
        JA: "ロスト・ストンラスキン",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostStoneskinII,
    img: LostActionsNoBorder.Beneficial.LostStoneskinII,
    
    range: "0y",
    radius: "15y",

    cast: "3.00s",
    recast: "2.50s",
    available: "99/99",
    weight: 5,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [27, 33],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Creates a barrier around self and all party members near you that absorbs damage totaling 10% of maximum HP.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostProtectII: IAction = {
    id: 411,

    name: {
        EN: "Lost Protect II",
        DE: "Verschollenes Protes II",
        FR: "Bouclier II oublié",
        JA: "ロスト・プロテスII",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostProtectII,
    img: LostActionsNoBorder.Beneficial.LostProtectII,
    
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
    fragment: [26],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player reducing physical damage taken by 15%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostShellII: IAction = {
    id: 412,

    name: {
        EN: "Lost Shell II",
        DE: "Verschollenes Vallum II",
        FR: "Barrière II oubliée",
        JA: "ロスト・シェルII",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostShellII,
    img: LostActionsNoBorder.Beneficial.LostShellII,
    
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
    fragment: [26],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Applies a barrier to self or target player reducing magic damage taken by 15%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

const LostBubble: IAction = {
    id: 413,

    name: {
        EN: "Lost Bubble",
        DE: "Verschollene Blase",
        FR: "Vitalité oubliée",
        JA: "ロスト・バブル",
    },
    
    imgBorder: LostActionsWithBorder.Beneficial.LostBubble,
    img: LostActionsNoBorder.Beneficial.LostBubble,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    available: "99/99",
    weight: 5,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [35],
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases maximum HP of self or target player by 30%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 600s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
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

//#region Tactical Actions

const LostStealth: IAction = {
    id: 501,

    imgBorder: LostActionsWithBorder.Tactical.LostStealth,
    img: LostActionsNoBorder.Tactical.LostStealth,

    name: {
        EN: "Lost Stealth",
        DE: "Verschollene Coeurl-Pfoten",
        FR: "Furtivité oubliée",
        JA: "ロスト・ステルス",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    available: "99/99",
    cast: "Instant",
    recast: "15.00s",
    weight: 2,
    quantity: 0,  
    fragment: [4],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Blend in with your surroundings, making it impossible for most enemies to detect you, but reducing movement speed by 25%. Has no effect on certain enemies with special sight.{"\n"}Cannot be executed while in combat.{"\n"}Effect ends upon use of any action other than Sprint, or upon reuse.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

const LostSwift: IAction = {
    id: 502,

    imgBorder: LostActionsWithBorder.Tactical.LostSwift,
    img: LostActionsNoBorder.Tactical.LostSwift,

    name: {
        EN: "Lost Swift",
        DE: "Verschollene Eile",
        FR: "Vélocité oubliée",
        JA: "ロスト・スウィフト",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "0y",

    available: "25/25",
    cast: "Instant",
    recast: "90.00s",
    weight: 4,
    quantity: 0,   
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Greatly increases movement speed.{"\n"}Effect cannot be stacked with other movement speed enhancing abilities.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>10s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Increases evasion by 30%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Watcher Effect: </span>Grants <span style={{color:"#FFFF66"}}>Rapid Recast</span> to self{"\n"}<span style={{color:"#00CC22"}}>Rapid Recast Effect: </span>Shortens recast time for next ability used by 60%{"\n"}Effect only applies to certain abilities.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

const LostFontofSkill: IAction = {
    id: 503,

    imgBorder: LostActionsWithBorder.Tactical.LostFontofSkill,
    img: LostActionsNoBorder.Tactical.LostFontofSkill,

    name: {
        EN: "Lost Font of Skill",
        DE: "Verschollene Technikfontäne",
        FR: "Fontaine de technique oubliée",
        JA: "ロスト・スキルフォント",
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
    weight: 20,
    quantity: 0,   
    fragment: [10],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Resets the recast timer for most actions and role actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

const Mimic: IAction = {
    id: 504,

    imgBorder: LostActionsWithBorder.Tactical.Mimic,
    img: LostActionsNoBorder.Tactical.Mimic,

    name: {
        EN: "Mimic",
        DE: "Nachahmung",
        FR: "Mime",
        JA: "ものまね",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "25y",
    radius: "0y",

    available: "1/1",
    cast: "Instant",
    recast: "5.00s",
    weight: 12,
    quantity: 0,   
    fragment: [2],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Study the lost techniques used by a targeted ally and make them your own.{"\n"}Cannot be executed while in combat.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

const LostPerception: IAction = {
    id: 505,

    imgBorder: LostActionsWithBorder.Tactical.LostPerception,
    img: LostActionsNoBorder.Tactical.LostPerception,

    name: {
        EN: "Lost Perception",
        DE: "Verschollene Tigeraugen",
        FR: "Vision radar oubliée",
        JA: "ロスト・サイトラ",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "15y",

    available: "99/99",
    cast: "Instant",
    recast: "1.50s",
    weight: 4,
    quantity: 0,   
    fragment: [23],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Detect traps within a radius of 15 yalms.{"\n"}If there are no traps within 15 yalms, alerts you to the presence of traps with a radius of 36 yalms.{"\n"}※This action can only be used in Delubrum Reginae.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

const LostImpetus: IAction = {
    id: 506,

    imgBorder: LostActionsWithBorder.Tactical.LostImpetus,
    img: LostActionsNoBorder.Tactical.LostImpetus,

    name: {
        EN: "Lost Impetus",
        DE: "Verschollener Impuls",
        FR: "Impulsion oubliée",
        JA: "ロスト・インペタス",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "0y",
    radius: "10y",

    available: "50/50",
    cast: "Instant",
    recast: "30.00s",
    weight: 10,
    quantity: 0,   
    fragment: [31],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Quickly dash 10 yalms forward.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Applies <span style={{color:"#FFFF66"}}>Lost Swift</span> to self and nearby party members{"\n"}<span style={{color:"#00CC22"}}>Lost Swift Effect:</span> Greatly increases movement speed{"\n"}Effect cannot be stacked with other movement speed enhancing abilities.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>10s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Increases evasion of self and nearby party members by 15%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Watcher Effect: </span>Grants <span style={{color:"#FFFF66"}}>Rapid Recast</span> to self and nearby party members{"\n"}<span style={{color:"#00CC22"}}>Rapid Recast Effect: </span>Shortens recast time for next ability used by 25%{"\n"}Effect only applies to certain abilities.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 15s{"\n"}Cannot be executed while bound.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Tactical",
        DE: "Taktisch",
        FR: "Tactique",
        JA: "戦術的"
    }
}

//#endregion

//#region Detrimental Actions

const LostParalyzeIII: IAction = {
    id: 601,

    name: {
        EN: "Lost Paralyze III",
        DE: "Verschollenes Paralyga",
        FR: "Méga Paralysie oubliée",
        JA: "ロスト・パライガ",
    },
    
    imgBorder: LostActionsWithBorder.Detrimental.LostParalyzeIII,
    img: LostActionsNoBorder.Detrimental.LostParalyzeIII,
    
    range: "30y",
    radius: "6y",

    cast: "2.50s",
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
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Afflicts target and all nearby enemies with <span style={{color:"#FFFF66"}}>Paralysis</span>.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR VPR",
        DE: "PLD MÖN KRG DRG BRD NIN MCH DKR SAM REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD NIN MCH CHN SAM PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 忍者 機工士 暗黒騎士 侍 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

const LostBanishIII: IAction = {
    id: 602,

    name: {
        EN: "Lost Banish III",
        DE: "Verschollenes Verbannga",
        FR: "Méga Bannissement oublié",
        JA: "ロスト・バニシュガ",
    },
    
    imgBorder: LostActionsWithBorder.Detrimental.LostBanishIII,
    img: LostActionsNoBorder.Detrimental.LostBanishIII,
    
    range: "25y",
    radius: "12y",

    cast: "2.50s",
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
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Deals unaspected damage with a potency of 200 to target and all enemies nearby it.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Increases damage undead enemies take by 25%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

const LostDispel: IAction = {
    id: 603,

    name: {
        EN: "Lost Dispel",
        DE: "Verschollenes Entzaubern",
        FR: "Dissipation oubliée",
        JA: "ロスト・ディスペル",
    },
    
    imgBorder: LostActionsWithBorder.Detrimental.LostDispel,
    img: LostActionsNoBorder.Detrimental.LostDispel,
    
    range: "30y",
    radius: "0y",

    cast: "2.50s",
    recast: "2.50s",
    available: "15/15",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [6],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Removes one beneficial status from target.{"\n"}Cancels auto-attack upon execution.</div>
        ,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}


const LostRendArmor: IAction = {
    id: 604,

    imgBorder: LostActionsWithBorder.Detrimental.LostRendArmor,
    img: LostActionsNoBorder.Detrimental.LostRendArmor,

    name: {
        EN: "Lost Rend Armor",
        DE: "Verschollener Panzerbruch",
        FR: "Brise-armure oublié",
        JA: "ロスト・アーマーブレイク",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "20y",
    radius: "10y",

    available: "15/15",
    cast: "Instant",
    recast: "60.00s",
    weight: 8,
    quantity: 0,   
    fragment: [17],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Delivers a jumping attack with a potency of 100.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> Increases target's damage taken by 10%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 30s{"\n"}Cannot be executed while bound.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG NIN SAM RPR VPR",
        DE: "MÖN DRG NIN SAM SNT",
        FR: "MOI DRG NIN SAM FCH",
        JA: "モンク 竜騎士 忍者 侍 リーパー",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

const LostSeraphStrike: IAction = {
    id: 605,

    imgBorder: LostActionsWithBorder.Detrimental.LostSeraphStrike,
    img: LostActionsNoBorder.Detrimental.LostSeraphStrike,

    name: {
        EN: "Lost Seraph Strike",
        DE: "Verschollener Seraphenschlag",
        FR: "Frappe séraphine oubliée",
        JA: "ロスト・セラフストライク",
    },

    skillType: {
        EN: "Ability",
        DE: "Talent",
        FR: "Aptitude",
        JA: "アビリティ"
    },
    
    range: "20y",
    radius: "0y",

    available: "5000",
    cast: "Instant",
    recast: "60.00s",
    weight: 8,
    quantity: 0,   
    fragment: [19],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Consumes MP to deliver a jumping attack that deals unaspected damage with a potency of 500.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> Reduces target's accuracy by 10%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 15s{"\n"}<span style={{color:"#00CC22"}}>Additional Effect:</span> Grants <span style={{color:"#FFFF66"}}>Cleric Stance</span> to self.{"\n"}<span style={{color:"#00CC22"}}>Cleric Stance Bonus:</span> Reduces healing potency by 60% while increasing damage dealt by 60%.{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 15s{"\n"}Cannot be executed while bound.</div>,
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
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

const LostBurst: IAction = {
    id: 606,

    name: {
        EN: "Lost Burst",
        DE: "Verschollener Knall",
        FR: "Bouillonnement oublié",
        JA: "ロスト・バースト",
    },
    
    imgBorder: LostActionsWithBorder.Detrimental.LostBurst,
    img: LostActionsNoBorder.Detrimental.LostBurst,
    
    range: "0y",
    radius: "10y",

    cast: "Instant",
    recast: "2.50s",
    available: "99/99",
    weight: 5,
    quantity: 0,

    skillType: {
        EN: "Spell",
        DE: "Zauber",
        FR: "Sort",
        JA: "魔法"
    },
    fragment: [33],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Deals lightning damage with a potency of 300 to all nearby enemies.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Interrupts all nearby enemies{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Increases damage taken by enemies with <span style={{color:"#FFFF66"}}>Magical Aversion</span> by 10%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

const LostRampage: IAction = {
    id: 607,

    name: {
        EN: "Lost Rampage",
        DE: "Verschollener Amok",
        FR: "Ravage oublié",
        JA: "ロスト・ランページ",
    },
    
    imgBorder: LostActionsWithBorder.Detrimental.LostRampage,
    img: LostActionsNoBorder.Detrimental.LostRampage,
    
    range: "0y",
    radius: "10y",

    cast: "Instant",
    recast: "2.50s",
    available: "99/99",
    weight: 5,
    quantity: 0,

    skillType: {
        EN: "Weaponskill",
        DE: "Waffenfertigkeit",
        FR: "Technique d'arme",
        JA: "ウェポンスキル"
    },
    fragment: [27],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Delivers an attack with a potency of 300 to all nearby enemies.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Interrupts all nearby enemies{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Increases damage taken by enemies with <span style={{color:"#FFFF66"}}>Physical Aversion</span> by 10%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>60s</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD NIN MCH DRK SAM GNB DNC RPR VPR",
        DE: "PLD MÖN KRG DRG BRD NIN MCH DKR SAM REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD NIN MCH CHN SAM PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 忍者 機工士 暗黒騎士 侍 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Detrimental",
        DE: "Schädlich",
        FR: "Préjudiciable",
        JA: "有害な"
    }
}

//#endregion

//#region Item-Related Actions

const DynamisDice: IAction = {
    id: 701,

    name: {
        EN: "Dynamis Dice",
        DE: "Würfel des Schicksals",
        FR: "Dé du destin",
        JA: "運命のダイス",
    },

    img: LostActionsNoBorder.ItemRelated.DynamisDice,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "180.00s",
    weight: 11,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [2],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Place your faith in the goddess Nymeia as she spins the wheel of fate.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Gambler Effect: </span>Removes all negative effects except <span style={{color:"#FFFF66"}}>Doom</span>. Greatly increases the chance of rolling <span style={{color:"#FFFF66"}}>Healer LB3</span> while reducing the chance of rolling other positive effects{"\n"}Can only be executed while in combat.{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Resistance Potion</span> and <span style={{color:"#FF7B1A"}}>Resistance Elixir</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistancePhoenix: IAction = {
    id: 702,

    name: {
        EN: "Resistance Phoenix",
        DE: "Phönixfeder des Widerstands",
        FR: "Plume de phénix de la résistance",
        JA: "レジスタンスフェニックスフェザー",
    },

    img: LostActionsNoBorder.ItemRelated.ResistancePhoenix,
    
    range: "10y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [8],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Resurrects target to a weakened state.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistanceReraiser: IAction = {
    id: 703,

    name: {
        EN: "Resistance Reraiser",
        DE: "Lebensfeder des Widerstands",
        FR: "Vitaplume de la résistance",
        JA: "レジスタンスリレイザー",
    },

    img: LostActionsNoBorder.ItemRelated.ResistanceReraiser,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 8,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [3],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants a 70% chance of automatic revival upon KO.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>180m</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistancePotionKit: IAction = {
    id: 704,

    name: {
        EN: "Resistance Potion Kit",
        DE: "Tränkesammlung des Widerstands",
        FR: "Kit de potion de la résistance",
        JA: "レジスタンスポーションキット",
    },

    img: LostActionsNoBorder.ItemRelated.ResistancePotionKit,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "30.00s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [3],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants <span style={{color:"#FFFF66"}}>Auto-potion</span> to self.{"\n"}<span style={{color:"#00CC22"}}>Auto-potion Effect: </span>Restores HP automatically when HP falls below 50%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Chance for <span style={{color:"#FFFF66"}}>Auto-potion</span> effect to end is reduced to 10%{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Resistance Ether Kit</span> and <span style={{color:"#FF7B1A"}}>Resistance Medikit</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistanceEtherKit: IAction = {
    id: 705,

    name: {
        EN: "Resistance Ether Kit",
        DE: "Äthersammlung des Widerstands",
        FR: "Kit d'éther de la résistance",
        JA: "レジスタンスエーテルキット",
    },

    img: LostActionsNoBorder.ItemRelated.ResistanceEtherKit,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "30.00s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [3],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants <span style={{color:"#FFFF66"}}>Auto-ether</span> to self.{"\n"}<span style={{color:"#00CC22"}}>Auto-ether Effect: </span>Restores MP automatically when MP falls below 20%{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>600s{"\n"}When triggered, there is a 50% chance the effect will end.{"\n"}<span style={{color:"#00CC22"}}>Spirit of the Breathtaker Effect: </span>Chance for <span style={{color:"#FFFF66"}}>Auto-ether</span> effect to end is reduced to 10%{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Resistance Potion Kit</span> and <span style={{color:"#FF7B1A"}}>Resistance Medikit</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistanceMedikit: IAction = {
    id: 706,

    name: {
        EN: "Resistance Medikit",
        DE: "Kräutersammlung des Widerstands",
        FR: "Kit médical de la résistance",
        JA: "レジスタンスレメディキット",
    },

    img: LostActionsNoBorder.ItemRelated.ResistanceMedikit,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "45.00s",
    weight: 3,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [5],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Removes a single detrimental effect from self. When not suffering from detrimental effects, creates a barrier that protects against most status ailments. The barrier is removed after curing the next status ailment suffered.{"\n"}Effect cannot be stacked with similar barrier actions.{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>30m{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Resistance Potion Kit</span> and <span style={{color:"#FF7B1A"}}>Resistance Ether Kit</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistancePotion: IAction = {
    id: 707,

    name: {
        EN: "Resistance Potion",
        DE: "Heiltrank des Widerstands",
        FR: "Potion de la résistance",
        JA: "レジスタンスポーション",
    },

    img: LostActionsNoBorder.ItemRelated.ResistancePotion,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "40.00s",
    weight: 1,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [8],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Gradually restores HP.{"\n"}<span style={{color:"#00CC22"}}>Cure Potency: </span>1,600{"\n"}<span style={{color:"#00CC22"}}>Duration: </span>40s{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Dynamis Dice</span> and <span style={{color:"#FF7B1A"}}>Resistance Elixir</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceAetherweaver: IAction = {
    id: 708,

    name: {
        EN: "Essence of the Aetherweaver",
        DE: "Zaubertrank des Veteranen",
        FR: "Breuvage magique de prêtre guerrier",
        JA: "術士の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceAetherweaver,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [11],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 80%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceAetherweaver: IAction = {
    id: 723,

    name: {
        EN: "Deep Essence of the Aetherweaver",
        DE: "Wundertrank des Veteranen",
        FR: "Breuvage miraculeux de prêtre guerrier",
        JA: "術士の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceAetherweaver,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [7],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 96%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceMartialist: IAction = {
    id: 709,

    name: {
        EN: "Essence of the Martialist",
        DE: "Zaubertrank des Kämpfers",
        FR: "Breuvage magique de protecteur intrépide",
        JA: "闘士の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceMartialist,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [11],
    
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 60%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceMartialist: IAction = {
    id: 724,

    name: {
        EN: "Deep Essence of the Martialist",
        DE: "Wundertrank des Kämpfers",
        FR: "Breuvage miraculeux de protecteur intrépide",
        JA: "闘士の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceMartialist,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [7],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 72%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceSavior: IAction = {
    id: 710,

    name: {
        EN: "Essence of the Savior",
        DE: "Zaubertrank des Heilers",
        FR: "Breuvage magique de vivificateur",
        JA: "治癒者の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceSavior,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [11],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases healing potency by 60%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceSavior: IAction = {
    id: 725,

    name: {
        EN: "Deep Essence of the Savior",
        DE: "Wundertrank des Heilers",
        FR: "Breuvage miraculeux de vivificateur",
        JA: "治癒者の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceSavior,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [7],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases healing potency by 72%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD BLM SMN NIN MCH DRK SAM RDM GNB DNC RPR VPR PCT",
        DE: "PLD MÖN KRG DRG BRD SMA BSW NIN MCH DKR SAM RMA REV TÄN SNT",
        FR: "PLD MOI GUE DRG BRD MNO INV NIN MCH CHN SAM MRG PSB DNS FCH",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 暗黒騎士 侍 赤魔道士 ガンブレイカー 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceVeteran: IAction = {
    id: 711,

    name: {
        EN: "Essence of the Veteran",
        DE: "Zaubertrank des Kampfmagiers",
        FR: "Breuvage magique de mage guerrier",
        JA: "魔戦士の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceVeteran,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [11],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases physical defense by 150%, magic defense by 45%, and maximum HP by 60%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceVeteran: IAction = {
    id: 726,

    name: {
        EN: "Deep Essence of the Veteran",
        DE: "Wundertrank des Kampfmagiers",
        FR: "Breuvage miraculeux de mage guerrier",
        JA: "魔戦士の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceVeteran,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [7],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases physical defense by 180%, magic defense by 54%, and maximum HP by 72%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM BLM SMN SCH AST RDM SGE PCT",
        DE: "WMA SMA BSW GLT AST RMA WEI",
        FR: "MBL MNO INV ÉRU AST MRG SAG",
        JA: "白魔道士 黒魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssencePlatebearer: IAction = {
    id: 712,

    name: {
        EN: "Essence of the Platebearer",
        DE: "Zaubertrank des Ritters",      
        FR: "Breuvage magique de soldat cuirassé",
        JA: "重騎兵の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssencePlatebearer,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [11],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 80% and maximum HP by 45%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD NIN MCH SAM DNC RPR VPR",
        DE: "MÖN DRG BRD NIN MCH SAM TÄN SNT",
        FR: "MOI DRG BRD NIN MCH SAM DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 忍者 機工士 侍 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssencePlatebearer: IAction = {
    id: 727,

    name: {
        EN: "Deep Essence of the Platebearer",
        DE: "Wundertrank des Ritters",
        FR: "Breuvage miraculeux de soldat cuirassé",
        JA: "重騎兵の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssencePlatebearer,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [7],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 96% and maximum HP by 54%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD NIN MCH SAM DNC RPR VPR",
        DE: "MÖN DRG BRD NIN MCH SAM TÄN SNT",
        FR: "MOI DRG BRD NIN MCH SAM DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 忍者 機工士 侍 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceGuardian: IAction = {
    id: 713,

    name: {
        EN: "Essence of the Guardian",
        DE: "Zaubertrank des Beschützers",
        FR: "Breuvage magique de gardien",
        JA: "守護者の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceGuardian,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 30% and maximum HP by 10%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceGuardian: IAction = {
    id: 728,

    name: {
        EN: "Deep Essence of the Guardian",
        DE: "Wundertrank des Beschützers",
        FR: "Breuvage miraculeux de gardien",
        JA: "守護者の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceGuardian,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 36% and maximum HP by 12%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceOrdained: IAction = {
    id: 714,

    name: {
        EN: "Essence of the Ordained",
        DE: "Zaubertrank des Priesters",
        FR: "Breuvage magique de prêtre",
        JA: "司祭の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceOrdained,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 20%, healing potency by 25%, and maximum MP by 50%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM SMN SCH AST RDM SGE PCT",
        DE: "WMA BSW GLT AST RMA WEI",
        FR: "MBL INV ÉRU AST MRG SAG",
        JA: "白魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceOrdained: IAction = {
    id: 729,

    name: {
        EN: "Deep Essence of the Ordained",
        DE: "Wundertrank des Priesters",
        FR: "Breuvage miraculeux de prêtre",
        JA: "司祭の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceOrdained,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 24%, healing potency by 30%, and maximum MP by 60%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "WHM SMN SCH AST RDM SGE PCT",
        DE: "WMA BSW GLT AST RMA WEI",
        FR: "MBL INV ÉRU AST MRG SAG",
        JA: "白魔道士 召喚士 学者 占星術師 赤魔道士 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceSkirmisher: IAction = {
    id: 715,

    name: {
        EN: "Essence of the Skirmisher",
        DE: "Zaubertrank des Kriegers",
        FR: "Breuvage magique de combattant",
        JA: "武人の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceSkirmisher,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 20% and critical hit rate by 15%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceSkirmisher: IAction = {
    id: 730,

    name: {
        EN: "Deep Essence of the Skirmisher",
        DE: "Wundertrank des Kriegers",
        FR: "Breuvage miraculeux de combattant",
        JA: "武人の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceSkirmisher,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 24% and critical hit rate by 18%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceWatcher: IAction = {
    id: 716,

    name: {
        EN: "Essence of the Watcher",
        DE: "Zaubertrank des Spähers",
        FR: "Breuvage magique d'éclaireur",
        JA: "斥候の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceWatcher,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Reduces maximum HP by 5% while increasing evasion by 40%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceWatcher: IAction = {
    id: 731,

    name: {
        EN: "Deep Essence of the Watcher",
        DE: "Wundertrank des Spähers",
        FR: "Breuvage miraculeux d'éclaireur",
        JA: "斥候の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceWatcher,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Reduces maximum HP by 3% while increasing evasion by 48%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceProfane: IAction = {
    id: 717,

    name: {
        EN: "Essence of the Profane",
        DE: "Zaubertrank des Mönchs",
        FR: "Breuvage magique de prêtre hérétique",
        JA: "破戒僧の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceProfane,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Reduces healing potency by 70% while increasing damage dealt by 100%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceProfane: IAction = {
    id: 732,

    name: {
        EN: "Deep Essence of the Profane",
        DE: "Wundertrank des Mönchs",
        FR: "Breuvage miraculeux de prêtre hérétique",
        JA: "破戒僧の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceProfane,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Reduces healing potency by 70% while increasing damage dealt by 120%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceIrregular: IAction = {
    id: 718,

    name: {
        EN: "Essence of the Irregular",
        DE: "Zaubertrank des Berserkers",
        FR: "Breuvage magique de guerrier enragé",
        JA: "狂戦士の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceIrregular,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 90% and damage taken by 200% while reducing maximum HP by 30%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceIrregular: IAction = {
    id: 733,

    name: {
        EN: "Deep Essence of the Irregular",
        DE: "Wundertrank des Berserkers",
        FR: "Breuvage miraculeux de guerrier enragé",
        JA: "狂戦士の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceIrregular,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 108% and damage taken by 200% while reducing maximum HP by 30%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceBreathtaker: IAction = {
    id: 719,

    name: {
        EN: "Essence of the Breathtaker",
        DE: "Zaubertrank des Diebes",
        FR: "Breuvage magique de voleur",
        JA: "盗賊の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceBreathtaker,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [0],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases poison resistance and movement speed, including mount speed, and increases evasion by 10%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceBreathtaker: IAction = {
    id: 734,

    name: {
        EN: "Deep Essence of the Breathtaker",
        DE: "Wundertrank des Diebes",
        FR: "Breuvage miraculeux de voleur",
        JA: "盗賊の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceBreathtaker,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [1],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases poison resistance and movement speed, including mount speed, and increases evasion by 20%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceBloodsucker: IAction = {
    id: 720,

    name: {
        EN: "Essence of the Bloodsucker",
        DE: "Zaubertrank des Blutsaugers",
        FR: "Breuvage magique de vampire",
        JA: "吸血鬼の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceBloodsucker,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [12],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 40%.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Absorb a portion of damage dealt as HP{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceBloodsucker: IAction = {
    id: 735,

    name: {
        EN: "Deep Essence of the Bloodsucker",
        DE: "Wundertrank des Blutsaugers",
        FR: "Breuvage miraculeux de vampire",
        JA: "吸血鬼の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceBloodsucker,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [14],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases damage dealt by 48%.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Absorb a portion of damage dealt as HP{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceBeast: IAction = {
    id: 721,

    name: {
        EN: "Essence of the Beast",
        DE: "Zaubertrank der Wolfsleute",
        FR: "Breuvage magique d'homme-loup",
        JA: "人狼の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceBeast,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [12],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 50% and maximum HP by 45%.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Absorb a portion of damage dealt as HP{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceBeast: IAction = {
    id: 736,

    name: {
        EN: "Deep Essence of the Beast",
        DE: "Wundertrank der Wolfsleute",
        FR: "Breuvage miraculeux d'homme-loup",
        JA: "人狼の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceBeast,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [14],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 60% and maximum HP by 54%.{"\n"}<span style={{color:"#00CC22"}}>Additional Effect: </span>Absorb a portion of damage dealt as HP{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const EssenceTemplar: IAction = {
    id: 722,

    name: {
        EN: "Essence of the Templar",
        DE: "Zaubertrank des Paladins",
        FR: "Breuvage magique de chevalier sacré",
        JA: "聖騎士の秘薬",
    },

    img: LostActionsNoBorder.ItemRelated.EssenceTemplar,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 6,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [12],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 50%, maximum HP by 45%, and damage dealt by 60%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const DeepEssenceTemplar: IAction = {
    id: 737,

    name: {
        EN: "Deep Essence of the Templar",
        DE: "Wundertrank des Paladins",
        FR: "Breuvage miraculeux de chevalier sacré",
        JA: "聖騎士の霊薬",
    },

    img: LostActionsNoBorder.ItemRelated.DeepEssenceTemplar,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 10,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [14],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 60%, maximum HP by 54%, and damage dealt by 72%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence or Deep Essence actions.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceGambler: IAction = {
    id: 738,

    name: {
        EN: "Pure Essence of the Gambler",
        DE: "Maxtrank des Draufgängers",
        FR: "Breuvage érémitique de risque-tout",
        JA: "勝負師の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceGambler,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [18],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases evasion by 11%, critical hit rate by 77%, and direct hit rate by 77%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Alters <span style={{color:"#FF7B1A"}}>Dynamis Dice</span> rolls{"\n"}※This action can only be used in Delubrum Reginae.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG BRD BLM SMN NIN MCH SAM RDM DNC RPR VPR PCT",
        DE: "MÖN DRG BRD SMA BSW NIN MCH SAM RMA TÄN SNT",
        FR: "MOI DRG BRD MNO INV NIN MCH SAM MRG DNS FCH",
        JA: "モンク 竜騎士 吟遊詩人 黒魔道士 召喚士 忍者 機工士 侍 赤魔道士 踊り子 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceElder: IAction = {
    id: 739,

    name: {
        EN: "Pure Essence of the Elder",
        DE: "Maxtrank des Weisen",
        FR: "Breuvage érémitique de sage",
        JA: "賢者の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceElder,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [16],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 25%, damage dealt by 50%, and maximum HP by 100%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Using <span style={{color:"#FF7B1A"}}>Lost Cure IV</span> grants <span style={{color:"#FFFF66"}}>Bravery</span> to self and nearby party members{"\n"}※This action can only be used in Delubrum Reginae.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "BLM SMN RDM PCT",
        DE: "SMA BSW RMA",
        FR: "MNO INV MRG",
        JA: "黒魔道士 召喚士 赤魔道士",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceDuelist: IAction = {
    id: 740,

    name: {
        EN: "Pure Essence of the Duelist",
        DE: "Maxtrank des Fechtmeisters",
        FR: "Breuvage érémitique de fine lame",
        JA: "剣豪の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceDuelist,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [17],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 60%, damage dealt by 60%, and maximum HP by 81%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Increases the duration of <span style={{color:"#FF7B1A"}}>Banner of Honored Sacrifice</span> to 30s while reducing health drain to 1 HP{"\n"}※This action can only be used in Delubrum Reginae.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "MNK DRG NIN SAM RPR VPR",
        DE: "MÖN DRG NIN SAM SNT",
        FR: "MOI DRG NIN SAM FCH",
        JA: "モンク 竜騎士 忍者 侍 リーパー",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceFiendHunter: IAction = {
    id: 741,

    name: {
        EN: "Pure Essence of the Fiendhunter",
        DE: "Maxtrank des Bogengeweihten",
        FR: "Breuvage érémitique d'archer émérite",
        JA: "弓聖の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceFiendHunter,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [20],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 60%, damage dealt by 50%, and maximum HP by 81%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Using <span style={{color:"#FF7B1A"}}>Lost Cure II</span> grants <span style={{color:"#FFFF66"}}>Refresh</span> to target while inflicting a stack of <span style={{color:"#FFFF66"}}>Slow+</span> to self{"\n"}※This action can only be used in Delubrum Reginae.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "BRD MCH DNC",
        DE: "BRD MCH TÄN",
        FR: "BRD MCH DNS",
        JA: "吟遊詩人 機工士 踊り子",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceIndomitable: IAction = {
    id: 742,

    name: {
        EN: "Pure Essence of the Indomitable",
        DE: "Maxtrank des Helden",
        FR: "Breuvage érémitique de héros illustre",
        JA: "豪傑の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceIndomitable,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [21],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 40%, damage dealt by 72%, and maximum HP by 50%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Using <span style={{color:"#FF7B1A"}}>Lost Sacrifice</span> inflicts <span style={{color:"#FFFF66"}}>Sacrifice</span> 50% of the time{"\n"}※This action can only be used in Delubrum Reginae.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const PureEssenceDivine: IAction = {
    id: 743,

    name: {
        EN: "Pure Essence of the Divine",
        DE: "Maxtrank des Heiligen",
        FR: "Breuvage érémitique de saint",
        JA: "聖人の仙薬",
    },

    img: LostActionsNoBorder.ItemRelated.PureEssenceDivine,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    weight: 12,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [19],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Increases defense by 25%, damage dealt by 35%, and maximum HP by 100%.{"\n"}Effect ends upon reuse.{"\n"}Cannot be used with other Essence, Deep Essence, or Pure Essence actions.{"\n"}It is said that Pure Essences may grant unexpected effects...{"\n"}<span style={{color:"#00CC22"}}>Unexpected Effect: </span>Allows usage of <span style={{color:"#FF7B1A"}}>Lost Arise</span> in Delubrum Reginae Savage at a rate of 15%{"\n"}※This action can only be used in Delubrum Reginae.</div>,
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
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const Lodestone: IAction = {
    id: 744,

    name: {
        EN: "Lodestone",
        DE: "Stein der Rückführung",
        FR: "Pierre de rapatriement",
        JA: "デジョンストーン",
    },

    img: LostActionsNoBorder.ItemRelated.Lodestone,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "2.50s",
    weight: 1,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [29],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Instantly return to the starting point of the area.{"\n"}Cannot be executed while in combat.{"\n"}Shares a recast timer with all other weaponskills and spells.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const LightCurtain: IAction = {
    id: 745,

    name: {
        EN: "Light Curtain",
        DE: "Lichtvorhang",
        FR: "Rideau de lumière",
        JA: "光のカーテン",
    },

    img: LostActionsNoBorder.ItemRelated.LightCurtain,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "2.50s",
    weight: 1,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [32],

    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Grants the effect of <span style={{color:"#FFFF66"}}>Lost Reflect</span> to self.{"\n"}<span style={{color:"#00CC22"}}>Lost Reflect Effect:</span> Reflects most magic attacks{"\n"}<span style={{color:"#00CC22"}}>Duration:</span> 10s{"\n"}Shares a recast timer with all other weaponskills and spells.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
    }
}

const ResistanceElixir: IAction = {
    id: 746,

    name: {
        EN: "Resistance Elixir",
        DE: "Elixier des Widerstands",
        FR: "Élixir de la résistance",
        JA: "レジスタンスエリクサー",
    },

    img: LostActionsNoBorder.ItemRelated.ResistanceElixir,
    
    range: "0y",
    radius: "0y",

    cast: "Instant",
    recast: "90.00s",
    weight: 4,
    quantity: 0,

    skillType: {
        EN: "Item",
        DE: "Gegenstand",
        FR: "Objet",
        JA: "アイテム"
    },
    fragment: [25, 28, 34],
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>Restores own HP and MP to maximum.{"\n"}Shares a recast timer with <span style={{color:"#FF7B1A"}}>Resistance Potion</span> and <span style={{color:"#FF7B1A"}}>Dynamis Dice</span>.</div>,
        DE: <div></div>,
        FR: <div></div>,
        JA: <div></div>
    },

    affinity: {
        EN: "PLD MNK WAR DRG BRD WHM BLM SMN SCH NIN MCH DRK AST SAM RDM GNB DNC RPR SGE VPR PCT",
        DE: "PLD MÖN KRG DRG BRD WMA SMA BSW GLT NIN MCH DKR AST SAM RMA REV TÄN SNT WEI",
        FR: "PLD MOI GUE DRG BRD MBL MNO INV ÉRU NIN MCH CHN AST SAM MRG PSB DNS FCH SAG",
        JA: "ナイト モンク 戦士 竜騎士 吟遊詩人 白魔道士 黒魔道士 召喚士 学者 忍者 機工士 暗黒騎士 占星術師 侍 赤魔道士 ガンブレイカー 踊り子 リーパー 賢者",
    },

    category: {
        EN: "Item-Related",
        DE: "Artikelbezogen",
        FR: "Lié-à-l'article",
        JA: "アイテム関連"
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
console.log(LostActions);
export default LostActions;
