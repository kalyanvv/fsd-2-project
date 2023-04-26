import Carousel from "react-bootstrap/Carousel";

function SimpleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80"
            alt="First slide"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
        <Carousel.Caption>
          <h2>Learn to solve Rubix Cube</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Second slide"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
        <Carousel.Caption>
          <h2>Learn to play BasketBall</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1626775238053-4315516eedc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt="Third slide"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
        <Carousel.Caption>
          <h2>Learn to play Poker</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SimpleCarousel;
