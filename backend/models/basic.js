const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// const basicSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
// });

const saltRounds = 10; // Number of salt rounds for bcrypt

const basicSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String, // Store phone number as a string to include formatting or special characters
      required: true,
    },
    email: {
      type: String, // Store email as a string
      required: true,
      unique: true, // Ensure email addresses are unique
      lowercase: true, // Convert email to lowercase
      trim: true, // Remove whitespace from the beginning and end
    },
    dateOfBirth: {
      type: Date, // Use Date type for storing dates
      required: true,
    },
    address: {
      type: String, // Store address as a string
      required: true,
    },
    postalCode: {
      type: String, // Store postal code as a string to include leading zeros and special characters
      required: true,
    },
    state: {
      type: String, // Store state as a string
      required: true,
    },
    password: {
      type: String, // Store password as a string (should be hashed before storing)
      required: true,
    },
    confirmPassword: {
      type: String, // Store confirmPassword as a string (to be compared with password)
      required: true,
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Hash password before saving
basicSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
      if (err) return next(err);
      this.password = hashedPassword;
      this.confirmPassword = undefined; // Remove confirmPassword field
      next();
    });
  } else {
    return next();
  }
});

// Method to compare passwords during login
basicSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// Create a model using the schema

module.exports = mongoose.model("basic", basicSchema);
