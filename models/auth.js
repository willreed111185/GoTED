const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  valid: {type: Boolean, required:true}
});

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;
