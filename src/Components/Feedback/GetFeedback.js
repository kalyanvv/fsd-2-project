import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "../RequestCourses/RequestForm.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card"
import Feedbackconfirmation from "../UI/Feedbackconfirmation";
const initialFormState = {
  name: "",
  course: "",
  review: "",
};

const GetFeedback = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value
    }));
    console.log(e.target.name);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
        formState.name.trim().length === 0,
        formState.course.trim().length === 0,
      formState.review.trim().length === 0 
    ) {
      setError({
        title: "Blank Feedback",
        message: "Please Enter your Feedback.",
        buttontxt: "Okay",
      });
      return;
    }
    const userData = {
      name: formState.name,
      course: formState.course,
      review: formState.review,
    };
    console.log(userData)
    setFormState(initialFormState);
    fetch("http://localhost:3001/feedbacks", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
    .catch((err) => {
        console.log(err);
      });
    navigate("/Feedbackconfirmation", { state: userData });
  };

  return (
    <>
      <div style={{marginBottom:"3%",marginRight:"2%"}}>
        {error && (
          <ErrorModal
            message={error.message}
            onConfirm={errorHandler}
            buttontxt={error.buttontxt}
          ></ErrorModal>
        )}
        <Card >
        <h4 style={{fontWeight:"bold",marginTop:"1%",marginBottom:"1%",textAlign:"center",paddingTop:"3%"}}>Give your feedback</h4>
          <form onSubmit={handleFormSubmit}>
            <div>
            <label style={{fontWeight:"bold",marginLeft:"7%"}}>Name : </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={handleFormChange}
              style = {{borderRadius:'2%',margin:"0.5%",marginLeft:"2.7%",width:"21%"}}
            />
            {/* <label style={{fontWeight:"bold",marginLeft:"20%"}}>Course :</label>
            <input
              type="text"
              id="course"
              value={formState.course}
              onChange={handleFormChange}
              style = {{borderRadius:'2%',margin:"0.5%",marginLeft:"2%" ,width:"21.5%"}}
            /> */}
            <br></br>
            <label style={{fontWeight:"bold",marginLeft:"7%"}}>Feedback : </label>
            <input
              type="text"
              id="review"
              value={formState.review}
              onChange={handleFormChange}
              style = {{margin:"0.5%",marginLeft:"0.5%",width:"70%",paddingBottom:"5%"}}
            />
            </div>
            <div class="text-center">
              <Button variant="info" type="submit" className={classes.Button} style = {{marginBottom:"1.5%"}}>
                Submit
              </Button>
            </div>
          </form>
      </Card>
      </div>
    </>
  );
};

export default GetFeedback;
