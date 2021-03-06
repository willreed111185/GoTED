import axios from "axios";

export default {
  getTalks: function() {
    return axios.get("/api/talks");
  },
  updateTalk: function(talkData) {
  	console.log(talkData);
    return axios.put("/api/talks", talkData);
  },
  saveTalk: function(talkData) {
    return axios.post("/api/talks", talkData);
  },
  deleteTalk: function(talkData) {
  	console.log(talkData);
    return axios.post("/api/talks/delete", talkData);
  },
  checkAuth: function(authData){
    console.log(authData);
    return axios.get("/api/talks/auth",{
      params: {
        userName:authData.userName,
        password:authData.Password
      }
    });
  }
};