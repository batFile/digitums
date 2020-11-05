import React, { Component } from "react";

import lang from '../data/lang.json';
import {connect} from 'react-redux';

class TestTh extends Component {
    render() {
        return (
            <h2>{lang.lang[this.props.actualLang].expertise}</h2>
        )
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (TestTh);