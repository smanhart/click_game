import React from "react";
import {Row, Col} from "react-materialize";
import "./style.css"
import Scores from "../Scores"

function Nav(props) {
return(
 
 
<div className="nav">
<nav>
<Row>
    <Col s={4}>
        <h5 className="text">Memory Game</h5>
    </Col>
    <Col s={4}>
        <span className="text">{props.guess}</span>
    </Col>
    <Col s={4}>
        <span className="text"><Scores score={props.score} topScore={props.topScore}/></span>
    </Col>
</Row>
</nav>
</div>
    );
}

export default Nav;