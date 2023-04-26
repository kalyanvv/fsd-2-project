import { useState ,useEffect } from "react";

import Card from "../UI/Card";
import Footer from "../UI/Footer";
import Navb from "../UI/Navb";

const RequestedCourses=()=>{
    
    // console.log(port.requestedCourses);
    const [reCourses, setReCourses] = useState([]);
    useEffect(() => {
      const fetchitems = () => {
        fetch("http://localhost:3001/requestedCourses")
          .then((response) => response.json())
          .then((data) => {
            setReCourses(data);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, []);
    return (
      <>
        <Navb></Navb>
        <h1 style={{ textAlign: "center", fontWeight: "bold", padding: "1%" }}>
          Requested Courses
        </h1>
        {reCourses.map((course) => {
          return (
            <div className="p-4">
              <Card>
                <div style={{ padding: "3%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <img src={course.imageURL} alt="No image found" width="200px"></img>
                    <div>
                      <h4>Course Requested by:</h4>
                      <h5>User: {course.name}</h5>
                      <h5>Email: {course.email}</h5>
                    </div>
                  </div>
                  <div style={{ padding: "1% 3%" }}>
                    <h2>
                      <u>{course.title}</u>
                    </h2>
                    <h5>{course.text}</h5>
                    <p>{course.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
        <Footer></Footer>
      </>
    );
}
export default RequestedCourses;