import React, { Component } from "react";
import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import IBlock01 from '../../components/pages_blocks/IndependentBlock01.js';
import IBlock02 from '../../components/pages_blocks/IndependentBlock02.js';
import IBlock03 from '../../components/pages_blocks/IndependentBlock04.js';

class CEStrategies extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <section class="main">
                {/* fixed bag */}
                <div Style="position: fixed; display: block; width: 100%; height: 100px;top:0px;z-index:99;background: rgb(20, 32, 30) none repeat scroll 0% 0%;"></div>
                {/* fixed bag */}
                <IBlock01 count={2} img={"img/ces-topbaner-big.png"} pathLang={lang.lang[this.props.actualLang].I1.ces}/>
                <IBlock02 count={2} img={"img/ces-second-baner.png"} pathLang={lang.lang[this.props.actualLang].I_2.ces}/>
                <IBlock03 count={2} pathLang={lang.lang[this.props.actualLang].I4.ces}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (CEStrategies);