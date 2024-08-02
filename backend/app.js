const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

// Import models
const Basic = require("./models/basic");
const Freelancer = require("./models/freelancer");
const Contact = require("./models/contact");

const app = express();
const port = 5000;

// MongoDB URI
const uri =
  "mongodb+srv://mekus1085:actbrisL1HtSy179@cluster0.70tsqwv.mongodb.net/users?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware setup
app.use(express.json());
app.use(cors());

// Basic routes
app.get("/basic", async (req, res) => {
  try {
    const basics = await Basic.find();
    res.json(basics);
  } catch (error) {
    console.error("Error fetching basics:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/basic", async (req, res) => {
  const basic = new Basic(req.body);
  try {
    await basic.save();
    res.json(basic);
  } catch (error) {
    console.error("Error adding basic:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/basic/:id", async (req, res) => {
  try {
    await Basic.deleteOne({ _id: req.params.id });
    res.send("true");
  } catch (error) {
    console.error("Error deleting basic:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/basic/:id", async (req, res) => {
  try {
    await Basic.updateOne({ _id: req.params.id }, req.body);
    res.send("update successful");
  } catch (error) {
    console.error("Error updating basic:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Freelancer routes
app.get("/freelancer", async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.json(freelancers);
  } catch (error) {
    console.error("Error fetching freelancers:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/freelancer", async (req, res) => {
  const freelancer = new Freelancer(req.body);
  try {
    await freelancer.save();
    res.json(freelancer);
  } catch (error) {
    console.error("Error adding freelancer:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/freelancer/:id", async (req, res) => {
  try {
    await Freelancer.deleteOne({ _id: req.params.id });
    res.send("true");
  } catch (error) {
    console.error("Error deleting freelancer:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/freelancer/:id", async (req, res) => {
  try {
    await Freelancer.updateOne({ _id: req.params.id }, req.body);
    res.send("update successful");
  } catch (error) {
    console.error("Error updating freelancer:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Contact routes
app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/contact", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.send("true");
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/contact/:id", async (req, res) => {
  try {
    await Contact.updateOne({ _id: req.params.id }, req.body);
    res.send("update successful");
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
