import { Col, Container, Row } from "react-bootstrap"
import SeedInput from "./SeedInput"
import  "../css/seedInputStyle.css"
import { useContext } from "react"
import { UserContext } from "../context/userContext"





function SeedPhrase() {
    const userData = useContext(UserContext)
    return <>
        <Container>
            <Row>
                <Col > <SeedInput idValue = {1}/> </Col>
                <Col> <SeedInput idValue = {2} /> </Col>
                <Col> <SeedInput idValue = {3}/> </Col>
            </Row>
            <Row>
                <Col> <SeedInput idValue = {4}/> </Col>
                <Col> <SeedInput idValue = {5} /> </Col>
                <Col> <SeedInput idValue = {6}/> </Col>
            </Row>
            <Row>
                <Col> <SeedInput idValue = {7}/> </Col>
                <Col> <SeedInput idValue = {8} /> </Col>
                <Col> <SeedInput idValue = {9}/> </Col>
            </Row>
            <Row>
                <Col> <SeedInput idValue = {10}/> </Col>
                <Col> <SeedInput idValue = {11} /> </Col>
                <Col> <SeedInput idValue = {12}/> </Col>
            </Row>
        </Container>
        <br />
        <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" type="button" onClick={()=>{
                console.log(userData)
            }}>Generate Wallet</button>
        </div>
    </>
}



export default SeedPhrase