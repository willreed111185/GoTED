const db = require("../models");
const urlFirst = "https://content.jwplatform.com/players/";
const urlLast ="-UbMgy82L.html";

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Talk
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
};
