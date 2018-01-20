import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ReactRotatingText from 'react-rotating-text';

const customStyles2 = {
  color : "white",
  textOrientation: "upright"
};
const vert ={
    transform: [{ rotate: '90deg'}]
}

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-8">
      </Col>
      <Col size="md-4">
        <Jumbotron>
          <h1 style={customStyles2}><ReactRotatingText items={['Welcome', 'To', 'GoTED']} pause={'3000'} cursor={false} emptyPause={'1500'}/> </h1>
        </Jumbotron>

      </Col>
    </Row>
  </Container>;

export default NoMatch;
