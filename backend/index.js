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

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      if ((user.password = password)) {
        res.json("Success");
      } else {
        res.json("Wrong Password");
      }
    } else {
      res.json("User not found");
    }
  });
});

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});
