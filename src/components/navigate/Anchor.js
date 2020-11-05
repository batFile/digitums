import React from "react";
// import { HashLink as Link } from 'react-router-hash-link';

function A (props) {
    return(        
        <a className="link" Style="cursor:pointer;" onClick={(e) => {e.preventDefault();setTimeout(function() { window.location = props.path; }, 1);}}>{props.langPath}</a>
    // <Link  className="link" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={props.path}>{props.langPath}</Link>
    );
}

export default A;