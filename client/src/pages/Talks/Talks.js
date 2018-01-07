import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { TextArea } from "../../components/Form";
import Modal from 'react-modal';
import Iframe from 'react-iframe'

const customStyles = {
  content : {
    top                   : '5%',
    bottom                : '5%',
    left                  : '15%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '70%',
    height                : '100%',
    backgroundColor       : 'black',
  }
};

const customStyles2 = {
  color : "white"
};


class Books extends Component {
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
    this.loadBooks();
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
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loadBooks = () => {
    API.getTalks()
      .then(res =>
        this.setState({talks: res.data})
      )
      .catch(err => console.log(err));
  };


  iterateArticles(){
    return(this.state.talks.map((article,index)=> (
      <ListItem key={article.title}>
          <strong>
            {article.title} by {article.author}
          </strong>
          <p>{article.synopsis}</p>
        <button className={index} onClick={()=>this.openModal(index)}>Watch Talk</button>
      </ListItem>
    )))
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={customStyles2}>TED Talks to View</h1>
            </Jumbotron>
            {this.state.talks.length ? (
              <List>
                {this.iterateArticles()}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Reading Content"
            ariaHideApp={false}
          >
          <Iframe url={this.state.articleMediaID}
            width="100%"
            height="75%"
            position="relative"
            align="center"
            allowFullScreen/>
          <h2 style={customStyles2}>{this.state.articleTitle}</h2>
          <h3 style={customStyles2}>{this.state.articleAuthor}</h3>
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

export default Books;
