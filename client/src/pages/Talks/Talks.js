import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { TextArea } from "../../components/Form";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const customStyles2 = {
  color : "white"
};


class Books extends Component {
  state = {
    talks: [],
    savedArticles: [],
    articleTitle:"sample",
    articleContent:"sample",
    articleAuthor:"sample",
    articleMediaID:"sample",
    articleID:"",
    modalIsOpen: false
  };

  componentDidMount() {
    this.loadBooks();
    this.loadArticles();
  }

  openModal(index) {
    this.setState({
      modalIsOpen: true,
      articleTitle:this.state.talks[index].title,
      articleContent:this.state.talks[index].synopsis,
      articleAuthor:this.state.talks[index].author,
      articleMediaID:this.state.talks[index].mediaID,
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
        //console.log(res.data)
      )
      .catch(err => console.log(err));
  };

  loadArticles = () => {
    API.getArticles()
      .then(results =>
        this.setState({savedArticles: results.data.results})
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
            {this.state.savedArticles.length ? (
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
          <h2>{this.state.articleTitle}</h2>
          <h3>{this.state.articleAuthor}</h3>
          <div>
            <p>{this.state.articleContent}</p>
            <p>{this.state.articleMediaID}</p>
          </div>
          <form>
            <button onClick={()=>this.closeModal()}>Close</button>
          </form>
          </Modal>

          
        </div>
      </Container>
    );
  }
}

export default Books;
