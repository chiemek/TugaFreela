const mongoose = require("mongoose");

// Define the schema
const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  id: {
    type: String,
  },

  profile: {
    type: String, // This would typically be the file path or URL
  },
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  rate: {
    type: Number, // Assuming rate is a numeric value
  },
});

module.exports = mongoose.model("Client", clientSchema);
