import React from "react";

function I2 (props) {
    return(
        <section className="xray-03" Style={"background-image: url(" + props.img + ");"}>
            <div className="container">
                <div className="content-xray-2">
                    <div className="text-box-2">
                        {(props.count === 0)? 
                        <div className="xray-text">
                            <div className="xray-title-1">
                                <img src="img/xray-icon1.png" alt="" />
                                <h3 className="h3">
                                    {props.pathLang.h1}
                                </h3>
                            </div>
                            <p className="subtitle-2">
                                {props.pathLang.p2}
                            </p>
                            <br />
                            <p className="subtitle-2">
                                {props.pathLang.p3}
                            </p>
                        </div>:
                        <div className="xray-text">
                            <p className="subtitle-1">
                                {props.pathLang.p1}
                            </p>
                            <p className="subtitle-2">
                                {props.pathLang.p2}
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default I2;