import classes from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar_mini} src={props.imageAddr}/>
            {props.message}
            <div className={classes.like} > like </div>
        </div>
    );
}

export {Post};
