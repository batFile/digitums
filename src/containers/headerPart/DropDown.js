import React, { Component } from "react";

import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import L from '../../components/navigate/Link.js';
import A from '../../components/navigate/Anchor.js';

class DropDown extends Component {
    render() {
        return (
            <>
                <A path={"/#expertise"} langPath={lang.lang[this.props.actualLang].expertise}/>
                <ul>
                    <li className="menu-item-link"><L path={"/customer-base-x-rey"} langPath={lang.lang[this.props.actualLang].x_ray}/></li>
                    <li className="menu-item-link"><L path={"/data-modeling-factory"} langPath={lang.lang[this.props.actualLang].dmf}/></li>
                    <li className="menu-item-link"><L path={"/customer-engagement-strategies"} langPath={lang.lang[this.props.actualLang].ces}/></li>
                    <li className="menu-item-link"><L path={"/digital-channel-targeting"} langPath={lang.lang[this.props.actualLang].dct}/></li>
                    <li className="menu-item-link"><L path={"/digitum-it-solutions"} langPath={lang.lang[this.props.actualLang].dm}/></li>
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (DropDown);