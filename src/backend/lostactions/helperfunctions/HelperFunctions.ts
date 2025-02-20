import { FFXIVRolePicturesAsObject } from '@backend/lostactions/RolePictureImport';

/**
 * Retrieves the role picture of the role passed in
 * @param roleToUse, the role you want to retrieve the role picture for
 * @returns the image link for the role you want a role picture for
 * 
 * TO DO: PLACE INTO A SEPARATE FILE AS A HELPER FUNCTION
 */
export function GetRoleImageForCurrentRole(roleToUse : string) : string {
    switch (roleToUse) {
        case "Tank":
            return FFXIVRolePicturesAsObject.Tank;
        case "Healer":
            return FFXIVRolePicturesAsObject.Healer;
        case "Melee":
            return FFXIVRolePicturesAsObject.MeleeDPS;
        case "Physical Ranged":
            return FFXIVRolePicturesAsObject.PhysicalRangedDPS;
        case "Magical Ranged":
            return FFXIVRolePicturesAsObject.MagicalRangedDPS;
        case "None":
            return "None";
    }
    return "";
}