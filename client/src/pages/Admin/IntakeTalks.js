import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Modal from 'react-modal';
import { modalStyle, whiteFont, redFont, headLine } from "../../styles";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Toggle from 'react-toggle';
import "react-toggle/style.css";



class TalkIntake extends Component {
  state = {
    talks: [],
    articleTitle:"sample",
    articleContent:"sample",
    articleAuthor:"sample",
    articleID:"",
    articleDBKey:"",
    talkNew:false,
    modalIsOpen: false,
    redirectAuth:true
  };

  componentDidMount() {
    this.loadTalks();
    this.setState({
      redirectAuth: localStorage.getItem("authTest")
    });
    console.log(this.state)
  }

  openModal(index) {
    if(index!=="00"){
      this.setState({
        modalIsOpen: true,
        articleTitle:this.state.talks[index].title,
        articleContent:this.state.talks[index].synopsis,
        articleAuthor:this.state.talks[index].author,
        articleTag:this.state.talks[index].mediaID,
        articleID:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        articleDBKey:this.state.talks[index]._id,
        talkNew: false
      });
  }else{
      this.setState({
        modalIsOpen: true,
        articleTitle:"",
        articleContent:"",
        articleAuthor:"",
        articleTag:"",
        articleID:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        articleDBKey:"",
        talkNew:true
      });
  }
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

  deleteTalk(index) {
    console.log(index);
    this.setState({
       articleDBKey:this.state.talks[index]._id,
    });
    console.log(this.state.articleDBKey)
    API.deleteTalk({
        _id:this.state.articleDBKey
      })
      .then(res => this.loadTalks())
      .catch(err => console.log(err));
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
    if (this.state.articleTitle && this.state.articleAuthor && this.state.articleTag) {
      console.log("THIS TEST ",this.state.talkNew)
      if(this.state.talkNew===false){
        console.log("UpdateArticle: ",this.state.articleAuthor);
        API.updateTalk({
          title: this.state.articleTitle,
          author: this.state.articleAuthor,
          mediaID: this.state.articleTag,
          synopsis: this.state.articleContent,
          _id:this.state.articleDBKey
        })
          .then(res => this.loadTalks())
          .catch(err => console.log(err));
      }else{
       console.log("NewArticle: ",this.state.articleAuthor);
        API.saveTalk({
          title: this.state.articleTitle,
          author: this.state.articleAuthor,
          mediaID: this.state.articleTag,
          synopsis: this.state.articleContent,
        })
          .then(res => this.loadTalks())
          .catch(err => console.log(err));
      }
    }
    this.closeModal();
  };

  iterateTalks(){
    return(this.state.talks.map((talk,index)=> (
      <ListItem key={talk.title} data-test={talk._id}>
          <strong>
            <span style={redFont}>{talk.author}</span> : {talk.title}
          </strong>
          <h5>Serial Number: {talk._id}</h5>
          <p>{talk.synopsis}</p>
        <button className={index} onClick={()=>this.openModal(index)}>Edit Talk</button>
        <button className={index} onClick={()=>this.deleteTalk(index)}>Delete Talk</button>
      </ListItem>
    )))
  }


  render() {
    if (this.state.redirectAuth==="false"){
      return(<h1>AccessDenied</h1>)
    }else{
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron style={headLine}>
                <h1 style={whiteFont}>TED Talks to View</h1>
              </Jumbotron>
              <button onClick={()=>this.openModal("00")}>Load A New Talk</button>
              {this.state.talks.length ? (
                <List backgroundColor = "transparent">
                  {this.iterateTalks()}
                </List>
              ) : (
                <h3 style={whiteFont}>No Results to Display</h3>
              )}
            </Col>
          </Row>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={modalStyle}
              contentLabel="Reading Content"
              ariaHideApp={false}
            >
            <form>
                <Toggle
                  id='cheese-status'
                  defaultChecked={this.state.talkNew}
                  onChange={this.handleInputChange} />
                  <label htmlFor='cheese-status'>Is This a New Article?</label>
                <Input
                  value={this.state.articleTitle}
                  onChange={this.handleInputChange}
                  name="articleTitle"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.articleAuthor}
                  onChange={this.handleInputChange}
                  name="articleAuthor"
                  placeholder="Author (required)"
                />
                <Input
                  value={this.state.articleTag}
                  onChange={this.handleInputChange}
                  name="articleTag"
                  placeholder="JW Tag (required)"
                />
                <Input
                  value={this.state.articleDBKey}
                  onChange = {this.handleInputChange}
                  name="articleDBKey"
                  placeholder="Not In Database"
                />
                <TextArea
                  value={this.state.articleContent}
                  onChange={this.handleInputChange}
                  name="articleContent"
                  placeholder="Synopsis (Optional)"
                />

                <FormBtn
                  disabled={!(this.state.articleAuthor && this.state.articleTitle && this.state.articleTag)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            <div>
              <button onClick={()=>this.closeModal()}>Close</button>
            </div>
            </Modal>
          </div>
        </Container>
      );
    }
  }
}

export default TalkIntake;