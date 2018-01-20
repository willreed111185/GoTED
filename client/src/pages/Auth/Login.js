import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "react-toggle/style.css";
import { redFont,whiteFont,loginDivStyls } from "../../styles";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


class TalkIntake extends Component {
  state = {
    userName:"",
    Password:"",
    Message:"",
    authorized:false
  };



  handleInputChange = event => {
    const { name, value } = event.target;
    if(event.target.name!=="articleDBKey"){
      this.setState({
        [name]: value
      });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.Password) {
      API.checkAuth({
        userName: this.state.userName,
        Password: this.state.Password,
      })
        .then(res => 
          this.evaluateAuth(res.data)
        )
        .catch(err => console.log("Error1: ",err.response));
    }
  }

  evaluateAuth(value){
    localStorage.setItem('authTest',value);
    if (value !== true){
      console.log("NO GO")
      //redirect to the Admin page
      this.setState({
        Message:"invalid credential",
        userName:"",
        Password:""
      })
    }else{
      this.setState({authorized:true})
    }
  }

  render() {
    if(this.state.authorized){
      return <Redirect to='/admin'/>;
    }else{
      return (
        <Container fluid >
        <Col size="md-12">
          <div style={loginDivStyls}>
            <Row>
              <h3 style={whiteFont}>Log in for admin access</h3>
            </Row>
            <Row>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="Username"
              />
              <Input
                value={this.state.Password}
                onChange={this.handleInputChange}
                name="Password"
                type="password"
                placeholder="Password"
              />
              <FormBtn
                disabled={!(this.state.userName && this.state.Password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </Row>
            <Row>
            <h2 style={redFont}>{this.state.Message}</h2>
            </Row>
            <Row>
              <Link to={"/Talks/"}>
                <h3 style={redFont}>Or Skip To The Talks</h3>
              </Link>
            </Row>
          </div>
        </Col>
        </Container>
      );
    }
  }
}

export default TalkIntake;