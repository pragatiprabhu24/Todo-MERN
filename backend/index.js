const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/auth");

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((register) => res.json(register))
    .catch((err) => res.json(err));
});

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});
