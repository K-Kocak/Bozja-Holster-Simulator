import { LostActionSets } from "../LostActionSetSlice";

/**
 * Saves the sets saved in your holsters to local storage
 * @param SetsToSave, the saved sets to save to local storage
 */
export function SaveSavedSetsToLocalStorage(setsToSave : LostActionSets) {
    const localStorageDataFormat = JSON.stringify(setsToSave);
    localStorage.setItem("SavedSetData", localStorageDataFormat);
}

/**
 * Retrieves the saved sets from local storage
 * @returns retrieved data from local storage or empty saved sets
 */
export function LoadSavedSetsFromLocalStorage() : LostActionSets {
    const savedSetDataFromLocalStorage = localStorage.getItem("SavedSetData");

    if(savedSetDataFromLocalStorage != null) {
        const parsedSavedSetData : LostActionSets = JSON.parse(savedSetDataFromLocalStorage)
        return parsedSavedSetData;
    }
    else if(savedSetDataFromLocalStorage == null) {
        return {Sets : []};
    }
    return {Sets : []};
}

/**
 * Deletes saved sets in local storage
 */
export function ClearSavedSetsDataInLocalStorage() {
    localStorage.removeItem("SavedSetData");
}