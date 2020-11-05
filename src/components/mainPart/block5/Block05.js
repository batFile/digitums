import React from "react";

import Part from './PartBlock05.js';

function B5 (props) {
    return(
        <section class="block-05" id="products" Style="background-color: white;">
            <div class="container" >
                <div class="main5" >
                    <h2 class="h2-title-2">
                        {props.langPath.block05_title}    
                    </h2>
                    <Part img={"img/block05_1.png"} langPath={props.langPath.block05_part_1}/>
                    <Part img={"img/block05_2.png"} langPath={props.langPath.block05_part_2}/>
                    <Part img={"img/block05_3.png"} langPath={props.langPath.block05_part_3}/>
                    <Part img={"img/block05_4.png"} langPath={props.langPath.block05_part_4}/>
                    <Part img={"img/block05_5.png"} langPath={props.langPath.block05_part_5}/>
                    <Part img={"img/block05_6.png"} langPath={props.langPath.block05_part_6}/>
                </div>
            </div>
        </section>
    );
}

export default B5;