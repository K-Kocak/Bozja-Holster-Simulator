/* eslint-disable no-useless-escape */

// place the description you want to change
let divToAlter = "Temporarily eliminates cast time for all spells.\n\n\u003Cspan style=\"color:#00cc22;\"\u003EDuration: \u003C/span\u003E30s\n\n\u003Cspan style=\"color:#00cc22;\"\u003EAdditional Effect:\u003C/span\u003E \u003Cspan style=\"color:#ffff66;\"\u003EMagic Burst\u003C/span\u003E\n\n\u003Cspan style=\"color:#00cc22;\"\u003EMagic Burst Effect:\u003C/span\u003E Increases spell damage by 45% while increasing MP cost\n\n\u003Cspan style=\"color:#00cc22;\"\u003EDuration:\u003C/span\u003E 30s\n\n\u003Cspan style=\"color:#00cc22;\"\u003ESpirit of the Ordained Effect:\u003C/span\u003E Raises \u003Cspan style=\"color:#ffff66;\"\u003EMagic Burst\u003C/span\u003E spell damage increase to 100% and nullifies additional MP cost\n\n\u003Cspan style=\"color:#00cc22;\"\u003ESpirit of the Watcher Effect:\u003C/span\u003E \u003Cspan style=\"color:#ff7b1a;\"\u003ELost Chainspell\u003C/span\u003E duration is extended to 90s\n\nCan only be executed while in combat."
// check project window for text to copy into actionData
// random ass variable
const colour = `\"color:#00cc22;\"`;
const colour2 = `\"color:#ffff66;\"`;
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
divToAlter = divToAlter.replace(`\n\n`, `{"\\n"}{"\\n"}`);
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

const divToPlace = "<div style={{whiteSpace: 'pre-line'}}>" + divToAlter + "</div>"

export default divToPlace;