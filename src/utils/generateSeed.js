import * as bp from 'bip39'


function checkSeedIsValid(seedObject) {
    let generateSeed = false
    for(let i=0; i<seedObject.length; ++i) {
        if (seedObject[i].value === "") {
            generateSeed = true
        } 
    }
    if (generateSeed) {
        const seedphrase = bp.generateMnemonic()
        let seedArray = seedphrase.split(" ")
        let newSeedObject = []
        for(let i=0;i<seedArray.length; ++i) {
            newSeedObject.push({
                id: i+1,
                value: seedArray[i]
            })
        }
        return newSeedObject
    } else {
        return seedObject
    }
}

export default checkSeedIsValid