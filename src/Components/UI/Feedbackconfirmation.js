import Button from "react-bootstrap/Button";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Feedbackconfirmation =()=>{
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate("/");
    }
    return (
      <>
        <Card>
          <div style={{textAlign: 'center', padding: '10px'}}>
            <h1>Thank you for your feedback</h1>
            <Button variant="dark" onClick={ buttonHandler}>Go
             to Home</Button>
          </div>
        </Card>
      </>
    );
}
export default Feedbackconfirmation;