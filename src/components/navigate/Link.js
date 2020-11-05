import React from "react";
import { Link } from 'react-router-dom';

function L (props) {
    return(<Link className="link" to={props.path}>{props.langPath}</Link>);
}

export default L;