import IForgottenFragment from '@backend/interfaces/IForgottenFragment';

import BSFFragment from '@ui/pictures/ForgottenFragmentPictures/BSFFragment.png';
import DRSFragment from '@ui/pictures/ForgottenFragmentPictures/DRSFragment.png';
import ZADFragment from '@ui/pictures/ForgottenFragmentPictures/ZADFragment.png';

import LostActions from '@backend/lostactions/actiondata/ActionData';

interface ForgottenFragmentData {
    [nameOfFragment : string] : IForgottenFragment
}
const CastrumSpawnLocation = "(18.9, 12.9)";

const ForgottenFragmentData : ForgottenFragmentData = {
    "FragmentAwakening" : {
        id: 0,
        rank: 5,
        name: "Forgotten Fragment of Awakening",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceGuardian.id, LostActions.ItemRelated.EssenceOrdained.id, LostActions.ItemRelated.EssenceSkirmisher.id, LostActions.ItemRelated.EssenceWatcher.id, LostActions.ItemRelated.EssenceProfane.id, LostActions.ItemRelated.EssenceIrregular.id, LostActions.ItemRelated.EssenceBreathtaker.id],    
        descriptionLootSources: ["(15.6, 24.4)* - Bozjan Taipan IV", "(20.8, 23.1)* - Bozjan Biast IV", "(23.7, 23.5)* - Bozjan Bandersnatch III", "(26.2, 20.9)* - Bozjan Worm III", "(23.3, 20.5) - Bozjan Antlion III", "(28.9, 17.3) - Red Chocobo II", "(27.9, 17.5) - Bozjan Tormentor II", "(29.7, 18.9) - Bozjan Sabotender I,", "(28.9, 21.3) - Bozjan Doblyn I", "(18.2, 20.9) FATE - Help Wanted", "(17.6, 23.4) FATE - No Camping Allowed", "(17.6, 23.3) FATE - The Element of Supplies", "(30.8, 22.2) FATE - The Monster Mash", "(31.6, 17.3) FATE - Unicorn Flakes"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentBecoming" : {
        id: 1,
        rank: 13,
        name: "Forgotten Fragment of Becoming",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.DeepEssenceGuardian.id, LostActions.ItemRelated.DeepEssenceOrdained.id, LostActions.ItemRelated.DeepEssenceSkirmisher.id, LostActions.ItemRelated.DeepEssenceWatcher.id, LostActions.ItemRelated.DeepEssenceProfane.id, LostActions.ItemRelated.DeepEssenceIrregular.id, LostActions.ItemRelated.DeepEssenceBreathtaker.id],
        descriptionLootSources: ["Castrum Lacus Litore - Prisoner Rescue"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCaprice" : {
        id: 2,
        rank: 15,
        name: "Forgotten Fragment of Caprice",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostFairTrade.id, LostActions.Tactical.Mimic.id, LostActions.ItemRelated.DynamisDice.id],
        descriptionLootSources: ["Castrum Lacus Litore - Prisoner Rescue (6/6)"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCare" : {
        id: 3,
        rank: 5,
        name: "Forgotten Fragment of Care",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistanceReraiser.id, LostActions.ItemRelated.ResistancePotionKit.id, LostActions.ItemRelated.ResistanceEtherKit.id],
        descriptionLootSources: ["(16.2, 20.7)* DUST STORM - Earth Sprite V", "(21.4, 20.9)* WIND - Wind Sprite IV", "(26.9, 22.9) THUNDERSTORM - Lightning Sprite III", "(32.3, 15.8) UNDEAD - Bozjan Dullahan V", "(24.9, 19.8) UNDEAD - Bozjan Wight III", "(30.5, 20.8) RAIN - Water Sprite II", "(10.5, 20.9) UNDEAD - Zadnor Gourmand V", "(5.2, 30.3) UNDEAD - Zadnor Banshee III", "(30.7, 22.3) FATE - Heavy Boots of Lead", "(25.4, 21.9) FATE - Parts and Recreation", "(18.2, 20.9) FATE - Pyromancer Supreme", "(27.0, 18.5) FATE - Red (Chocobo) Alert", "(25.2, 22.8) FATE - Scavengers of Human Sorrow"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCaution" : {
        id: 4,
        rank: 2,
        name: "Forgotten Fragment of Caution",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Defensive.LostManawall.id, LostActions.Tactical.LostStealth.id, LostActions.Beneficial.LostProtect.id, LostActions.Beneficial.LostShell.id, LostActions.Restorative.LostCure.id, LostActions.Restorative.LostCureIII.id, LostActions.Defensive.LostIncense.id],
        descriptionLootSources: ["Resistance Quartermaster Cluster Trade at 1:5 Ratio", "(26.3, 25.1) STAR - Fem Flower", "(35.5, 27.3) STAR - Ink Claw", "(19.5, 30.4) STAR - Tideborn Angel"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentCompassion" : {
        id: 5,
        rank: 8,
        name: "Forgotten Fragment of Compassion",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Restorative.LostCureII.id, LostActions.Restorative.LostCureIV.id, LostActions.Restorative.LostArise.id, LostActions.ItemRelated.ResistanceMedikit.id],
        descriptionLootSources: ["(25.5, 15.8) - Bozjan Elasmoth V", "(24.6, 19.8) - Bozjan Doll V", "(22.1, 13.6) - Bozjan Anzu V", "(16.7, 14.9) - Bozjan Wadjet IV", "(12.4, 14.9) - Bozjan Snake IV", "(20.1, 14.3) - Bozjan Goobue IV", "(11.7, 16.6) - Bozjan Ochu III", "(18.8, 16.1) - Bozjan Monitor III", "(11.1, 17.7) - Bozjan Ranunculus II", "(13.2, 18.9) - Bozjan Phobosuchus II", "(11.3, 21.6) - Bozjan Screamer I", "(10.6, 18.6) - Bozjan Elbst I", "(25.3, 12.6) - Zadnor Gagana V", "(23.1, 15.6) - Zadnor Golem V", "(21.5, 18.5) - Zadnor Wivre V", "(11.3, 20.4) FATE - Demonstrably Demonic", "(24.5, 17.3) FATE - Desperately Seeking Something", "(14.3, 18.2) FATE - For Absent Friends", "(20.8, 18.0) FATE - I'm a Mechanical Man", "(14.1, 15.7) FATE - Let Slip the Dogs of War", "(14.1, 15.7) FATE - Murder Death Kill", "(11.3, 15.2) FATE - My Family and Other Animals", "(14.3, 18.2) FATE - Of Steel and Flame", "(11.3, 20.4) FATE - The War Against the Machines", "(24.5, 17.3) FATE - Waste the Rainbow"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentIngenuity" : {
        id: 6,
        rank: 5,
        name: "Forgotten Fragment of Ingenuity",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Detrimental.LostParalyzeIII.id, LostActions.Detrimental.LostBanishIII.id, LostActions.Detrimental.LostDispel.id, LostActions.Beneficial.LostSpellforge.id, LostActions.Beneficial.LostSteelsting.id, LostActions.Tactical.LostSwift.id],
        descriptionLootSources: ["Resistance Quartermaster Cluster Trade at 1:4 Ratio", "(32.9, 18) STAR - Psoglav", "(15.2, 22.1) STAR - Smok", "(28.6, 19.8) STAR - Viy"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentMastery" : {
        id: 7,
        rank: 11,
        name: "Forgotten Fragment of Mastery",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.DeepEssenceAetherweaver.id, LostActions.ItemRelated.DeepEssenceMartialist.id, LostActions.ItemRelated.DeepEssenceSavior.id, LostActions.ItemRelated.DeepEssenceVeteran.id, LostActions.ItemRelated.DeepEssencePlatebearer.id],
        descriptionLootSources: ["Castrum Lacus Litore - Prisoner Rescue"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentPreparation" : {
        id: 8,
        rank: 2,
        name: "Forgotten Fragment of Preparation",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.ResistancePhoenix.id, LostActions.ItemRelated.ResistancePotion.id],
        descriptionLootSources: ["(34.9, 29.0) THUNDERSTORM - Lightning Sprite V", "(31.7, 25.1) RAIN - Water Sprite IV", "(28.3, 27.6) WIND - Wind Sprite III", "(15.2, 22.1) UNDEAD - Bozjan Wraith V", "(24.6, 29.6) UNDEAD - Bozjan Geshunpest III", "(25.7, 25.8) DUST STORM - Earth Sprite II", "(20.1, 36.2) UNDEAD - Zadnor Dullahan V", "(27.2, 38.1) UNDEAD - Zadnor Bhoot III", "(17.0, 26.8) FATE - All Pets Are Off", "(28.6, 26.1) FATE - Brought to Heal", "(24.4, 27.7) FATE - None of Them Knew They Were Robots", "(24.3, 27.6) FATE - Unrest for the Wicked"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentResolve" : {
        id: 9,
        rank: 8,
        name: "Forgotten Fragment of Resolve",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.BannerofNobleEnds.id, LostActions.Offensive.BannerofHonoredSacrifice.id, LostActions.Defensive.BannerofTirelessConviction.id, LostActions.Defensive.BannerofFirmResolve.id, LostActions.Restorative.BannerofSolemnClarity.id, LostActions.Offensive.BannerofHonedAcuity.id],
        descriptionLootSources: ["(14.3, 18.3) Critical Engagement - Metal Fox Chaos", "(9.9, 18.3) Critical Engagement - Trampled under Hoof", "(23.6, 14.9) Critical Engagement - Where Strode the Behemoth"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSagacity" : {
        id: 10,
        rank: 12,
        name: "Forgotten Fragment of Sagacity",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.Offensive.LostFontofMagic.id, LostActions.Tactical.LostFontofSkill.id, LostActions.Offensive.LostFontofPower.id],
        descriptionLootSources: ["Castrum Lacus Litore - Prisoner Rescue"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSkill" : {
        id: 11,
        rank: 2,
        name: "Forgotten Fragment of Skill",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceAetherweaver.id, LostActions.ItemRelated.EssenceMartialist.id, LostActions.ItemRelated.EssenceSavior.id, LostActions.ItemRelated.EssenceVeteran.id, LostActions.ItemRelated.EssencePlatebearer.id],
        descriptionLootSources: ["(31.6, 26.7) - Bozjan Matamata III", "(21.9, 29.9) - Bozjan Mudpuppy II", "(22.2, 26.4) - Bozjan Korrigan II", "(18.6, 29.1) - Bozjan Orobon I", "(16.8, 28.5) - Bozjan Nepenthes I", "(33.5, 29.3) FATE - Conflicting with the First Law", "(27.9, 28.9) FATE - More Machine Now than Man", "(28.6, 26.0) FATE - Seeq and Destroy", "(20.2, 26.9) FATE - Sneak & Spell", "(20.0, 27.1) FATE - The Beasts Must Die"],
        descriptionMapLocation: "Image That points to circles on a map."
    },
    "FragmentSuperstition" : {
        id: 12,
        rank: 11,
        name: "Forgotten Fragment of Superstition",
        img: BSFFragment,
        descriptionContainsLostAction: [LostActions.ItemRelated.EssenceBloodsucker.id, LostActions.ItemRelated.EssenceBeast.id, LostActions.ItemRelated.EssenceTemplar.id],
        descriptionLootSources: ["Castrum Lacus Litore - Prisoner Rescue"],
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