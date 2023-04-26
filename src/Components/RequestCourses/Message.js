import Card from "../UI/Card";
import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import {useLocation} from "react-router-dom";

const Message = (props) => {
  
  const location = useLocation();
  return (
    <>
      <Navb></Navb>
      <div className="p-5">
        <Card>
          <div style={{ padding: "1%" }}>
            <h3> Your request for the course :</h3>
            <div style={{ padding: "1%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img src={location.state.imageURL} alt="No image found" width="200px"></img>
                <div>
                  <h4>Course Requested by:</h4>
                  <h5>User: {location.state.name}</h5>
                  <h5>Email: {location.state.email}</h5>
                </div>
              </div>
              <div style={{ padding: "1% 3%" }}>
                <h2>
                  <u>{location.state.title}</u>
                </h2>
                <h5>{location.state.text}</h5>
                <p>{location.state.description}</p>
              </div>
            </div>
            <h3>has been sent to us.</h3>
            <h6>
              We will consider your request and add this course as soon as
              possible.
            </h6>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Message;
