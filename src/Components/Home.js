import { useContext, useState ,useEffect} from "react";

import Card from "./UI/Card";
import CourseCards from "./Courses/CourseCards";
import Footer from "./UI/Footer";
import Navb from "./UI/Navb";
import SimpleCarousel from "./UI/SimpleCarousel";
import classes from "./RequestCourses/RequestForm.module.css";
import { useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Home = (props) => {
  // console.log(port.courses);
  const ctx = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState(undefined);
  const [haveMyCourses, setHaveMyCourses] = useState(false);
  const [update ,setUpdate]= useState(false);
  let courseDataVar =  {};
  const registerCourseHandler =  async (id) => {
     await fetch("http://localhost:3001/courses?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        courseDataVar = data[0] 
      })
      .catch((err) => {
        console.log(err);
      });
  const uid = localStorage.getItem("userId");
  // if (courseDataVar !== undefined) {
    await fetch("http://localhost:3001/users/" + uid)
      .then((response) => response.json())
      .then((data) => {
        const usercourses = data.mycourses;
        usercourses.push({...courseDataVar,
          progress: 0,});
        fetch("http://localhost:3001/users/" + uid, {
          method: "PATCH",
          body: JSON.stringify({ mycourses: usercourses }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      });
  // }
    if(update){
      setUpdate(false);
    }
    else
    setUpdate(true);
  };
  useEffect(() => {
    const fetchitems = () => {
      fetch("http://localhost:3001/courses")
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, [update]);
  useEffect(() => {
    const fetchitems = () => {
      const uid = localStorage.getItem('userId');
      // console.log(uid);
      fetch("http://localhost:3001/users?id="+uid)
        .then((response) => response.json())
        .then((data) => {
          setMyCourses(data[0].mycourses);
          if (data[0].mycourses.length > 0) {
            setHaveMyCourses(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, [update]);

  const restCourses = courses.filter((course) =>{
    if(myCourses){
      return !myCourses.some((myCourse) => myCourse.id === course.id);
    }
    else{
      return true;
    }

  })
  
  const deleteCourseHandler = (id) => {
    fetch("http://localhost:3001/users?q="+id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let temp = data;
        if(temp.length>0) {
          alert("Admin can't delete course if a user is registered for it");
          return;
        }
      })

    fetch(("http://localhost:3001/courses/"+id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (update) {
      setUpdate(false);
    } else setUpdate(true);
    // console.log(id);
  }
  return (
    <>
      <Navb></Navb>
      <div className={classes.Home}>
        <SimpleCarousel></SimpleCarousel>
        {!ctx.isLoggedInAd && (
          <div style={{ padding: "1%" }}>
            <Card>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  padding: "1%",
                }}
              >
                My Courses
              </h1>
            </Card>
            {/* {console.log(myCourses)} */}
            {haveMyCourses && (
              <CourseCards
                items={myCourses}
                setc={registerCourseHandler}
              ></CourseCards>
            )}
            {!haveMyCourses && (
              <h3
                style={{ color: "black", textAlign: "center", padding: "1%" }}
              >
                No Registered Courses{" "}
              </h3>
            )}
          </div>
        )}
        <div style={{ padding: "1%" }}>
          <Card>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                padding: "1%",
              }}
            >
              All Courses
            </h1>
          </Card>
          {courses.length > 0 && (
            <CourseCards
              items={restCourses}
              setc={registerCourseHandler}
              setd={deleteCourseHandler}
            ></CourseCards>
          )}
          {courses.length === 0 && (
            <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
              All Courses Registered
            </h3>
          )}
        </div>
        {/* <div>
        <h1>All Courses</h1>
        <CourseCards items={restCourses}></CourseCards>
      </div> */}
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
