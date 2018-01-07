const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talkSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  mediaID: { type: String, required: true },
  synopsis: String
});

const Talk = mongoose.model("Talk", talkSchema);
module.exports = Talk;
