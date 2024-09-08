import "../css/seedInputStyle.css"
import { useContext } from "react"
import {UserContext, UserDispatchContext} from "../context/userContext"
import * as Constants from"../actions/userDataReducerAction"


function SeedInput(props) {
    const userData = useContext(UserContext)
    const userDataDispatcher = useContext(UserDispatchContext)
    const seedVal = userData.seed.find(u => {
        return u.id == props.idValue
    })
    function onchangeOfValue(e) {
        userDataDispatcher({
            type: Constants.SEED_UPDATE,
            id: props.idValue,
            text: e.target.value
        })
    }
    return <div className="inputContainer">
        <input className="form-control form-control-lg" type="text" placeholder={props.idValue+"."} value = {seedVal.value} onChange = {onchangeOfValue}/>
    </div>
}

export default SeedInput