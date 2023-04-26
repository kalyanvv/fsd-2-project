import {useState,useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Progress from "./Progress"
import Star from "./Star";
import classes from "./SquareCard.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";


function SquareCard(props) {
  const ctx = useContext(AuthContext);

  const buttonHandler = () => {
    props.check(props.id);
  }
  const deleteButtonHandler = () => {
    props.delete(props.id);
  }
  // console.log(props);
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#28282b",
        border: "1rem",
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 0 15px rgba(0,0,0,0.6)",
      }}
    >
      <Link to={`/course/${props.id}`}>
        {/* {console.log(props.id)} */}
        <Card.Img variant="top" src={props.imageURL} />
      </Link>
      <Card.Body>
        <Card.Title style={{ color: "beige" }}>{props.title}</Card.Title>
        <Star />
        <Card.Text style={{ color: "beige" }}>{props.text}</Card.Text>

        {(!ctx.isLoggedInAd && (props.progress || props.progress === 0)) && (
          <Progress progress={props.progress}></Progress>
        )}
        {(!ctx.isLoggedInAd && props.progress===undefined)  && (
          <div className="d-flex justify-content-center">
            <Button className={classes.Button} onClick={buttonHandler}>
              Register
            </Button>
          </div>
        )}

        {ctx.isLoggedInAd && (
          <div className="d-flex justify-content-center">
            <Button className={classes.Button} onClick={deleteButtonHandler}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default SquareCard;
