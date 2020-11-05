import React, { Component } from "react";
import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import IBlock01 from '../../components/pages_blocks/IndependentBlock01.js';
import IBlock02 from '../../components/pages_blocks/IndependentBlock05.js';
import IBlock03 from '../../components/pages_blocks/IndependentBlock06.js';

class DISolutions extends Component {

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
                <IBlock01 count={4} img={"img/dm-topbaner-big.png"} pathLang={lang.lang[this.props.actualLang].I1.dm}/>
                <IBlock02 pathLang={lang.lang[this.props.actualLang].I5.dm}/>
                <IBlock03 link={"https://www.youtube.com/embed/i3bQyi2Ljk8"} img={"img/bg-easysales.png"} pathLang={lang.lang[this.props.actualLang].I6.gamification}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (DISolutions);