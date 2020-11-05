import React from 'react';

function I5 (props) {
    return(
        <section className="dct-03">
            <div className="container">
                <div className="content-dct">
                    <div className="dct-title">
                        <h2 className="h2-dct">
                            {props.pathLang.s1}
                        </h2>
                        <p className="h2-subtitle">
                            {props.pathLang.s2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default I5;