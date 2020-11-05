import React from "react";

import { Link } from 'react-router-dom';

function AccardionPart (props) {
    return(
        <div class="item-box">
            <div class="img-mobile-accordeon">
                <div class="accordeoin-img-mobile">
                    <img src={props.img} alt="" />
                </div>
            </div>
            <div class="title">
                <h2 class="accordeon-h2">
                    {props.langPath.h2}
                </h2>
                <p class="accordeon-subtitle-1">
                    {props.langPath.p_1}
                </p>
                <p class="accordeon-subtitle-2">
                    {props.langPath.p_2}
                </p>
                <Link to={props.link}>
                    <div class="btn-details" >
                        {props.langPath2.block03_3}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AccardionPart;