import * as Constants from "../Constants/WalletNames.js"

function createSeedFromSeedObject(seedArray) {
    let seed = seedArray[0]
    for(let i=1; i<seedArray.length; ++i){
        seed += " "
        seed += seedArray[i]
    }
    return seed
}


function createAccountForSolana(seedArray, accountNumber) {
    let seed = createSeedFromSeedObject(seedArray)
    const derivePath = ``
    //MARK: Add Logic for generating Account For Solana
    return {
        publicKey: `solana public ${accountNumber}`,
        privateKey: `solana private ${accountNumber}`
    }
}

function createAccountForEtherium(seedArray, accountNumber) {
    let seed = createSeedFromSeedObject(seedArray)
    const derivePath = ``
    //MARK: Add Logic for generating Account For Etherium 
    return {
        publicKey: `etherium public ${accountNumber}`,
        privateKey: `etherium private ${accountNumber}`
    }
}

export function generateAccount(walletName, seedArray, accountNumber) {

    switch (walletName) {
        case Constants.SOLANA_WALLET:
            return createAccountForSolana(seedArray, accountNumber)

        case Constants.ETHERIUM_WALLET:
            return createAccountForEtherium(seedArray, accountNumber)

        default:
            return {
                publicKey: "",
                privateKey: ""
            }
    }
}

