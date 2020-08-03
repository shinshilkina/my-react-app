import React from "react";
import './Navigation.module.css';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export {Navigation};
