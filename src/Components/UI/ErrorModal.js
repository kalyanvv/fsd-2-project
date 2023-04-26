import Card from "./Card";
import Button from "react-bootstrap/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  // console.log(props);
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.contentmain}>
          <div className={classes.content}>
            <p style={{ color: "black" }}>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            {props.buttontxt === "Okay" && (
              <Button className={classes.Button} onClick={props.onConfirm}>
                Okay
              </Button>
            )}
            {props.buttontxt !== "Okay" && (
              <Button
                variant="info"
                onClick={props.onClickHome}
                className={classes.Button}
              >
                {props.buttontxt}
              </Button>
            )}
          </footer>
        </div>
      </Card>
    </div>
  );
};
export default ErrorModal;
