import QuestionMarkActionImg from '@ui/pictures/BozjaNoActionPictureRaw80x80.png';

import IAction from "@backend/interfaces/IAction";

const QuestionMarkNoAction: IAction = {
    id: 0,

    img: QuestionMarkActionImg,

    name: {
        EN: "No Action Selected",
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
    weight: 0,
    quantity: 0,   
    fragment: [0],
   
    description: {
        EN: <div style={{whiteSpace: 'pre-line'}}>No Action Selected.</div>,
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
export default QuestionMarkNoAction;