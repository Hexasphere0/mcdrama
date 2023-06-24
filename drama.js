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
]

let people = [
    {
        "name": 'Tech22',
        "groups": ["Gregtech CEU discord", "Gregtech Intergalactical discord", "Technological Journey discord", "GTNH discord"]
    },
    {
        "name": "GregoriousT",
        "groups": ["Gregtech Intergalactial Discord", "IC2 Forums"]
    },
    {
        "name": "IGBLON",
        "groups": ["IGBLONcord", "Gregtech CEU discord"]
    },
    {
        "name": "Threefold",
        "groups": ["Threefold Discord", "Gregtech CEU discord", "Technological Journey discord", "Nomifactory discord"]
    },
    {
        "name": "Technici4n",
        "groups": ["Gregtech CEU discord", "MI discord"]
    },
    {
        "name": "Exa",
        "groups": ["Nomifactory discord", "Gregtech CEU discord"]
    }
]

let drama = [
    ["$NEWNAME", "bans", "$NEWNAME", "from the", "$VAR 0 GROUP", "because he added", "$FEATURE", ".", "$VAR 0", "is banned from", "$GENERIC_GROUP", ".", "$GENERIC_GROUP", "rages"]
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

        if(item != "." && i != 0){
            dramaString += " "
        }

        if(item == "$NEWNAME"){
            let chosenPerson = people[randomInt(0, people.length - 1)]
            variables.push(chosenPerson)

            dramaString += chosenPerson.name
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
        else if(item.startsWith("$VAR")){
            let parts = item.split(" ")
            let index = parts[1]
            if(parts.length == 3){
                let keyword = parts[2]
                if(keyword == "GROUP"){
                    let possibleGroups = variables[index].groups
                    dramaString += possibleGroups[randomInt(0, possibleGroups.length - 1)]
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

    dramaString += "."

    dramatext.innerHTML = dramaString
}