import React, { Component } from "react";
import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import IBlock01 from '../../components/pages_blocks/IndependentBlock01.js';
import IBlock02 from '../../components/pages_blocks/IndependentBlock05.js';
import IBlock03 from '../../components/pages_blocks/IndependentBlock06.js';

class DCTargeting extends Component {

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
                <IBlock01 count={3} img={"img/dct-topbaner-big.png"} pathLang={lang.lang[this.props.actualLang].I1.dct}/>
                <IBlock02 pathLang={lang.lang[this.props.actualLang].I5.dct}/>
                <IBlock03 link={"https://www.youtube.com/embed/H6E0GqRcon4"} img={"img/bg-people.png"} pathLang={lang.lang[this.props.actualLang].I6.multiscan}/>
                <IBlock03 link={"https://www.youtube.com/embed/FoxqB6BvMpE"} img={"img/bg-case2.png"} pathLang={lang.lang[this.props.actualLang].I6.microwebsites}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (DCTargeting);