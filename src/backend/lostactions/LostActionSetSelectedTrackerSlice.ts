import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedSavedSets {
    SelectedSets: number[]
    isConfirmDeletionOfSavedSets: boolean,
    currentRoleFilter: "None" | "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged",
    currentTopRole: "None" | "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged"
}

const initialState: SelectedSavedSets = {SelectedSets: [], isConfirmDeletionOfSavedSets: false, currentRoleFilter: "None", currentTopRole: "None"};

export const SelectedSavedSetsSlice = createSlice({
    name: 'SelectedSavedSets',
    initialState,
    reducers: {
        clearSelectedSavedSets: (state) => {         
            state.SelectedSets = [];
        },
        addSelectedSavedSet: (state, action: PayloadAction<number>) => {
            state.SelectedSets.push(action.payload);
            console.log(state.SelectedSets);
        },
        newSelectedSavedSets: (state, action: PayloadAction<number[]>) => {
            state.SelectedSets = action.payload;
        },
        setIsConfirmDeletionOfSavedSets: (state, action: PayloadAction<boolean>) => {
            state.isConfirmDeletionOfSavedSets = action.payload;
        },
        setRoleFilter: (state, action: PayloadAction<"None" | "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged">) => {
            switch (action.payload) {
                case "None":
                    state.currentRoleFilter = "Tank";
                    break;
                case "Tank":
                    state.currentRoleFilter = "Healer";
                    break;
                case "Healer":
                    state.currentRoleFilter = "Melee";
                    break;
                case "Melee":
                    state.currentRoleFilter = "Magical Ranged";
                    break;
                case "Magical Ranged":
                    state.currentRoleFilter = "Physical Ranged";
                    break;
                case "Physical Ranged":
                    state.currentRoleFilter = "None";
                    break;
                default:
                    console.log("No Such Role or None Exists");
                    break;
            }
        },
        resetRoleFilter: (state) => {
            state.currentRoleFilter = "None";
        },
        setTopRoleSort: (state, action: PayloadAction<"None" | "Tank" | "Healer" | "Melee" | "Magical Ranged" | "Physical Ranged">) => {
            state.currentTopRole = action.payload;
            /*switch (action.payload) {
                case "None":
                    state.currentTopRole = "Tank";
                    break;
                case "Tank":
                    state.currentTopRole = "Healer";
                    break;
                case "Healer":
                    state.currentTopRole = "Melee";
                    break;
                case "Melee":
                    state.currentTopRole = "Magical Ranged";
                    break;
                case "Magical Ranged":
                    state.currentTopRole = "Physical Ranged";
                    break;
                case "Physical Ranged":
                    state.currentTopRole = "None";
                    break;
                default:
                    console.log("No Such Role or None Exists");
                    break;
            }*/
        },
        resetTopRoleSort: (state) => {
            state.currentTopRole = "None";
        },
    },
})

export const { clearSelectedSavedSets, addSelectedSavedSet, newSelectedSavedSets, setIsConfirmDeletionOfSavedSets, setRoleFilter, resetRoleFilter, setTopRoleSort, resetTopRoleSort } = SelectedSavedSetsSlice.actions;

export default SelectedSavedSetsSlice.reducer;