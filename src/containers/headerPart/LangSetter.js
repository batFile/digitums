import React, { Component } from "react";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setLang} from '../../actions/actions.js';

class LangSetter extends Component {

    checkActualLangEN = () => {
        this.props.setL(0);
    }

    checkActualLangRU() {
        this.props.setL(2);
    }

    checkActualLangUA() {
        this.props.setL(1);
    }

    render() {
        return (
            (this.props.browserLang)?<div className="lang">
                <div className={(this.props.actualLang === 0) ? "button_lang current_lang":"button_lang"} onClick={() => this.checkActualLangEN()}>EN</div>
                <div className={(this.props.actualLang === 2) ? "button_lang current_lang":"button_lang"} onClick={() => this.checkActualLangRU()}>RU</div>
                <div className={(this.props.actualLang === 1) ? "button_lang current_lang":"button_lang"} onClick={() => this.checkActualLangUA()}>UA</div>
            </div>:<></>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setL: setLang}, dispatch);
}

const mapStateToProps = state => {
    return {
        browserLang: state.browserLang,
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, matchDispatchToProps) (LangSetter);