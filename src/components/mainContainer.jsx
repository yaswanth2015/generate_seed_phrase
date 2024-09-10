import { useReducer } from "react"
import { UserContext, UserDispatchContext } from "../context/userContext"
import userDataReducer from "../reducers/userReducer"
import SeedPhrase from "./seedPhraseComponent"
import * as Constants from "../Constants/WalletNames.js"

function UserContainer() {
    const [userData, userDataDispatcher] = useReducer(userDataReducer, initialUserData)
    return <div className='seedContainer'>
        <UserDispatchContext.Provider value = {userDataDispatcher}>
            <UserContext.Provider value={userData}>
                <SeedPhrase />
            </UserContext.Provider>
        </UserDispatchContext.Provider>
      </div>
}

const initialUserData = {
    seed: [
        {
            id:1,
            value: ""
        },
        {
            id:2,
            value: ""
        },
        {
            id:3,
            value: ""
        },
        {
            id:4,
            value: ""
        },
        {
            id:5,
            value: ""
        },
        {
            id:6,
            value: ""
        },
        {
            id:7,
            value: ""
        },
        {
            id:8,
            value: ""
        },
        {
            id:9,
            value: ""
        },
        {
            id:10,
            value: ""
        },
        {
            id:11,
            value: ""
        },
        {
            id:12,
            value: ""
        },
    ],
    wallets: [
        {
            walletName: Constants.SOLANA_WALLET,
            accounts: [
                // {
                //     publicKey: "",
                //     privateKey: ""
                // }
            ]
        },
        {
            walletName: Constants.ETHERIUM_WALLET,
            accounts: [
                // {
                //     publicKey: "",
                //     privateKey: ""
                // }
            ]
        }
    ]
}

export default UserContainer