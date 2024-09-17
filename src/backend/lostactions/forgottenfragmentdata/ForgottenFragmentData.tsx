import IForgottenFragment from '@backend/interfaces/IForgottenFragment';

import BSFFragment from '@ui/pictures/ForgottenFragmentPictures/BSFFragment.png';
import DRSFragment from '@ui/pictures/ForgottenFragmentPictures/DRSFragment.png';
import ZADFragment from '@ui/pictures/ForgottenFragmentPictures/ZADFragment.png';

import LostActions from '@backend/lostactions/actiondata/ActionData';

interface ForgottenFragmentData {
    [nameOfFragment : string] : IForgottenFragment
}

const ForgottenFragmentData : ForgottenFragmentData = {
    "FragmentAwakening" : {
        id: 0,
        rank: 5,
        name: "Forgotten Fragment of Awakening",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceGuardian.id, LostActions.ItemRelated.EssenceOrdained.id, LostActions.ItemRelated.EssenceSkirmisher.id, LostActions.ItemRelated.EssenceWatcher.id, LostActions.ItemRelated.EssenceProfane.id, LostActions.ItemRelated.EssenceIrregular.id, LostActions.ItemRelated.EssenceBreathtaker.id],    
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentBecoming" : {
        id: 1,
        rank: 13,
        name: "Forgotten Fragment of Becoming",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.DeepEssenceGuardian.id, LostActions.ItemRelated.DeepEssenceOrdained.id, LostActions.ItemRelated.DeepEssenceSkirmisher.id, LostActions.ItemRelated.DeepEssenceWatcher.id, LostActions.ItemRelated.DeepEssenceProfane.id, LostActions.ItemRelated.DeepEssenceIrregular.id, LostActions.ItemRelated.DeepEssenceBreathtaker.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCaprice" : {
        id: 2,
        rank: 15,
        name: "Forgotten Fragment of Caprice",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostFairTrade.id, LostActions.Tactical.Mimic.id, LostActions.ItemRelated.DynamisDice.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCare" : {
        id: 3,
        rank: 5,
        name: "Forgotten Fragment of Care",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistanceReraiser.id, LostActions.ItemRelated.ResistancePotionKit.id, LostActions.ItemRelated.ResistanceEtherKit.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCaution" : {
        id: 4,
        rank: 2,
        name: "Forgotten Fragment of Caution",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Defensive.LostManawall.id, LostActions.Tactical.LostStealth.id, LostActions.Beneficial.LostProtect.id, LostActions.Beneficial.LostShell.id, LostActions.Restorative.LostCure.id, LostActions.Restorative.LostCureIII.id, LostActions.Defensive.LostIncense.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCompassion" : {
        id: 5,
        rank: 8,
        name: "Forgotten Fragment of Compassion",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Restorative.LostCureII.id, LostActions.Restorative.LostCureIV.id, LostActions.Restorative.LostArise.id, LostActions.ItemRelated.ResistanceMedikit.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentIngenuity" : {
        id: 6,
        rank: 5,
        name: "Forgotten Fragment of Ingenuity",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Detrimental.LostParalyzeIII.id, LostActions.Detrimental.LostBanishIII.id, LostActions.Detrimental.LostDispel.id, LostActions.Beneficial.LostSpellforge.id, LostActions.Beneficial.LostSteelsting.id, LostActions.Tactical.LostSwift.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentMastery" : {
        id: 7,
        rank: 11,
        name: "Forgotten Fragment of Mastery",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.DeepEssenceAetherweaver.id, LostActions.ItemRelated.DeepEssenceMartialist.id, LostActions.ItemRelated.DeepEssenceSavior.id, LostActions.ItemRelated.DeepEssenceVeteran.id, LostActions.ItemRelated.DeepEssencePlatebearer.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentPreparation" : {
        id: 8,
        rank: 2,
        name: "Forgotten Fragment of Preparation",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistancePhoenix.id, LostActions.ItemRelated.ResistancePotion.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentResolve" : {
        id: 9,
        rank: 8,
        name: "Forgotten Fragment of Resolve",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.BannerofNobleEnds.id, LostActions.Offensive.BannerofHonoredSacrifice.id, LostActions.Defensive.BannerofTirelessConviction.id, LostActions.Defensive.BannerofFirmResolve.id, LostActions.Restorative.BannerofSolemnClarity.id, LostActions.Offensive.BannerofHonedAcuity.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSagacity" : {
        id: 10,
        rank: 12,
        name: "Forgotten Fragment of Sagacity",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostFontofMagic.id, LostActions.Tactical.LostFontofSkill.id, LostActions.Offensive.LostFontofPower.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSkill" : {
        id: 11,
        rank: 2,
        name: "Forgotten Fragment of Skill",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceAetherweaver.id, LostActions.ItemRelated.EssenceMartialist.id, LostActions.ItemRelated.EssenceSavior.id, LostActions.ItemRelated.EssenceVeteran.id, LostActions.ItemRelated.EssencePlatebearer.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSuperstition" : {
        id: 12,
        rank: 11,
        name: "Forgotten Fragment of Superstition",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceBloodsucker.id, LostActions.ItemRelated.EssenceBeast.id, LostActions.ItemRelated.EssenceTemplar.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSupport" : {
        id: 13,
        rank: 8,
        name: "Forgotten Fragment of Support",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Beneficial.LostReflect.id, LostActions.Beneficial.LostStoneskin.id, LostActions.Beneficial.LostBravery.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentTranscendence" : {
        id: 14,
        rank: 14,
        name: "Forgotten Fragment of Transcendence",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.DeepEssenceBloodsucker.id, LostActions.ItemRelated.DeepEssenceBeast.id, LostActions.ItemRelated.DeepEssenceTemplar.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentViolence" : {
        id: 15,
        rank: 8,
        name: "Forgotten Fragment of Violence",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostFocus.id, LostActions.Offensive.LostSlash.id, LostActions.Offensive.LostDeath.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentClarity" : {
        id: 16,
        rank: 15,
        name: "Forgotten Fragment of Clarity",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceElder.id, LostActions.Offensive.LostFlareStar.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentContention" : {
        id: 17,
        rank: 15,
        name: "Forgotten Fragment of Contention",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceDuelist.id, LostActions.Detrimental.LostRendArmor.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentDeception" : {
        id: 18,
        rank: 13,
        name: "Forgotten Fragment of Deception",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceGambler.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentDivinity" : {
        id: 19,
        rank: 15,
        name: "Forgotten Fragment of Divinity",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceDivine.id, LostActions.Detrimental.LostSeraphStrike.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentFinesse" : {
        id: 20,
        rank: 15,
        name: "Forgotten Fragment of Finesse",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceFiendHunter.id, LostActions.Beneficial.LostDervish.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentFortitude" : {
        id: 21,
        rank: 15,
        name: "Forgotten Fragment of Fortitude",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.PureEssenceIndomitable.id, LostActions.Beneficial.LostAethershield.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentLoss" : {
        id: 22,
        rank: 14,
        name: "Forgotten Fragment of Loss",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.Restorative.LostSacrifice.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentObservation" : {
        id: 23,
        rank: 10,
        name: "Forgotten Fragment of Observation",
        img: DRSFragment,
        descriptionContainsLostAction: [LostActions.Tactical.LostPerception.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentArtistry" : {
        id: 24,
        rank: 18,
        name: "Forgotten Fragment of Artistry",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostChainspell.id, LostActions.Offensive.LostAssassination.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCunning" : {
        id: 25,
        rank: 25,
        name: "Forgotten Fragment of Cunning",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistanceElixir.id, LostActions.Defensive.LostBloodRage.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentDesperation" : {
        id: 26,
        rank: 22,
        name: "Forgotten Fragment of Desperation",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Beneficial.LostProtectII.id, LostActions.Beneficial.LostShellII.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentFerocity" : {
        id: 27,
        rank: 16,
        name: "Forgotten Fragment of Ferocity",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Beneficial.LostStoneskinII.id, LostActions.Detrimental.LostRampage.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentHeroism" : {
        id: 28,
        rank: 25,
        name: "Forgotten Fragment of Heroism",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistanceElixir.id, LostActions.Defensive.LostExcellence.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentHistory" : {
        id: 29,
        rank: 16,
        name: "Forgotten Fragment of History",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.Lodestone.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentHope" : {
        id: 30,
        rank: 18,
        name: "Forgotten Fragment of Hope",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Restorative.LostReraise.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentInspiration" : {
        id: 31,
        rank: 22,
        name: "Forgotten Fragment of Inspiration",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Tactical.LostImpetus.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentMoonlight" : {
        id: 32,
        rank: 18,
        name: "Forgotten Fragment of Moonlight",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.LightCurtain.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentRage" : {
        id: 33,
        rank: 16,
        name: "Forgotten Fragment of Rage",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Beneficial.LostStoneskinII.id, LostActions.Detrimental.LostBurst.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentRevelation" : {
        id: 34,
        rank: 25,
        name: "Forgotten Fragment of Revelation",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistanceElixir.id, LostActions.Restorative.LostFullCure.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentTenacity" : {
        id: 35,
        rank: 22,
        name: "Forgotten Fragment of Tenacity",
        img: ZADFragment,
        descriptionContainsLostAction: [LostActions.Beneficial.LostBubble.id],
        descriptionLootSources: ["It drops here."],
        descriptionMapLocation: "Image That points to circles on a map."
    },
}

export default ForgottenFragmentData;