import React from "react";

import { Link } from 'react-router-dom';

function AccardionPart (props) {
    return(
        <li className="at-accordion__panel" Style={"background-image: url(" + props.img + ");"}>
            <div className="panel-inner">
                <div className="title">
                    <h2 className="accordeon-h2">
                        {props.langPath.h2}
                    </h2>
                    <p className="accordeon-subtitle-1">
                        {props.langPath.p_1}
                    </p>
                    <p className="accordeon-subtitle-2">
                        {props.langPath.p_2}
                    </p>
                    <Link to={props.link}>
                        <div className="btn-details" >
                            {props.langPath2.block03_3}
                        </div>
                    </Link>
                </div>
            </div>
        </li>
    );
}

export default AccardionPart;