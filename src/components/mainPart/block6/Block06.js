import React from "react";

import Part from './PartBlock06.js';

function B6 (props) {
    return(
        <section class="block-06" id="solutions">
            <div class="container">
                <div class="block-06-title">
                    <h2 class="h2-title-2">
                        {props.langPath.block06_title}
                    </h2>
                </div>
                <div class="block6-content">
                    <Part img={"img/block-06-icon-01.png"} langPath={props.langPath.block06_part_1}/>
                    <Part img={"img/block-06-icon-02.png"} langPath={props.langPath.block06_part_2}/>
                    <Part img={"img/block-06-icon-03.png"} langPath={props.langPath.block06_part_3}/>
                </div>
            </div>
        </section>
    );
}

export default B6;