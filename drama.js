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

let drama = [
    ["$NEWNAME", "bans", "$NEWNAME", "from the", "$VAR 0 GROUP", "because", "$VAR 1 PRONOUNS", "added", "$FEATURE", ".", "$VAR 0", "is banned from", "$GENERIC_GROUP", ".", "$GENERIC_GROUP", "rages", "."],
    ["$NEWNAME", "forks", "$NEWNAME HIDDEN", "$VAR 1 PROJECT", "and adds", "$FEATURE", ".", "$VAR 1", "$SELFDAMAGE 1", "."],
    ["$NEWNAME", "stops watching too much", "$YOUTUBER", "and starts contributing to the community.", "$FUTURE_PROJECT", "is finally released."],
    ["$NEWNAME", "infiltrates the", "$NEWNAME HIDDEN", "$VAR 1 GROUP", ". The", "$VAR 1 GROUP", "does a hostile takeover of the", "$VAR 0 PROJECT", "curseforge page.", "$NEWNAME", "rages and", "$SELFDAMAGE 2", "."],
    ["$NEWNAME", "forks", "$NEWNAME HIDDEN", "$VAR 1 PROJECT", "and converts it to", "$MODLOADER", ".", "$VAR 1", "$SELFDAMAGE 1", "."],
    ["$NEWNAME", "infiltrates the", "$NEWNAME HIDDEN", "$VAR 1 GROUP", ".", "The", "$VAR 1 GROUP", "does a hostile takeover of the", "$VAR 0 PROJECT", "curseforge page.", "$NEWNAME", "rages and", "$SELFDAMAGE 2", "."],
    ["$NEWNAME", "drops", "$FEATURE", "support from", "$VAR 0 PROJECT", ".", "The", "$GENERIC_GROUP", "rages."],
    ["Microsoft buys", "$NEWNAME HIDDEN", "$VAR 0 PROJECT", ".", "$VAR 0 PROJECT", "devs convince Jeff Bezos to buy Microsoft and delete Minecraft.", "$NEWNAME", "rages and", "$VAR 1 PROJECT", "is finally released."],
    ["$NEWNAME", "got depression because", "$FUTURE_PROJECT", "did not come out.", "$VAR 0", "had to resort to watching", "$YOUTUBER", ".", "The community started to take a blow so", "$VAR 2", "had to start watching more", "$VAR 2", "to get the youtube algorithm going.", "This gained more money so", "$NEWNAME HIDDEN", "$VAR 3 PROJECT", "could take off again."],
    ["$NEWNAME", "tried to port Create to 1.12. The police arrested him and gave him a 25 year sentence in jail."],
    ["$NEWNAME", "took control of", "$VAR 0 PROJECT", "and kicked all the other devs out."]
]

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genDrama(){
    if(dramatext == null){
        dramatext = document.getElementById("dramatext")
    }

    let dramatics = drama[randomInt(0, drama.length - 1)]
    let variables = []
    let dramaString = ""

    for(let i = 0; i < dramatics.length; i++){
        let item = dramatics[i];

        if(item != "." && i != 0 && !item.endsWith("HIDDEN")){
            dramaString += " "
        }

        if(item.startsWith("$NEWNAME")){
            let chosenPerson = people[randomInt(0, people.length - 1)]
            variables.push(chosenPerson)

            if(!item.endsWith("HIDDEN")){
                dramaString += chosenPerson.name
            }
        }
        else if(item == "$FEATURE"){
            let chosenFeature = features[randomInt(0, features.length - 1)]
            variables.push(chosenFeature)

            dramaString += chosenFeature
        }
        else if(item == "$GENERIC_GROUP"){
            let chosenGroup = genericgroups[randomInt(0, genericgroups.length - 1)]
            variables.push(chosenGroup)

            dramaString += chosenGroup
        }
        else if(item == "$FUTURE_PROJECT"){
            let chosenProject = futureProjects[randomInt(0, futureProjects.length - 1)]
            variables.push(chosenProject)

            dramaString += chosenProject
        }
        else if(item == "$YOUTUBER"){
            let chosenYoutuber = youtubers[randomInt(0, youtubers.length - 1)]
            variables.push(chosenYoutuber)

            dramaString += chosenYoutuber
        }
        else if(item.startsWith("$SELFDAMAGE")){
            let chosenDamage = selfDamage[randomInt(0, selfDamage.length - 1)]
            variables.push(chosenDamage)

            let person = item.split(" ")[1]

            chosenDamage = chosenDamage.replace('%&', variables[person].pronouns[0])
            chosenDamage = chosenDamage.replace('%%', variables[person].pronouns[1])

            dramaString += chosenDamage
        }
        else if(item == "$MODLOADER"){
            let chosenModloader = modloaders[randomInt(0, modloaders.length - 1)]
            variables.push(chosenModloader)

            dramaString += chosenModloader
        }
        else if(item.startsWith("$VAR")){
            let parts = item.split(" ")
            let index = parts[1]
            if(parts.length == 3){
                let keyword = parts[2]
                if(keyword == "GROUP"){
                    let possibleGroups = variables[index].groups
                    dramaString += possibleGroups[randomInt(0, possibleGroups.length - 1)]
                }
                else if(keyword == "PRONOUNS"){
                    dramaString += variables[index].pronouns[2]
                }
                else if(keyword == "PROJECT"){
                    let possibleProjects = variables[index].projects
                    dramaString += possibleProjects[randomInt(0, possibleProjects.length - 1)]
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
            dramaString += item
        }
    }

    dramatext.innerHTML = dramaString
}
