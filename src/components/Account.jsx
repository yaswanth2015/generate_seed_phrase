import TextFieldHider from "./TextFieldHider"
import "../css/account.css"

function Account(props) {
    const privatekey = props.accountdata.privatekey
    const publicKey = props.accountdata.publicKey

    return <>
        <div className="account">
            <h6>Private key</h6>
            <TextFieldHider value= {privatekey} />
            <h6>Public key</h6>
            <TextFieldHider value= {publicKey} />
        </div>
    </>
}

export default Account