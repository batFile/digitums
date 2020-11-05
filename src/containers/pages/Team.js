import React, { Component } from "react";
import lang from '../../data/lang.json';
import {connect} from 'react-redux';

class Team extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <>
                <section>
                    <div style={{height:"100px"}}></div>
                    <div class="team">
                        <div class="team__title">
                            {lang.lang[this.props.actualLang].t.p1}
                        </div>
                    </div> 
                </section>
                <section class="main-team">
                    <div class="container">
                        <div class="team__content">
                            <div class="team__item">
                                <div class="team__team-item_border-1">
                                </div>
                                <div class="team__content_fingers">
                                    <img src="img/finger1.svg" class="finger-1_member-1 finger-hovered"/>
                                    <img src="img/finger2.svg" class="finger-2_member-1 finger-hovered"/>
                                    <img src="img/finger3.svg" class="finger-3_member-1 finger-hovered"/>
                                </div>
                                <div class="team__content_text">
                                    <div class="team__content_name">
                                        {lang.lang[this.props.actualLang].t.i.s1}
                                    </div>
                                    <div class="team__content_subtitle">
                                        {lang.lang[this.props.actualLang].t.i.s2}
                                    </div>
                                    <div class="team__content_bodycopy">
                                        {lang.lang[this.props.actualLang].t.i.s3}
                                    </div> 
                                </div>
                            </div>
                            <div class="team__item">
                                <div class="team__team-item_border-2">
                                </div>
                                <div class="team__content_fingers">
                                    <img src="img/finger2.svg" class="finger-1_member-2 finger-hovered"/>
                                    <img src="img/finger3.svg" class="finger-2_member-2 finger-hovered"/>
                                    <img src="img/finger4.svg" class="finger-3_member-2 finger-hovered"/>
                                </div>
                                <div class="team__content_text">
                                    <div class="team__content_name">
                                        {lang.lang[this.props.actualLang].t.o.s1}
                                    </div>
                                    <div class="team__content_subtitle">
                                        {lang.lang[this.props.actualLang].t.o.s2}
                                    </div>
                                    <div class="team__content_bodycopy">
                                        {lang.lang[this.props.actualLang].t.o.s3}
                                    </div> 
                                </div>
                            </div>
                            <div class="team__item">
                                <div class="team__team-item_border-3">
                                </div>
                                <div class="team__content_fingers">
                                    <img src="img/finger2.svg" class="finger-1_member-3 finger-hovered"/>
                                    <img src="img/finger3.svg" class="finger-2_member-3 finger-hovered"/>
                                    <img src="img/finger4.svg" class="finger-3_member-3 finger-hovered"/>
                                </div>
                                <div class="team__content_text">
                                    <div class="team__content_name">
                                        {lang.lang[this.props.actualLang].t.v.s1}
                                    </div>
                                    <div class="team__content_subtitle">
                                        {lang.lang[this.props.actualLang].t.v.s2}
                                    </div>
                                    <div class="team__content_bodycopy">
                                        {lang.lang[this.props.actualLang].t.v.s3}
                                    </div> 
                                </div>
                            </div>
                            <div class="team__item">
                                <div class="team__team-item_border-4">
                                </div>
                                <div class="team__content_fingers">
                                    <img src="img/finger2.svg" class="finger-1_member-4 finger-hovered"/>
                                    <img src="img/finger3.svg" class="finger-2_member-4 finger-hovered"/>
                                    <img src="img/finger1.svg" class="finger-3_member-4 finger-hovered"/>
                                </div>
                                <div class="team__content_text">
                                    <div class="team__content_name">
                                        {lang.lang[this.props.actualLang].t.s.s1}
                                    </div>
                                    <div class="team__content_subtitle">
                                        {lang.lang[this.props.actualLang].t.s.s2}
                                    </div>
                                    <div class="team__content_bodycopy">
                                        {lang.lang[this.props.actualLang].t.s.s3}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualLang: state.actualLang
    }
}

export default connect(mapStateToProps, null) (Team);