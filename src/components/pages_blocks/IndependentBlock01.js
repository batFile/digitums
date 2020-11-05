import React, { useRef, useLayoutEffect, useState } from "react";

// У - УПРОСТИЛ
function I1 (props) {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    let movement_timer = null;
    const RESET_TIMEOUT = 100;
    
    const dimensionsDI = () => {
        if (targetRef.current) {
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
          });
        }
    }

    useLayoutEffect(() => {
        dimensionsDI();
    }, []);

    window.addEventListener('resize', ()=>{
        clearInterval(movement_timer);
        movement_timer = setTimeout(dimensionsDI, RESET_TIMEOUT);
    });

    return(
        <section className="xray-02" ref={targetRef} style={(dimensions.width > 992)?{backgroundImage: "url(" + props.img + ")"}:{}}>
            <div className="container-03">
                <div className="content-xray">
                    <div className="topbaner">
                        <img src={props.img} alt="" className="topbaner-small" />
                    </div>
                    <div className="text-box">
                        {(props.count >= 0 && props.count <= 2) ? 
                        <div className="toptitle">
                            <h1 className="h1 show-text">
                                {props.pathLang.h1}
                            </h1>
                            <p className="subtitle-1 show-text">
                                {props.pathLang.s1}
                            </p>
                            <p className="subtitle-2 show-text">
                                {props.pathLang.s2}
                            </p>
                        </div> : 
                        (props.count === 3) ? 
                            <div className="toptitle">
                                <h1 className="h1 show-text">
                                    {props.pathLang.h1}
                                </h1>
                                <p className="subtitle-1 show-text">
                                    {props.pathLang.s1}
                                </p>
                                <p className="subtitle-2 show-text" Style="padding-top: 1rem;">
                                    <p Style="padding-bottom: 1rem;">{props.pathLang.s2.p1}</p>
                                    <p>{props.pathLang.s2.p2}</p>
                                    <p>{props.pathLang.s2.p3}</p>
                                    <p>{props.pathLang.s2.p4}</p>
                                </p>
                            </div> : (props.count === 4) ? 
                                <div className="toptitle">
                                    <h1 className="h1 show-text">
                                        {props.pathLang.h1}
                                    </h1>
                                    <p className="subtitle-1 show-text">
                                        {props.pathLang.s1.s1_1}
                                    </p>
                                    <p className="subtitle-2 show-text">
                                        <p>{props.pathLang.s2.p1}</p>
                                        <p>{props.pathLang.s2.p2}</p>
                                        <p>{props.pathLang.s2.p3}</p>
                                        <p>{props.pathLang.s2.p4}</p>
                                    </p>
                                    <br />
                                    <p className="subtitle-1 show-text">
                                        {props.pathLang.s1.s1_2}
                                    </p>
                                    <p className="subtitle-2 show-text">
                                        <p>{props.pathLang.s2.p5}</p>
                                        <p>{props.pathLang.s2.p6}</p>
                                        <p>{props.pathLang.s2.p7}</p>
                                        <p>{props.pathLang.s2.p8}</p>
                                    </p>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default I1;