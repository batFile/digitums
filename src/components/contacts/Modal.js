import React from "react";

function Modal (props) {
    return(
        <div>
            <div id="contactForm" className="modal contactForm">
                <h1>{props.num.modal_title}</h1>
                <button type="button" className="close">×</button>
                <form id="sumbitMail" action="#">
                    <input className="border-form" id="clientName" placeholder={props.num.modal_name} type="text" required=""/>
                    <input className="border-form" id="company" placeholder={props.num.modal_company} type="text" required=""/>
                    <input className="border-form" id="email" placeholder={props.num.modal_email} type="email" required=""/>
                    <textarea className="border-form" id="question" placeholder={props.num.modal_question}></textarea>
                    <input value={props.num.modal_submit} id='sendMail' className="formBtn button" type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Modal;