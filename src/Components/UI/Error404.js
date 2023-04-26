import Button from "react-bootstrap/Button";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Error404 =()=>{
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate("/");
    }
    return (
      <>
        <Card>
          <div style={{textAlign: 'center', padding: '10px'}}>
            <h1>404 Error</h1>
            <h3>Page Not Found</h3>
            <Button variant="dark" onClick={ buttonHandler}>Go
             to Home</Button>
          </div>
        </Card>
      </>
    );
}
export default Error404;