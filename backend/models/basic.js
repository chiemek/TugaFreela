const mongoose = require("mongoose");

const basicSchema = new mongoose.Schema({
  role: String,
  phoneNumber: String,
  email: String,
  dateOfBirth: Date,
  address: String,
  postalCode: String,
  state: String,
  password: String,
  confirmPassword: String,
});

module.exports = mongoose.model("Basic", basicSchema);
