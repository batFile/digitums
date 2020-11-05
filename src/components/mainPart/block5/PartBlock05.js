import React from "react";

function B5Part (props) {
    return(
        <div class="block-05-main">
            <img src={props.img} alt="" />
            <div class="content-main-item">
            <h3 class="product-h3 title-pl">{props.langPath.h3}</h3>
                <p>{props.langPath.p_1}</p>
                <br/>
                <p>{props.langPath.p_2}</p>
                {/* if part have no empty third block of content (in lang.json) show it */}
                {(props.langPath.p_3.length > 0) ? <><br/><p>{props.langPath.p_3}</p></> : <></>}
            </div>
        </div>
    );
}

export default B5Part;