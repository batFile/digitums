import React from "react";

import AP from './AccordionPart.js'

function Accardion (props) {
    return(
        <div className="flex-accordion">
            <div style={{height : (props.smaller + '' === 'true') ? '440px' : '560px', padding: "0 2rem"}} >
                <ul>
                    <AP img={"img/accordeon-1.png"} langPath={props.langPath.accardion_1} langPath2={props.langPath} link="/customer-base-x-rey"/>
                    <AP img={"img/accordeon-2.png"} langPath={props.langPath.accardion_2} langPath2={props.langPath} link="/data-modeling-factory"/>
                    <AP img={"img/accordeon-3.png"} langPath={props.langPath.accardion_3} langPath2={props.langPath} link="/customer-engagement-strategies"/>
                    <AP img={"img/accordeon-4.png"} langPath={props.langPath.accardion_4} langPath2={props.langPath} link="/digital-channel-targeting"/>
                    <AP img={"img/accordeon-5.png"} langPath={props.langPath.accardion_5} langPath2={props.langPath} link="/digitum-it-solutions"/>
                </ul>
            </div>
        </div>
    );
}

export default Accardion;