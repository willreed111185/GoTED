import axios from "axios";

export default {
  getTalks: function() {
    return axios.get("/api/talks");
  }
};