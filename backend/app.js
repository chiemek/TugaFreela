const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Define the MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  role: { type: String, required: true },
  phoneNumber: String,
  email: { type: String, required: true, unique: true },
  dateOfBirth: Date,
  address: String,
  postalCode: String,
  state: String,
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  id: String,
  nif: String,
  citizenCard: String,
  title: String,
  categories: [String], // Array of categories
  description: String,
  rate: Number,
});

const User = mongoose.model("User", userSchema);

// Endpoint to set specific fields to null
app.post("/signup-clientSkip", async (req, res) => {
  try {
    const {
      role,
      phoneNumber,
      email,
      dateOfBirth,
      address,
      postalCode,
      state,
      password,
      confirmPassword,
      firstName,
      lastName,
      id,
      nif,
      citizenCard,
      title,
      categories,
      description,
      rate,
    } = req.body;

    // Check for required fields
    if (!role || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Role, email, password, and confirm password are required",
      });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data with default null values for missing fields
    const newUser = {
      role: role || null,
      phoneNumber: phoneNumber || null,
      email: email || null,
      dateOfBirth: dateOfBirth || null,
      address: address || null,
      postalCode: postalCode || null,
      state: state || null,
      password: hashedPassword,
      firstName: null,
      lastName: null,
      id: null,
      nif: null,
      citizenCard: null,
      title: null,
      categories: null,
      description: null,
      rate: null,
    };

    // Save the user
    const user = new User(newUser);
    await user.save();
    res.status(201).json({
      message:
        "User created successfully with fields set to null where not provided",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

// Endpoint to set id to null but collect the remaining data from the frontend
app.post("/signup-freelancer", async (req, res) => {
  try {
    const {
      role,
      phoneNumber,
      email,
      dateOfBirth,
      address,
      postalCode,
      state,
      password,
      confirmPassword,
      firstName,
      lastName,
      id,
      nif,
      citizenCard,
      title,
      categories,
      description,
      rate,
    } = req.body;

    // Check for required fields
    if (!role || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Role, email, password, and confirm password are required",
      });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data with default null values for missing fields
    const newUser = {
      role: role || null,
      phoneNumber: phoneNumber || null,
      email: email || null,
      dateOfBirth: dateOfBirth || null,
      address: address || null,
      postalCode: postalCode || null,
      state: state || null,
      password: hashedPassword,
      firstName: firstName || null,
      lastName: lastName || null,
      id: null, // Set id to null
      nif: nif || null,
      citizenCard: citizenCard || null,
      title: title || null,
      categories: categories || null,
      description: description || null,
      rate: rate || null,
    };

    // Save the user
    const user = new User(newUser);
    await user.save();
    res
      .status(201)
      .json({ message: "User created successfully with id set to null" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

// Endpoint to set nif and citizenCard to null but collect the remaining data from the frontend
app.post("/signup-client", async (req, res) => {
  try {
    const {
      role,
      phoneNumber,
      email,
      dateOfBirth,
      address,
      postalCode,
      state,
      password,
      confirmPassword,
      firstName,
      lastName,
      id,
      nif,
      citizenCard,
      title,
      categories,
      description,
      rate,
    } = req.body;

    // Check for required fields
    if (!role || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Role, email, password, and confirm password are required",
      });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data with default null values for missing fields
    const newUser = {
      role: role,
      phoneNumber: phoneNumber,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address,
      postalCode: postalCode,
      state: state,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      id: id || null,
      nif: null, // Set nif to null
      citizenCard: null, // Set citizenCard to null
      title: null,
      categories: null,
      description: description,
      rate: null,
    };

    // Save the user
    const user = new User(newUser);
    await user.save();
    res.status(201).json({
      message: "User created successfully with nif and citizenCard set to null",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
