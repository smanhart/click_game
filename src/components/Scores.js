import React from "react";

function Scores(props) {
    return (
        <div className="targetScore">
            <h5>Score: {props.score} | Top Score: {props.topScore}</h5>
        </div>
    )
}

export default Scores;