import React from "react";

function B (props) {
    return(
        <div className="dmf-box">
            <div>
                <img src={props.img} />
            </div>
            <p className="dmf-icon-text">
                {props.pathLang.one}
                <br/>
                {props.pathLang.two}
            </p>
        </div>
    );
}

export default B;