import React from "react";

import AMP from './AccordionMobilePart.js';

function MobileAccardion (props) {
    return(
        <div class="mobile-accordeon">
            <div class="item-accordeon">
                <AMP img={"img/mobile-accordeon-1.png"} langPath={props.langPath.accardion_1} langPath2={props.langPath} link="/customer-base-x-rey"/>
                <AMP img={"img/mobile-accordeon-2.png"} langPath={props.langPath.accardion_2} langPath2={props.langPath} link="/data-modeling-factory"/>
                <AMP img={"img/mobile-accordeon-3.png"} langPath={props.langPath.accardion_3} langPath2={props.langPath} link="/customer-engagement-strategies"/>
                <AMP img={"img/mobile-accordeon-4.png"} langPath={props.langPath.accardion_4} langPath2={props.langPath} link="/digital-channel-targeting"/>
                <AMP img={"img/mobile-accordeon-5.png"} langPath={props.langPath.accardion_5} langPath2={props.langPath} link="/digitum-it-solutions"/>
            </div>
        </div>
    );
}

export default MobileAccardion;