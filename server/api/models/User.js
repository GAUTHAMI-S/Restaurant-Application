const mongoose = require("mongoose");
const { Schema } = mongoose;

//create schema obj for menu
const userSchema = new Schema({
  name: String,
  email: { type: String, trim: true, minlength: 3 },
  photoURL: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

//create model
const User = mongoose.model("User", userSchema);
module.exports = User;
