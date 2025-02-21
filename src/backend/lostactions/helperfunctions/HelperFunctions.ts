import { FFXIVRolePicturesAsObject } from '@backend/lostactions/RolePictureImport';

/**
 * Retrieves the role picture of the role passed in
 * @param roleToUse, the role you want to retrieve the role picture for
 * @returns the image link for the role you want a role picture for
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

// Testing alternative compression methods to shorten string
// TO DO: link compression needs to be improved, as it currently produces a string that is far too long.
export const compress = async (
    str: string,
    encoding = 'gzip' as CompressionFormat
  ): Promise<ArrayBuffer> => {
    const byteArray = new TextEncoder().encode(str)
    const cs = new CompressionStream(encoding)
    const writer = cs.writable.getWriter()
    writer.write(byteArray)
    writer.close()
    return new Response(cs.readable).arrayBuffer()
  }
  
  export const decompress = async (
    byteArray: BufferSource | undefined,
    encoding = 'gzip' as CompressionFormat
  ): Promise<string> => {
    const cs = new DecompressionStream(encoding)
    const writer = cs.writable.getWriter()
    writer.write(byteArray)
    writer.close()
    const arrayBuffer = await new Response(cs.readable).arrayBuffer()
    return new TextDecoder().decode(arrayBuffer)
  }