import ProgressBar from "react-bootstrap/ProgressBar";

function Progress(props) {
  return <ProgressBar variant ="success" now={props.progress} />;
}

export default Progress;
