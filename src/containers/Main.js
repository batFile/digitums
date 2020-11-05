import React, { Component } from "react";

import lang from '../data/lang.json';

import {connect} from 'react-redux';
import Block2 from '../components/mainPart/block2/Block02.js';
import Block3 from '../components/mainPart/block3/Block03.js';
import Block4 from '../components/mainPart/block4/Block04.js';
import Block5 from '../components/mainPart/block5/Block05.js';
import Block6 from '../components/mainPart/block6/Block06.js';

class Main extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (<>
            <div className="fullscreen-bg m-video js-video">
                <canvas id="nCanvasRender"></canvas>
            </div>
            <Block2 langPath={lang.lang[this.props.actualLang]}/>
            <Block3 langPath={lang.lang[this.props.actualLang]} actualLang={(this.props.actualLang === 0) + ""}/>
            <Block4 langPath={lang.lang[this.props.actualLang]}/>
            <Block5 langPath={lang.lang[this.props.actualLang]}/>
            <Block6 langPath={lang.lang[this.props.actualLang]}/>
        </>);
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (Main);