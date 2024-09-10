import "../css/wallet.css"
import Account from "./Account"
import { generateAccount } from "../utils/generateAccount"
import { useContext } from "react"
import { UserContext, UserDispatchContext } from "../context/userContext"
import * as Constants from "../actions/userDataReducerAction"

function Wallet(props) {
    const userData = useContext(UserContext)
    const userDataDispatcher = useContext(UserDispatchContext)
    let walletName = props.data.walletName

    function generateAccountForWallet(e) {
        console.log(e)
        e.preventDefault()
        let wallet = generateAccount(walletName, userData.seed, props.data.accounts.length)
        userDataDispatcher({
            type: Constants.ADD_WALLET,
            walletName: walletName,
            wallet: wallet
        })
    }

    return <>
    <div className = "walletHeader"> 
        <h3>{walletName}</h3>
        <div><button type="button" className="btn btn-primary btn-lg" onClick={generateAccountForWallet}>Generate Account</button></div>
    </div>
        {
            props.data.accounts.map((accountdata) => {
                return <>
                    <Account accountdata = {accountdata}/>
                    <br />
                </>
            })
        }
    </>
}


export default Wallet