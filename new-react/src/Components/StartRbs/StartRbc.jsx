import React, { Component } from "react";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";

export default class StartRbc extends Component {
  render() {
    return (
      <>
        {" "}
        <button className="btn btn-danger">hi</button>
        <div className="alert alert-primary">salam chetori</div>
        <Container>
          <Row md={2} className="justify-content-center gy-4">
            <Col lg={8}>
              <Stack direction="horizontal" gap={5}>
                <Button as="a" variant="primary">
                  Button as link
                </Button>
                <Button as="a" variant="success">
                  Button as link
                </Button>
              </Stack>
            </Col>
            <Col md={4}>
              <Stack direction="horizontal" gap={5}>
                <Button as="a" variant="danger">
                  Button as link
                </Button>
                <Button as="a" variant="dark">
                  Button as link
                </Button>
              </Stack>
            </Col>
            <Col>
              <Row className="">
                <Col className="d-flex justify-content-center">
                  <Stack direction="horizontal" gap={5}>
                    <Button as="a" variant="danger">
                      Button as link
                    </Button>
                    <Button as="a" variant="dark">
                      Button as link
                    </Button>
                  </Stack>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
