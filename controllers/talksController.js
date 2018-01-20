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
    db.Talk
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  create: function(req, res) {
    db.Talk
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Talk
      .findById({ _id: req.body._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  auth: function(req,res){
    console.log("Auth Route Hit in Controller");
    db.Auth
      .findOne(req.query)
      .then(authModel => {res.json(authModel.valid)})
      .catch(err => res.json(false));
  }
};