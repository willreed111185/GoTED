import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=";
const APIKEY = "1a0f6f4c3108448b8a33834f4188622f";


export default {
  getTalks: function() {
    return axios.get("/api/talks");
  },
  getBook: function(id) {
    return axios.get("/api/talks/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("/api/talks/" + id);
  },
  saveBook: function(bookData) {
    console.log(bookData)
    return axios.post("/api/talks", bookData);
  },
  saveNote: function(id,bookData) {
    return axios.put("/api/talks/"+id, bookData);
  },
  getArticles: function() {
    return axios.get(BASEURL + APIKEY);
  }
};