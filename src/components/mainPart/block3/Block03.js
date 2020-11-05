import React from "react";

import Accardion from './Accardion.js';
import MobileAccordion from './MobileAccordion.js';

function B3 (props) {
    return(
        <section class="block-03" id="expertise">
            <div class="container">
                <div class="accordeon-main">
                    <div class="block-3-title">
                        <h2 class="h2-title-2">
                            {props.langPath.block03_1}
                        </h2>
                        <div class="subtitle-block-3">
                            {props.langPath.block03_2}
                        </div>
                    </div>
                </div>
                <Accardion langPath={props.langPath} smaller={props.actualLang}/>
                <MobileAccordion langPath={props.langPath}/>
            </div>
        </section>
    );
}

export default B3;