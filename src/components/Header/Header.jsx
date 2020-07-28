import React from "react";
import './Header.module.css';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={`header ${classes.header}`}>
            <img className={classes.logo} src='https://images.clipartlogo.com/files/istock/previews/1072/107297409-vector-cute-yellow-chick-easy-logo.jpg' />
        </header>
    );
}

export {Header};
