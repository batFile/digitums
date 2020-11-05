import React from "react";

function I3 (props) {
    return(
        <section className="xray-04">
            <div className="container">
                <div className="content-xray-3">
                    <div className="shield-img">
                        <img src="img/shield.png" alt="" />
                    </div>
                    <div className="text-box">
                        <div className="toptitle">
                            <p className="subtitle-3">
                                {props.pathLang}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default I3;