import React from "react";

function Logo () {
    return(<div Style="cursor: pointer;" onClick={(e) => {e.preventDefault();window.location.pathname='/';}}><img className="logo" src="img/logo.png"/></div>);
}

export default Logo;