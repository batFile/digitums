import React, { Component } from "react";

import Logo from '../components/navigate/Logo.js';
import Navigation from './headerPart/Navigation.js';
import Hamburger from './headerPart/Hamburger.js';
import Functional from './headerPart/Functional.js';
import LangSetter from './headerPart/LangSetter.js';

// example
import Test3 from './Test3.js';

function scrollColor(t) {
    setTimeout(
        function() {
            if ((window.pageYOffset || document.documentElement.scrollTop) >= 500) {
                document.getElementById('header').style.background = 'rgb(20, 32, 30) none repeat scroll 0% 0%';
            } else {
                document.getElementById('header').style.background = '';
            }
        }, 1);
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            PATH: window.location.pathname
        };
    }

    // setPath = () => {
    //     this.setState({PATH: window.location.pathname})
    // }

    componentWillMount() {
        if (this.state.PATH === "/") {
            window.addEventListener('scroll', function (e) {   
                scrollColor(this);
            });
        } else {
            setTimeout(function() {document.getElementById('header').style.background = 'rgb(20, 32, 30) none repeat scroll 0% 0%'}, 1); 
        }
    }

    render() {
        return (
            <>
                {/* <div Style="position: fixed; display: block; width: 100%; height: 100px;background-color: red;z-index:9999;background: rgb(20, 32, 30) none repeat scroll 0% 0%;"></div> */}
                <section className="block-01" id='header'>
                    {/* part of digitum wich detect language and give some rules for visual part */}
                    <Functional/>
                    
                    {/* visual part */}
                    
                    <div className="container">
                        <header className="header">
                            <div><Logo/>{this.state.path}</div>
                            <nav className="nav-menu">
                                <Navigation/>
                                <LangSetter/>
                            </nav>
                            <Hamburger/>
                        </header>
                    </div>
                    {/* <Test3/> */}
                                
                </section>
            </>
        );
    }
}

export default Header;