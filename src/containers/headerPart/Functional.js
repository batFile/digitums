// functional part wich start the rules of game
import React, { Component } from "react";

import detectBrowserLanguage from 'detect-browser-language'; // ru-RU, en-US, uk-UA
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setBLang} from '../../actions/actions.js';
import {setLang} from '../../actions/actions.js';

class Functional extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    getLang() {
        return (detectBrowserLanguage() === 'en-US') ? false : true;
    }

    getActualLang()  {
        return (detectBrowserLanguage() === 'en-US') ? 0 : (detectBrowserLanguage() === 'uk-UA') ? 1 : 2;
    }


    checkLang() {
        if (this.props.browserLang === null) {
            // console.log("ama first");
            this.props.set(this.getLang());
        }
    }

    checkActualLang() {
        if (this.props.browserLang === null) {
            // console.log("ama second");
            this.props.setL(this.getActualLang());
        }
    }

    render() {
        return (
            <>
                {/* func wich detect browser lang 
                    if it en, hide lang settings block
                */}
                <>{this.checkLang()}</>
                {/* {"reduuuux browser lang : " + this.props.browserLang} ¿test? */}

                {/* <br/> */}
                {/* func wich detect browser lang 
                    if it ru or ua, show content in similar lang
                */}
                <>{this.checkActualLang()}</>
                {/* {"reduuuux actual lang : " + this.props.actualLang} ¿test? */}
            </>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({set: setBLang, setL: setLang}, dispatch);
}

// mapStateToProps not necessery here (just for test)
const mapStateToProps = state => {
    return {
        browserLang: state.browserLang,
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, matchDispatchToProps) (Functional);