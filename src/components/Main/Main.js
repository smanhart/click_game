import React from "react";
import {Col, CardPanel} from "react-materialize";
import "./style.css";

function ClickCard(props) {
return(

    // <div className="container main">
    <Col s={6} m={4} l={3}>
        <CardPanel className="clickCard hvr-grow-shadow" onClick={() => props.renderScore(props.id)}>
            <img src={props.image} alt="cartoon cat"/>
        </CardPanel>
    </Col>
    // </div>

)
}

export default ClickCard;