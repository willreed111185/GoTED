import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";

const customStyles2 = {
  color : "white"
};
const customStyles3 = {
  color : "Red"
};
const customStyles4 = {
  color : "White",
  fontSize: "12pt"
};

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
        <h2 style={customStyles2}>Welcome to the GoTED App. Please log in to continue.</h2>
        <Link to={"/AuthGoogle/"}>
          <h2 style={customStyles3}>Google+</h2>
        </Link>
        <Link to={"/Talks/"}>
          <h3 style={customStyles4}>Skip Right To The Talks+</h3>
        </Link>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
