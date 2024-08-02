const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  phoneNumber: String,
  email: String,
  dateOfBirth: Date,
  address: String,
  postalCode: String,
  state: String,
  password: String,
  confirmPassword: String,
});

module.exports = mongoose.model("Contact", contactSchema);
