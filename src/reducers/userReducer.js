import * as Constants from"../actions/userDataReducerAction"

export default function userDataReducer(userData, action) {
    switch (action.type) {
        case Constants.SEED_UPDATE:
            return updateSeed(userData, action.id, action.text)

        default:
            return userData
    }
}

function updateSeed(userData, id, text) {
    const newSeedData = userData.seed.map(u => {
        if(u.id === id) {
            u.value = text
        }
        return u
    })

    return {
        ...userData,
        seed: newSeedData
    }
}

// const initialUserData = {
//     seed: [
//         {
//             id:1,
//             value: "sdsd"
//         },
//         {
//             id:2,
//             value: ""
//         },
//         {
//             id:3,
//             value: ""
//         },
//         {
//             id:4,
//             value: ""
//         },
//         {
//             id:5,
//             value: ""
//         },
//         {
//             id:6,
//             value: ""
//         },
//         {
//             id:7,
//             value: ""
//         },
//         {
//             id:8,
//             value: ""
//         },
//         {
//             id:9,
//             value: ""
//         },
//         {
//             id:10,
//             value: ""
//         },
//         {
//             id:11,
//             value: ""
//         },
//         {
//             id:12,
//             value: ""
//         },
//     ],
//     solanaWallets: {
//         deraivedPath: "",
//         wallets: []
//     },
//     etheriumWallet: {
//         deraivedPath: "",
//         wallets: []
//     }
// }