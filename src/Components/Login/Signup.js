import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Signup.module.css";
import {useNavigate} from "react-router-dom";
import { v4 as uuid } from "uuid";


const Signup = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [error,setError] = useState();
  
  const navigate = useNavigate();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length === 0 ||
        enteredConfirmPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name, email and password (non-empty values).",
        buttontxt: "Okay",
      });
      return;
    }
    if (
      
        enteredPassword.trim().length <8
        
    ) {
      setError({
        title: "Invalid Password",
        message: "Password length must be greater than 8",
        buttontxt: "Okay",
      });
      return;
    }
    if (enteredPassword !== enteredConfirmPassword) {
     setError({
       title: "Password Mismatch",
       message: "Please enter the same password in both fields",
       buttontxt: "Okay",
     });
     return;
    } 
    // const id = uuid();
      const userData = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        myCourses: [],
      };
      // console.log(userData);
      fetch("http://localhost:3001/users",{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {'Content-Type': "application/json"},
      })
      setEnteredUsername("");
      setEnteredEmail("");
      setEnteredPassword("");
      setEnteredConfirmPassword("");
      navigate("/");
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          buttontxt={error.buttontxt}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <div className={classes.header}>
          <h1 style={{ color: "beige" }}>
            <img
              alt=""
              src="https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            {"      "}
            HowToBasic
          </h1>
        </div>
        <div class="text-center">
          <h1 style={{ color: "beige" }}>Sign Up</h1>
        </div>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          <label>Re-enter Password</label>
          <input
            type="password"
            id="repassword"
            value={enteredConfirmPassword}
            onChange={confirmPasswordChangeHandler}
          />
          <br></br>
          <div class="text-center">
            <Button className={classes.Button} type="submit">
              Submit
            </Button>
          </div>
        </form>
        <div>
          <p style={{ color: "beige" }}>
            Already have an account: &nbsp;
            <a href="/" className={classes.a}>Login</a>
          </p>
        </div>
      </Card>
    </>
  );
};
export default Signup;
