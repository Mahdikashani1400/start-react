import { Component } from "react";
import "./shoppingCart.css";
import { Container, Col, Row, Button, ListGroup, Card } from "react-bootstrap";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex w-100 flex-col justify-content-center py-5 bg-warning">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                className="shopping__cart-container shadow-lg"
                style={{ backgroundColor: "#F9F6F6" }}
              >
                <Card style={{ backgroundColor: "#F9F6F6" }}>
                  <Card.Img
                    className="rounded"
                    variant="top"
                    src="/shoe-3.jpg"
                  />
                  <Card.Body className="bg-white">
                    <Card.Title>
                      <Row className="justify-content-between">
                        <Col>
                          <p className="mb-2">Nike Air Jordan</p>
                          <p>1 Mid 2022</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                          <Button variant="dark">Ksh.2000</Button>
                        </Col>
                      </Row>
                      <div className="d-flex gap-3 justify-content-center my-3">
                        <a
                          href="#"
                          className="bg-danger rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-primary rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-success rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                        <a
                          href="#"
                          className="bg-dark rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        ></a>
                      </div>
                    </Card.Title>
                  </Card.Body>
                  <Card.Title className="mt-4">Description</Card.Title>
                  <Card.Body className="ps-0 pt-2">
                    <Card.Text>
                      Nike Jordan is ranking as one of the best sport shoes in
                      the world. If leaves you in comfort at all times. We
                      guarantee total comfortability with the lightweight new
                      designs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
