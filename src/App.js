import "./App.css";

import React,{ useContext } from "react";
import {Route, Routes} from "react-router-dom";

import AddCourse from "./Components/Courses/AddCourse";
import AuthContext from "./store/auth-context";
import Error404 from "./Components/UI/Error404";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Message from "./Components/RequestCourses/Message";
import Profile from "./Components/Profile";
import RequestForm from "./Components/RequestCourses/RequestForm";
import RequestedCourses from "./Components/RequestCourses/RequestedCourses";
import Signup from "./Components/Login/Signup";
import SingleCourse from "./Components/Courses/SingleCourse";
import Feedback from "./Components/Feedback/Feedback";
import GetFeedback from "./Components/Feedback/GetFeedback";
import Feedbackconfirmation from "./Components/UI/Feedbackconfirmation";

// import Aboutus from "./Components/Aboutus";


function App() {
  const ctx = useContext(AuthContext);
  const course = {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sNGlXGfEerbW8D09xP6155A0fo4QD7MKZg&usqp=CAU",
    title: "Rubik's Cube",
    creator: "Ross",
    // video:"https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg",
    description: "Learn a beginner friendly method to solve a cube, and advanced techniques to get faster. Taught by a UK semi-finalist",
    contentList: [
      "Step 1: Learn to make a White Cross",
      "Step 2: Learn to arrange the colors on the middle lane of side of the cubes",
      "Step 3: Learn to arrange the top layers of the side of the cube",
      "Step 4: Learn to arrang the second layer of the side of the cube",
      "Step 5: Learn to arrange the third layer of the sides of the cube",
      "Step 6: Learn to arrange the base of the cube",
    ],
  }
  // console.log(ctx.isLoggedInAd);
  return (
    <>
      <main>
        {ctx.isLoggedIn && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/RequestForm" element={<RequestForm />} />
              {ctx.isLoggedInAd && (
                <>
                  <Route path="/AddCourse" element={<AddCourse />} />
                  <Route
                    path="/RequestedCourses"
                    element={<RequestedCourses />}
                  />
                </>
              )}
              <Route path="/Message" element={<Message />} />
              <Route path="/Profile" element={<Profile />} />
              <Route
                path="/Course/:id"
                element={<SingleCourse course={course} />}
              />
              <Route path="/GetFeedback" element={<GetFeedback />} />
              {ctx.isLoggedInAd && (
                <>
                  <Route
                    path="/Feedback"
                    element={<Feedback />}
                  />
                </>
              )}
              <Route path = "/Feedbackconfirmation" element={<Feedbackconfirmation/>}/>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </>
        )}
        {!ctx.isLoggedIn && (
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            {/* <Routes><Route path='/' element={<Signup />}></Route> */}
            <Route path="/Signup" element={<Signup />}></Route>
          </Routes>
        )}
        {console.log(ctx.isLoggedIn)}
      </main>

      {/* {console.log(ctx.isLoggedIn)} */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <Home></Home> */}
    </>
  );
}

export default App;
