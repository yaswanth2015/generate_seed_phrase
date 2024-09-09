import "../css/wallet.css"
import Account from "./Account"


function Wallet(props) {
    return <>
    <div className = "walletHeader"> 
        <h3>{props.data.walletName}</h3>
        <div><button type="button" className="btn btn-primary btn-lg">Generate Account</button></div>
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