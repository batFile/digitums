import React, { Component } from "react";
import { Link } from 'react-router-dom';

import lang from '../../data/lang.json';
import {connect} from 'react-redux';

import L from '../../components/navigate/Link.js';
import A from '../../components/navigate/Anchor.js';

class Hamburger extends Component {
    
    constructor() {
        super();
        this.state = {
            active: "",
            open: ""
        };
    }
    
    render() {
        return (
            <div className="hamburger">
                <div 
                onClick={() => 
                    { 
                    
                        if(this.state.active.length < 1) {
                            this.setState({ active: "active", open: "open" }); 
                        } else {
                            this.setState({ active: "", open: "" });
                        }
                    
                    } 
                } className={"button_container " + this.state.active} id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
                <div className={"overlay " + this.state.open} id="overlay">
                    <nav className="nav menu overlay-menu " >
                        <ul className="menu-list">
                            <li className="menu-item-link " >
                                <A path={"/#expertise"} langPath={lang.lang[this.props.actualLang].expertise}/>
                            </li>
                            <li className="menu-item-link">
                                <Link className="link-small" to="/customer-base-x-rey">{lang.lang[this.props.actualLang].x_ray}</Link>
                            </li>
                            <li className="menu-item-link">
                                <Link className="link-small" to="/data-modeling-factory">{lang.lang[this.props.actualLang].dmf}</Link>
                            </li>
                            <li className="menu-item-link">
                                <Link className="link-small" to="/customer-engagement-strategies">{lang.lang[this.props.actualLang].ces}</Link>
                            </li>
                            <li className="menu-item-link">
                                <Link className="link-small" to="/digital-channel-targeting">{lang.lang[this.props.actualLang].dct}</Link>
                            </li>
                            <li className="menu-item-link">
                                <Link className="link-small" to="/digitum-it-solutions">{lang.lang[this.props.actualLang].dm}</Link>
                            </li>
                            <li className="menu-item-link">
                                <A path={"/#products"} langPath={lang.lang[this.props.actualLang].products}/>
                            </li>
                            <li className="menu-item-link">
                                <A path={"/#solutions"} langPath={lang.lang[this.props.actualLang].solutions}/>
                            </li>
                            <li className="menu-item-link">
                                <L path={"/Team"} langPath={lang.lang[this.props.actualLang].team}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (Hamburger);