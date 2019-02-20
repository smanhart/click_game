import React from "react";
import { Row, Col } from "react-materialize";



function Header(props) {
    return (
        <div>
            <Row>
                <Col xl={12} >
                    {/* <img src={props.image} /> */}
                    <div className="container">
                        <h1>Memory Click Game</h1>
                        <h4>Click on an image to earn points, but don't forget what you've clicked. If you click an image a second time, you lose your points and have to start again.</h4>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;