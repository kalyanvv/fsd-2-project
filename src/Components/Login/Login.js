import React, { useContext, useReducer, useEffect ,useState} from "react";
import Card from "../UI/Card";
import Button from "react-bootstrap/Button";
// import classes from "./Signup.module.css";
import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return { value: "", isValid: false };
};
const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const authCtx = useContext(AuthContext);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    setTimeout(() => {
      // console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      // console.log("CLEANUP");
      // clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const user = await fetch("http://localhost:3001/users?email=" + emailState.value)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].id);
        if(data[0].password === passwordState.value){
        authCtx.onLogin(data[0].id);
        }
        else{
          alert("Wrong Password");
        }
      })
      .catch((err) => {
        alert("No email found");
      });
    // authCtx.onLogin(emailState.value, passwordState.value); 
    // console.log(emailState.value, passwordState.value);
    // console.log("yes");
    
  };
  return (
    <>
    <Card className={classes.input}>
      <div className={classes.header} >
        <h1 style={{ color: "beige" }}>
        <img
          alt=""
          src="https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        {"      "}
         HowToBasic</h1>
      </div>

      <div className={classes.content}>
        <h1 style={{ color: "beige" }}>Log in</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>User Email Id</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div class="text-center">
          <Button type="submit" className={classes.Button}>
            Submit
          </Button>
        </div>
      </form>
      <div>
        <p style={{ color: "beige" }}>
          Dont have an account: &nbsp;
          <a href="/Signup" className={classes.a}>Signup</a>
        </p>
      </div>
    </Card>
    </>
  );
};
export default Login;
