import React from "react";
import {Row, Col, CardPanel} from "react-materialize";
import "./style.css";

function ClickCard(props) {
return(

    // <div className="container main">
    <Col s={6} m={4} l={3}>
        <CardPanel className="clickCard hvr-grow-shadow" onClick={() => props.randomizeCards()}>
            <img src={props.image} />
        </CardPanel>
    </Col>
    // </div>

)
}

export default ClickCard;