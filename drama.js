//debug function
function DEBUG_printPeopleInformation() {
    let names = [];
    let groups = [];
    let pronouns = [];
    let projects = [];
  
    for (let i = 0; i < people.length; i++) {
      let person = people[i];
  
      names.push(person.name);
      groups.push(...person.groups);
      pronouns.push(...person.pronouns);
      projects.push(...person.projects);
    }
  
    let uniqueNames = Array.from(new Set(names));
    let uniqueGroups = Array.from(new Set(groups));
    let uniquePronouns = Array.from(new Set(pronouns));
    let uniqueProjects = Array.from(new Set(projects));
  
    console.log("Names:", uniqueNames.join(", "));
    console.log("Groups:", uniqueGroups.join(", "));
    console.log("Pronouns:", uniquePronouns.join(", "));
    console.log("Projects:", uniqueProjects.join(", "));
  }



let dramatext;

let genericgroups = [
    "feedthememes",
    "MMD",
    "r/feedthebeast"
]

let features = [
    "Ultra High Voltage",
    "Shaders",
    "Mushroom Tofu",
    "Spice of life",
    "Optifine Support",
    "Solar panels",
    "Dayblooms",
    "the Stargate"
]

// %& = him her their
// %% = his her their

let selfDamage = [
    "blows %&self up on the IGBLON SMP",
    "deletes %% discord account",
    "deletes %% youtube account",
]

let futureProjects = [
    "Divine Journey 3", 
    "Gregtech CEU 1.19",
    "Gregtech 7",
    "Chromaticraft 1.20",
    "Create 1.12",
    "Luxite",
    "Technological Journey 2"
]

let youtubers = [
    "IGBLON",
    "Threefold"
]

/*
modlauncher    - https://github.com/cpw/modlauncher
MinecraftForge - https://github.com/MinecraftForge/MinecraftForge
Fabric Loader  - https://github.com/FabricMC/fabric-loader
LiteLoader     - http://www.liteloader.com/
DarkMod        - https://bitbucket.org/DarkStorm_/darkmod
*/

let modloaders = [
    "modlauncher",
    "MinecraftForge",
    "Fabric Loader",
    "LiteLoader",
    "DarkMod",
    "Rift",
    "modloader"
]

let people = [
    {
        "name": 'Tech22',
        "groups": ["Gregtech CEU discord", "Gregtech Intergalactical discord", "Technological Journey discord", "GTNH discord"],
        "projects": ["GTCEU"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "GregoriousT",
        "groups": ["Gregtech Intergalactial Discord", "IC2 Forums"],
        "projects": ["GT6"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "IGBLON",
        "groups": ["IGBLONcord", "Gregtech CEU discord", "PGS"],
        "projects": ["Supersymmetry"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Threefold",
        "groups": ["Threefold discord", "Gregtech CEU discord", "Technological Journey discord", "Nomifactory discord", "DJ2 discord", "Create discord"],
        "projects": ["Trifecta"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Technici4n",
        "groups": ["Gregtech CEU discord", "MI discord"],
        "projects": ["Modern Industrialization"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Exa",
        "groups": ["Nomifactory discord", "Gregtech CEU discord"],
        "projects": ["Nomifactory", "GTCE"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Jellysquid",
        "groups": ["CaffieneMC discord"],
        "projects": ["Sodium", "Hytale"],
        "pronouns": ["her", "her", "she"]
    },
    {
        "name": "Vazkii",
        "groups": ["CaffieneMC"],
        "projects": ["Quark", "Botania", "Patchouli", "Psi"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Atricos",
        "groups": ["Threefold discord", "DJ2 discord"],
        "projects": ["DJ2", "DJ3"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Simibubi",
        "groups": ["Create discord"],
        "projects": ["Create", "Create Above & Beyond"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Mcjty",
        "groups": ["Mcjty discord"],
        "projects": ["RFTools"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "DreamMasterXXL",
        "groups": ["GTNH discord"],
        "projects": ["GTNH", "GT5U"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Jeb",
        "groups": ["Minecraft discord"],
        "projects": ["Minecraft"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "Colen",
        "groups": ["GTNH discord"],
        "projects": ["GTNH", "GT5U"],
        "pronouns": ["him", "his", "he"]
    },
    {
        "name": "PrototypeTrousers",
        "groups": ["Gregtech CEU discord"],
        "projects": ["AE2: Trousers Edition", "Gregtech CEU"],
        "pronouns": ["him", "his", "he"]
    }
]


// Image mappings
//*Anything that's a null image is an image i didn't know what to use for
//TODO: convert all images to be the same size and to .png format
//TODO: all people
//!this is pain...
// "": "",
let imageMappings = {
    //generic_groups
    "feedthememes":    "generic_groups/feedthememes.png",
    "MMD":             "generic_groups/mmd.webp",
    "r/feedthebeast":  "generic_groups/feedthebeast.png",
    //features
    "Ultra High Voltage": "features/ultra_high_voltage.jpg",
    "Shaders":            "features/shaders.png",
    "Mushroom Tofu":      "features/mushroom_tofu.webp",
    "Spice of life":      "features/spice_of_life.png",
    "Optifine Support":   "features/optifine_support.png",
    "Solar panels":       "features/solar_panels.png",
    "Dayblooms":          "features/dayblooms.png",
    "the Stargate":       "features/stargate.png",
    //selfDamage
    "blows %&self up on the IGBLON SMP":  "selfDamage/tnt.webp",
    "deletes %% discord account":         "selfDamage/discord.png",
    "deletes %% youtube account":         "selfDamage/youtube.png",
    //futureProjects
    "Divine Journey 3":          "futureProjects/dj3.png",
    "Gregtech CEU 1.19":         "futureProjects/gregtech_CEU_1_19.png",
    "Gregtech 7":                "futureProjects/gregtech_7.svg",
    "Chromaticraft 1.20":        "futureProjects/chromaticraft_1_20.png",
    "Create 1.12":               "futureProjects/create_1_12.png",
    "Luxite":                    "futureProjects/luxite.webp",
    "Technological Journey 2":   "futureProjects/technological_journey_2.png",
    //youtubers
    "IGBLON":      "youtubers/igblon.jpg",
    "Threefold":   "youtubers/threefold.jpg",
    //modloaders
    "modlauncher":      "modloaders/modlauncher.jfif",
    "MinecraftForge":   "modloaders/minecraft_forge.jfif",
    "Fabric Loader":    "modloaders/fabric_loader.png",
    "LiteLoader":       "modloaders/lite_loader.png",
    "DarkMod":          "modloaders/darkmod.png",
    "Rift":             "modloaders/rift.png",
    "modloader":        "modloaders/modloader.webp",
    //people
    "Tech22":            "people/tech22.png",
    "GregoriousT":       "people/gregorious_t.png",
    "IGBLON":            "people/igblon.jpg",
    "Threefold":         "people/threefold.jpg",
    "Technici4n":        "people/technici4n.webp",
    "Exa":               "people/exa.webp",
    "Jellysquid":        "people/jellysquid.webp",
    "Vazkii":            "people/vazkii.webp",
    "Atricos":           "people/atricos.webp",
    "Simibubi":          "people/simibubi.webp",
    "Mcjty":             "people/mcjty.webp",
    "DreamMasterXXL":    "people/dreammasterxxl.webp",
    "Jeb":               "people/jeb.webp",
    "Colen":             "people/colen.webp",
    "PrototypeTrousers": "people/prototypetrousers.webp",
    //groups
    "Gregtech CEU discord":               "groups/gregtech_ceu_discord.webp",
    "Gregtech Intergalactical discord":   "groups/gregtech_intergalactical_discord.webp",
    "Technological Journey discord":      "groups/technological_journey_discord.webp",
    "GTNH discord":                       "groups/gtnh_discord.webp",
    //dupe? with different caps?
    "Gregtech Intergalactial Discord":    "groups/gregtech_intergalactical_discord.webp",
    "IC2 Forums":                         "groups/ic2_forums.png",
    "IGBLONcord":                         "groups/igblon.jpg",
    "PGS":                                "groups/pgs.png",
    "Threefold discord":                  "groups/threefold.jpg",
    "Nomifactory discord":                "groups/nomifactory.png",
    "DJ2 discord":                        "groups/dj2.png",
    "Create discord":                     "groups/create_discord.png",
    "MI discord":                         "groups/mi_discord.webp",
    "CaffieneMC discord":                 "groups/caffiene_mc_discord.png",
    "CaffieneMC":                         "groups/caffiene_mc.png",
    "Mcjty discord":                      "groups/mcjty_discord.webp",
    "Minecraft discord":                  "groups/minecraft_discord.png",
    "MMD":                                "groups/mmd.png",
    //projects
    "GTCEU":                      "projects/GTCEU.png",
    "GT6":                        "projects/GT6.png",
    "Supersymmetry":              "projects/Supersymmetry.png",
    "Trifecta":                   "projects/Trifecta.webp",
    "Modern Industrialization":   "projects/Modern_Industrialization.png",
    "Nomifactory":                "projects/Nomifactory.png",
    "GTCE":                       "projects/GTCE.png",
    "Sodium":                     "projects/Sodium.png",
    "Hytale":                     "projects/Hytale.png",
    "Quark":                      "projects/Quark.png",
    "Botania":                    "projects/Botania.png",
    "Patchouli":                  "projects/Patchouli.png",
    "Psi":                        "projects/Psi.png",
    "DJ2":                        "projects/dj2.png",
    "DJ3":                        "projects/dj3.png",
    "Create":                     "projects/Create.png",
    "Create Above & Beyond":      "projects/Create Above & Beyond.png",
    "RFTools":                    "projects/RFTools.png",
    "GTNH":                       "projects/GTNH.png",
    "GT5U":                       "projects/GT5U.jpeg",
    "Minecraft":                  "projects/Minecraft.png",
    "AE2: Trousers Edition":      "projects/AE2 Trousers Edition.png",
    "Gregtech CEU":               "projects/GTCEU.png",
    // misc
    "Microsoft":          "misc/Microsoft.png",
    "Jeff Bezos":         "misc/JeffBezos.jpg",
    "Minecraft":          "misc/Minecraft.jpg"
};

// Function to retrieve the image based on the phrase and display it
function getImageByPhrase(phrase) {
    let imageName = imageMappings[phrase];
    if (imageName) {
      // Create an image element
      let imageElement = document.createElement("img");
      imageElement.src = "images/" + imageName;
  
    // Set the width and height of the image in pixels
    //wonderful way of doing this
    imageElement.style.width = 128 + "px";
    imageElement.style.height = 128 + "px";

      // Append the image element to a container (e.g., a div with id "imageContainer")
      let imageContainer = document.getElementById("imageContainer");
      imageContainer.appendChild(imageElement);
    } else {
      console.log("No image found for the given phrase:", phrase);
    }
  }

let drama = [
    ["$NEWNAME", "bans", "$NEWNAME", "from the", "$VAR 0 GROUP", "because", "$VAR 1 PRONOUNS", "added", "$FEATURE", ".", "$VAR 0", "is banned from", "$GENERIC_GROUP", ".", "$GENERIC_GROUP", "rages", "."],
    ["$NEWNAME", "forks", "$NEWNAME HIDDEN", "$VAR 1 PROJECT", "and adds", "$FEATURE", ".", "$VAR 1", "$SELFDAMAGE 1", "."],
    ["$NEWNAME", "stops watching too much", "$YOUTUBER", "and starts contributing to the community.", "$FUTURE_PROJECT", "is finally released."],
    ["$NEWNAME", "infiltrates the", "$NEWNAME HIDDEN", "$VAR 1 GROUP", ". The", "$VAR 1 GROUP", "does a hostile takeover of the", "$VAR 0 PROJECT", "curseforge page.", "$NEWNAME", "rages and", "$SELFDAMAGE 2", "."],
    ["$NEWNAME", "forks", "$NEWNAME HIDDEN", "$VAR 1 PROJECT", "and converts it to", "$MODLOADER", ".", "$VAR 1", "$SELFDAMAGE 1", "."],
    ["$NEWNAME", "infiltrates the", "$NEWNAME HIDDEN", "$VAR 1 GROUP", ".", "The", "$VAR 1 GROUP", "does a hostile takeover of the", "$VAR 0 PROJECT", "curseforge page.", "$NEWNAME", "rages and", "$SELFDAMAGE 2", "."],
    ["$NEWNAME", "drops", "$FEATURE", "support from", "$VAR 0 PROJECT", ".", "The", "$GENERIC_GROUP", "rages."],
    ["Microsoft", "buys", "$NEWNAME HIDDEN", "$VAR 0 PROJECT", ".", "$VAR 0 PROJECT", "devs convince", "Jeff Bezos", "to buy", "Microsoft", "and delete", "Minecraft.", "$NEWNAME", "rages and", "$VAR 1 PROJECT", "is finally released."],
    ["$NEWNAME", "got depression because", "$FUTURE_PROJECT", "did not come out.", "$VAR 0", "had to resort to watching", "$YOUTUBER", ".", "The community started to take a blow so", "$VAR 2", "had to start watching more", "$VAR 2", "to get the youtube algorithm going.", "This gained more money so", "$NEWNAME HIDDEN", "$VAR 3 PROJECT", "could take off again."],
    ["$NEWNAME", "tried to port Create to 1.12. The police arrested him and gave him a 25 year sentence in jail."],
    ["$NEWNAME", "took control of", "$VAR 0 PROJECT", "and kicked all the other devs out."],
    ["$NEWNAME", "said his launcher is better than", "$NEWNAME", "'s."]
]

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genDrama()
{
    //DEBUG_printPeopleInformation();
    if(dramatext == null){
        dramatext = document.getElementById("dramatext")
    }
    let imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";

    let dramatics = drama[randomInt(0, drama.length - 1)];
    let variables = [];
    let dramaString = "";
    let imageSequence = [];

    for(let i = 0; i < dramatics.length; i++){
        let item = dramatics[i];

        if(item != "." && i != 0 && !item.endsWith("HIDDEN")){
            dramaString += " "
        }

        if(item.startsWith("$NEWNAME"))
        {
            let chosenPerson = people[randomInt(0, people.length - 1)]
            variables.push(chosenPerson)

            if(!item.endsWith("HIDDEN"))
            {
                dramaString += chosenPerson.name
            }
            imageSequence.push(chosenPerson.name);
        }
        else if(item == "$FEATURE")
        {
            let chosenFeature = features[randomInt(0, features.length - 1)]
            variables.push(chosenFeature)

            dramaString += chosenFeature
            imageSequence.push(chosenFeature);
        }
        else if(item == "$GENERIC_GROUP")
        {
            let chosenGroup = genericgroups[randomInt(0, genericgroups.length - 1)]
            variables.push(chosenGroup)

            dramaString += chosenGroup
            imageSequence.push(chosenGroup);
        }
        else if(item == "$FUTURE_PROJECT")
        {
            let chosenProject = futureProjects[randomInt(0, futureProjects.length - 1)]
            variables.push(chosenProject)

            dramaString += chosenProject
            imageSequence.push(chosenProject);
        }
        else if(item == "$YOUTUBER")
        {
            let chosenYoutuber = youtubers[randomInt(0, youtubers.length - 1)]
            variables.push(chosenYoutuber)

            dramaString += chosenYoutuber
            imageSequence.push(chosenYoutuber);
        }
        else if(item.startsWith("$SELFDAMAGE"))
        {
            let chosenDamage = selfDamage[randomInt(0, selfDamage.length - 1)]
            variables.push(chosenDamage)
            let damage_phrase = chosenDamage;

            let person = item.split(" ")[1];

            chosenDamage = chosenDamage.replace('%&', variables[person].pronouns[0])
            chosenDamage = chosenDamage.replace('%%', variables[person].pronouns[1])

            dramaString += chosenDamage
            imageSequence.push(damage_phrase); // Add the image name to the sequence
        }
        else if(item == "$MODLOADER")
        {
            let chosenModloader = modloaders[randomInt(0, modloaders.length - 1)]
            variables.push(chosenModloader)

            dramaString += chosenModloader
            imageSequence.push(chosenModloader);
        }
        else if(item.startsWith("$VAR"))
        {
            let parts = item.split(" ")
            let index = parts[1]
            if(parts.length == 3){
                let keyword = parts[2]
                if(keyword == "GROUP"){
                    let possibleGroups = variables[index].groups
                    let temp = possibleGroups[randomInt(0, possibleGroups.length - 1)];
                    dramaString += temp;
                    imageSequence.push(temp);
                }
                else if(keyword == "PRONOUNS"){
                    dramaString += variables[index].pronouns[2]
                }
                else if(keyword == "PROJECT"){
                    let possibleProjects = variables[index].projects
                    let temp = possibleProjects[randomInt(0, possibleProjects.length - 1)]
                    dramaString += temp;
                    imageSequence.push(temp);
                }
            }
            else{
                if(typeof variables[index] == "object"){
                    dramaString += variables[index].name
                }
                else{
                    dramaString += variables[index]
                }
            }
        }
        else{
            if(item == "Microsoft" || item == "Jeff Bezos"){
                imageSequence.push(item)
            }
            dramaString += item
        }
    }

    dramatext.innerHTML = dramaString

    console.log("Image sequence:", imageSequence);

    // Process the image sequence
    for (let i = 0; i < imageSequence.length; i++) {
      let variableObject = imageSequence[i];
      let phrase = variableObject;
      getImageByPhrase(phrase);
    }
}
