import { LostActionSets } from "../LostActionSetSlice";
/*
const testingHolsterTimeline = [
    {
        NameOfBoss: "Testing Boss",
        PullBossWith: {
            LostActionLeft: 201,
            LostActionRight: 202,
            EssenceInUse: 720
        },
        LostActionsSpentInPull: [{
            LostActionUsed: 104,
            LostActionTimeOfUse: "5s",
        }],
        LostActionsSpentAfterPull: [{
            LostActionUsed: 205,
            LostActionTimeOfUse: "N/A"
        }]
    }
];

const temporaryInitialState : LostActionSets = {
    Sets: [{
        id: 9999,
        nameOfSet: "Testing Set",
        roleTypeOfSet: "Melee",
        weightOfSet: 81,
        setLostActionContents: [{
            id: 101,
            name: "Lost Focus",
            img: LostActionsNoBorder.Offensive.LostFocus,
            weight: 6,
            quantity: 1,
            category: "Offensive"
        },
        {
            id: 102,
            name: "Lost Font of Magic",
            img: LostActionsNoBorder.Offensive.LostFontofMagic,
            weight: 25,
            quantity: 3,
            category: "Offensive" 
        }],
        PrepopLostActions: {
            LostActionLeft: 103,
            LostActionRight: 104,
            EssenceInUse: 715
        },
        HolsterTimeline: {
            Encounters: testingHolsterTimeline
        }
    }],
    
};
*/

export function SaveSavedSetsToLocalStorage(SetsToSave : LostActionSets) {
    const localStorageDataFormat = JSON.stringify(SetsToSave);
    localStorage.setItem("SavedSetData", localStorageDataFormat);
}

export function LoadSavedSetsFromLocalStorage() : LostActionSets {
    const savedSetDataFromLocalStorage = localStorage.getItem("SavedSetData");
    const emptyLocalStorage : LostActionSets = {Sets : []};
    if(savedSetDataFromLocalStorage != null) {
        const parsedSavedSetData : LostActionSets = JSON.parse(savedSetDataFromLocalStorage)
        return parsedSavedSetData;
    }
    else if(savedSetDataFromLocalStorage == null) {
        return emptyLocalStorage;
    }
    return emptyLocalStorage;
}

export function ClearSavedSetsDataInLocalStorage() {
    localStorage.removeItem("SavedSetData");
}