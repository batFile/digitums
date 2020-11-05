import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function B2 (props) {
    return(
        <section className="block-02" id="mainn">
            <div className="container-02">
                <div className="main-text" >
                    <p>{props.langPath.block02_1}</p>
                    <div style={{height: "15px"}}></div>
                    {props.langPath.block02_2}
                    <br />
                    {props.langPath.block02_3}
                    <br />
                    {props.langPath.block02_4}
                    <div className="button-box">
                        <Link className="button" to={"/#block4"}>
                            {props.langPath.block02_5}
                        </Link>
                    </div>
                </div>
                <Link smooth className="arrow-scroll" to={"/#expertise"}>
                    <div className="downArrow bounce">
                        <img alt="arrow" src="img/arrow.png"/>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default B2;