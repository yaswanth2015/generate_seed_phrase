function TextFieldHider(props) {
    return <>
     <input type="email" className="form-control" disabled = {true} value={props.value}></input>
     <br/>
    </>
    
}

export default TextFieldHider