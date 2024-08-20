/* eslint-disable no-useless-escape */

// place the description you want to change
let divToAlter ="Delivers a close-quarter attack with a potency of 350. Chance of instant KO when attacking from the rear, which increases the lower the target's HP.\n\n\u003Cspan style=\"color:#00cc22;\"\u003ESpirit of the Beast Effect:\u003C/span\u003E Grants the effect of \u003Cspan style=\"color:#ffff66;\"\u003ELost Font of Power\u003C/span\u003E to self\n\n\u003Cspan style=\"color:#00cc22;\"\u003ELost Font of Power Effect:\u003C/span\u003E Increases damage dealt by 30% and critical hit rate by 40%\n\n\u003Cspan style=\"color:#00cc22;\"\u003EDuration:\u003C/span\u003E 18s\n\nThis action does not share a recast timer with any other actions. Furthermore, the recast timer cannot be affected by other actions."
// check project window for text to copy into actionData
// random ass variable
const colour = `\"color:#00cc22;\"`;
const colour2 = `\"color:#ffff66;\"`;
const colour3 = `\"color:#ff7b1a;\"`;
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour2, `{{color:"#FFFF66"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour, `{{color:"#00CC22"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);
divToAlter = divToAlter.replace(colour3, `{{color:"#FF7B1A"}}`);

const divToPlace = "<div style={{whiteSpace: 'pre-line'}}>" + divToAlter + "</div>"

export default divToPlace;