import React from 'react';

function I6 (props) {
    return(
        <section class="dct-05" Style={"background-image: url(" + props.img + ");"}>
            <div class="container">
                <div class="content-dct-2">
                    <div class="video-content">
                        <div class="video">
                            <iframe class="iframe-sizing" src={props.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>
                                {props.pathLang.h1}
                                <br/>
                                {props.pathLang.h2}
                            </h3>
                            <div class="dct-subtext">
                                <p>
                                    {props.pathLang.s1}
                                </p>
                                <br/>
                                <p>
                                    {props.pathLang.s2}
                                </p>
                                <br/>
                                <p>
                                    {props.pathLang.s3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default I6;