const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Basic = require("./models/basic");

const app = express();

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/signUp")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// getting data from frontend
app.use(express.json());
app.use(cors());

app.get("/basic", async (req, res) => {
  try {
    const basic = await Basic.find();
    res.json(basic);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// adding data to mongodb
app.post("/add", async (req, res) => {
  const basic = new Basic(req.body);
  try {
    await basic.save();
    res.json(basic);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// deleting data from mongodb
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Basic.deleteOne({ _id: id });
    res.send("true");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// updating data in mongodb
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Basic.updateOne({ _id: id }, req.body);
    res.send("update successful");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// listening to port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
