import React from "react";
import {Post} from "./Post/Post";
import classes from './Posts.module.css';

const Posts = (props) => {
  return (
      <div className={classes.posts}>
          My posts
          <div className={classes.new}>
              <textarea placeholder='text of post'></textarea>
              <button>Add</button>
          </div>
          <Post imageAddr = {props.imageAddr} message='Hi, how are you?' />
          <Post imageAddr = {props.imageAddr} message="It's my first post"/>
      </div>
  );
};

export {Posts};
