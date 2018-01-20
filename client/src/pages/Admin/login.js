import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const customStyles2 = {
  color : "white"
};

const login = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h2 style={customStyles2}>INSERT PASSPORT CRAP HERE</h2>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default login;
