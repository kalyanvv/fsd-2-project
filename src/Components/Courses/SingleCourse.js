import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState,useContext,useEffect } from 'react';
import Feedback from "../Feedback/Feedback.js";
import GetFeedback from "../Feedback/GetFeedback";
import { useParams } from "react-router-dom";

// import { Player } from 'video-react';

const SingleCourse = (props) => {
    const {id}= useParams();
    // console.log(id);
    const [courseToShow,setCourseToShow] = useState([]); 
    useEffect(() => {
      const fetchitems = () => {
        console.log(id);
        fetch("http://localhost:3001/courses/" + id)
          .then((response) => response.json())
          .then((data) => {
            setCourseToShow(data);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, []);
    // console.log("course to show", courseToShow);
  // console.log(id);
    // const {image , title , creator,description, contentList} = props.course;
    const [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    // console.log(courseToShow);
    return (
      <>
        <Navb />

        <div className={classes.main}>
          <div className={classes.course}>
            <div className={classes.description}>
              <p className={classes.title}>{courseToShow.title}</p>
              <p className={classes.desc}>{courseToShow.description}</p>
              <p className={classes.creator}>
                Content Creator : {courseToShow.creator}
              </p>
            </div>
            <div className={classes.course__image}>
              <img src={courseToShow.imageURL} alt="course" height="200" />
            </div>
          </div>
          <div className={classes.course__content}>
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
            <button onClick={handleShow} className={classes.button}>
              Show Content
            </button>

            {show && (
              <ul>
                {courseToShow.contentList.map((content) => {
                  return <li className={classes.steps}>{content}</li>;
                })}
              </ul>
            )}
            
          </div>
          <div className = {classes.reviews}>
            <Feedback course = {courseToShow.id}/>
            <GetFeedback />
          </div>
        </div>
        <Footer />
      </>
    );

}
export default SingleCourse;