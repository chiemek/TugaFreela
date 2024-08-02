const mongoose = require("mongoose");

// Define the schema
const freelancerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  nif: {
    type: String,
  },
  citizenCard: {
    type: String,
  },
  profile: {
    type: String, // This would typically be the file path or URL
  },
  title: {
    type: String,
  },
  categories: {
    type: [String], // Array of strings to accommodate multiple categories
  },
  description: {
    type: String,
  },
  rate: {
    type: Number, // Assuming rate is a numeric value
  },
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
