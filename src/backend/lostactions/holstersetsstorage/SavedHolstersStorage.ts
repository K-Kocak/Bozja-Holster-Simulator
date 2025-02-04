import { LostActionSets } from "../LostActionSetSlice";

/**
 * Saves the sets saved in your holsters to local storage
 * @param SetsToSave, the saved sets to save to local storage
 */
export function SaveSavedSetsToLocalStorage(setsToSave : LostActionSets) {
    const localStorageDataFormat = JSON.stringify(setsToSave);
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