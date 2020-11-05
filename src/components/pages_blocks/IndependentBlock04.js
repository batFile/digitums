import React from "react";

import Box from './BoxBlock04.js';

function I4 (props) {
    return(
        <section className="dmf-04">
            <div className="container">
                {(props.count === 1) ?
                <div className="content-dmf-3">
                    <div className="dmf-title">
                        <h2 className="h2">
                            {props.pathLang.h1}
                        </h2>
                    </div>
                    <div className="dmf-content-box">
                        <Box img={'img/dmf-icon-01.png'} pathLang={props.pathLang.s1}/>
                        <Box img={'img/dmf-icon-02.png'} pathLang={props.pathLang.s2}/>
                        <Box img={'img/dmf-icon-03.png'} pathLang={props.pathLang.s3}/>
                        <Box img={'img/dmf-icon-04.png'} pathLang={props.pathLang.s4}/>
                    </div>
                </div>:
                <div className="content-ces-2">
                    <div className="ces-text-small">
                        <p>
                            {props.pathLang.p1}
                        </p>
                        <br/>
                        <p>
                            {props.pathLang.p2}
                        </p>
                    </div>
                    <div className="ces-title">
                        <h2 class="h2">
                            {props.pathLang.h1}
                        </h2>
                    </div>
                    <div class="dmf-content-box">
                        <Box img={'img/ces-icon-01.png'} pathLang={props.pathLang.s1}/>
                        <Box img={'img/ces-icon-02.png'} pathLang={props.pathLang.s2}/>
                        <Box img={'img/ces-icon-03.png'} pathLang={props.pathLang.s3}/>
                        <Box img={'img/ces-icon-04.png'} pathLang={props.pathLang.s4}/>

                        <Box img={'img/ces-icon-05.png'} pathLang={props.pathLang.s5}/>
                        <Box img={'img/ces-icon-06.png'} pathLang={props.pathLang.s6}/>
                        <Box img={'img/ces-icon-07.png'} pathLang={props.pathLang.s7}/>
                        <Box img={'img/ces-icon-08.png'} pathLang={props.pathLang.s8}/>
                    </div>
                </div>
                }
            </div>
        </section>
    );
}

export default I4;