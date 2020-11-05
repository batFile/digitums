import React from "react";

import Part from './PartBlock04.js';

function B4 (props) {
    return(
        <section class="block-04" id="block4">
                    <div class="container">
                        <div class="main-block-02">
                            
                            <Part img={"img/block-04-icon-01.png"} count={1} langPath={props.langPath}/>
                            <Part img={"img/block-04-icon-02.png"} count={2} langPath={props.langPath}/>

                        </div>
                    </div>
                </section>
    );
}

export default B4;