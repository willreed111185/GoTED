import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Modal from 'react-modal';
import Iframe from 'react-iframe'
import { modalStyle, whiteFont, redFont, headLine, iFrameDivStyle, talksDivStyle } from "../../styles"


class Talks extends Component {
  state = {
    talks: [],
    articleTitle:"sample",
    articleContent:"sample",
    articleAuthor:"sample",
    articleMediaID:"sample",
    articleID:"",
    modalIsOpen: false
  };

  componentDidMount() {
    this.loadTalks();
  }

  openModal(index) {
    this.setState({
      modalIsOpen: true,
      articleTitle:this.state.talks[index].title,
      articleContent:this.state.talks[index].synopsis,
      articleAuthor:this.state.talks[index].author,
      articleMediaID:"https://content.jwplatform.com/players/"+this.state.talks[index].mediaID+"-UbMgy82L.html",
      articleID:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    });
    console.log(this.state.articleID)
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  loadTalks = () => {
    API.getTalks()
      .then(res =>
        this.setState({talks: res.data})
      )
      .catch(err => console.log(err));
  };


  iterateTalks(){
    return(this.state.talks.map((article,index)=> (
      <ListItem key={article.title}>
          <strong>
            <span style={redFont}>{article.author}</span> : {article.title}
          </strong>
          <p>{article.synopsis}</p>
        <button className={index} onClick={()=>this.openModal(index)}>Watch Talk</button>
      </ListItem>
    )))
  }


  render() {
    return (
      <Container fluid>
        <div style = {talksDivStyle}>
          <Row>
            <Col size="md-12">
              <Jumbotron style={headLine}>
                <h1 style={whiteFont}>TED Talks to View</h1>
              </Jumbotron>
              {this.state.talks.length ? (
                <List backgroundColor = "transparent">
                  {this.iterateTalks()}
                </List>
              ) : (
                <h3 style={whiteFont}>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyle}
            contentLabel="Reading Content"
            ariaHideApp={false}
          >
          <div style={iFrameDivStyle}>
            <Iframe url={this.state.articleMediaID}
              width="100%"
              height="100%"
              position="absolute"
              align="center"
              className = "embed-responsive embed-responsive-16by9"
              allowFullScreen/>
          </div>
          <h2 style={whiteFont}>{this.state.articleTitle}</h2>
          <h3 style={whiteFont}>{this.state.articleAuthor}</h3>
          <div>
            <p>{this.state.articleContent}</p>
          </div>
          <div>
            <button onClick={()=>this.closeModal()}>Close</button>
          </div>
          </Modal>
        </div>
      </Container>
    );
  }
}

export default Talks;