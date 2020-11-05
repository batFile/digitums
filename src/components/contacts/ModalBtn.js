import React from "react";

function MB (props) {
    return(
        <div className="cont-img" id="cont-img">
            <div className="btn-header-main" >
                <img src="img/mail.png" className="cont" />
                {props.langPath.contact_us}
            </div>
        </div>
    );
}

export default MB;