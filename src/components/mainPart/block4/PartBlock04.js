import React from "react";


function B4Part (props) {
    return(
        <div class={(props.count === 1) ? "left-block-02" : "right-block-02"}>
            <div class="top-content">
                <div class="title-img">
                    <img src={props.img} alt="" />
                </div>
                <div class="content-text">
                    <h3>
                        {(props.count === 1) ? props.langPath.block04_1 : props.langPath.block04_5}
                        <br/>
                        {(props.count === 1) ? props.langPath.block04_2 : props.langPath.block04_6}
                    </h3>
                    <p>
                        {(props.count === 1) ? props.langPath.block04_3 : props.langPath.block04_7}
                    </p>
                    <br />
                    <p>
                        {(props.count === 1) ? props.langPath.block04_4 : props.langPath.block04_8}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default B4Part;