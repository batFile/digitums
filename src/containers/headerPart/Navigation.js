import React, { Component } from "react";

import lang from '../../data/lang.json';

import {connect} from 'react-redux';
import DropDown from '../headerPart/DropDown.js';
import L from '../../components/navigate/Link.js';
import A from '../../components/navigate/Anchor.js';
import MB from '../../components/contacts/ModalBtn.js';

class Navigation extends Component {
    
    render(){
        return(
            <ul className="menu-list">  
                <li className="menu-item-link"><DropDown/></li>
                <li className="menu-item-link"><A path={"/#products"} langPath={lang.lang[this.props.actualLang].products}/></li>
                <li className="menu-item-link"><A path={"/#solutions"} langPath={lang.lang[this.props.actualLang].solutions}/></li>
                <li className="menu-item-link"><L path={"/Team"} langPath={lang.lang[this.props.actualLang].team}/></li>
                <li className="menu-item-link"><MB langPath={lang.lang[this.props.actualLang]}/></li>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (Navigation);