import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';

import lang from '../data/lang.json';
import {connect} from 'react-redux';

import Modal from '../components/contacts/Modal.js';
import MB from '../components/contacts/ModalBtn.js';

class Footer extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <section className="footer" id="footer">
                <footer className="footer-content">
                    <div className="container">
                        <div className="footer-main">
                            <div className="slide-footer">
                                <Link smooth to="/#mainn" className="slide">
                                    <img className="logo-footer" src="img/logo-footer.png"/>
                                </Link>
                            </div>

                            <MB langPath={lang.lang[this.props.actualLang]}/>
                            
                        </div>
                        <Modal num={lang.lang[this.props.actualLang]}/>
                    </div>
                </footer>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (Footer);