 import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Intro() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 780px)' });

  const containerClassName = isSmallScreen? 'w-90 mt-4' : 'w-90 mt-5 pt-5'; 
  const marginBottomClass = isSmallScreen ? 'mb-4' : '';

  const sty2 = {
    border: 'solid',
    position: 'relative',
    left: isSmallScreen ? '30%' : '35%',
    borderRadius: isSmallScreen ? '20px' : '50px',
    backgroundColor: 'pink',
    width: isSmallScreen ? '35%' : '25%',
  };

  return (
    <Container className={containerClassName}>
      <div className={`d-flex justify-content-center border main ${marginBottomClass}`}>
        <Row>
          <Col lg={6} sm={10}>
            <div className="ms-4">
              <img src="main.jpeg" alt="main" className="my-3 in" style={{ height: '250px' }} />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="mt-5">
              <h6 className="fw-bolder ms-4">
                "Savor the sweetness of bakery delights, where every cake is a divine treat."
              </h6>
              <br />
              <p className="text-center">100% Eggless | 24 hours delivery</p>
              <h5 className="text-center" style={sty2}>
                Order Now
              </h5>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Intro;
