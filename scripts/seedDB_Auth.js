const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || keys.mongodb.dbURI,
  {
    useMongoClient: true
  }
);

const authSeed = [
  {
    userName: "William Reed",
    password: "monica",
    valid: true
  }
];

db.Auth
  .remove({})
  .then(() => db.Auth.collection.insertMany(authSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
