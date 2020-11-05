import React, { Component } from "react";

import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import IBlock01 from '../../components/pages_blocks/IndependentBlock01.js';
import IBlock02 from '../../components/pages_blocks/IndependentBlock02.js';
import IBlock03 from '../../components/pages_blocks/IndependentBlock03.js';

class CBX_rey extends Component {

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
                <IBlock01 count={0} img={"img/xray-topbaner-big.png"} pathLang={lang.lang[this.props.actualLang].I1.x_rey}/>
                <IBlock02 count={0} img={"img/xray-second-baner.png"} pathLang={lang.lang[this.props.actualLang].I_2.x_rey}/>
                <IBlock03 pathLang={lang.lang[this.props.actualLang].I3}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (CBX_rey);