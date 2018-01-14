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
    },
  update: function(req, res) {
  	console.log("UPDATE HIT CONTROLLER");
  	console.log(req.body. _id)
    db.Talk
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  create: function(req, res) {
  	console.log("CREATE HIT CONTROLLER");
    db.Talk
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
  	console.log("DELETE HIT CONTROLLER");
  	console.log(req)
    db.Talk
      .findById({ _id: req.body._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
