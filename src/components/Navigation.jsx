import React from "react";
import './Navigation.module.css';
import classes from './Navigation.module.css';

let active = classes.item + ' ' + classes.active;

const Navigation = () => {
    return (
        <nav className='navigation'>
            <a href='#'> <div className={active}>Profile</div></a>
            <a href='#'> <div className={classes.item}>Messages</div></a>
            <a href='#'><div className={classes.item}>News</div></a>
            <a href='#'><div className={classes.item}>Music</div></a>
            <a href='#'><div className={classes.item}>Settings</div></a>
        </nav>
    );
}

export {Navigation};
