import React from "react";
import classes from "./Badge.module.css";
import Facebook from "../assets/Facebook.jpg";
import Instagram from "../assets/Instagram.jpg";
import Pinterest from "../assets/Pinterest.jpg";

const Badge = (props) => {
    return (
        <div className={classes.body}>
                <img src={props.name} alt = "Picture" className={classes.image}/>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.share}>
                        <a href="#facebook"><img src = {Facebook} alt = "Facebook" className = {classes.shareicon} ></img></a>
                        <a href="#instagram"><img src = {Instagram} alt = "Instagram" className = {classes.shareicon} ></img></a>
                        <a href="#pinterest"><img src = {Pinterest} alt = "Pinterest" className = {classes.shareicon} ></img></a>
                </div>
        </div>
    );
};

export default Badge;