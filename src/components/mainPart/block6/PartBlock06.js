import React from "react";

function B6Part (props) {
    return(
        <div class="item-block6 ">
            <div class="icon-img">
                <img src={props.img} alt="" />
            </div>
            <div class="b6-text">
                <div class="h3-block-06">
                    {props.langPath.h2}
                </div>
                <p class="bottom-text-1">
                    {props.langPath.p_1}
                </p>
            </div>
        </div>
    );
}

export default B6Part;