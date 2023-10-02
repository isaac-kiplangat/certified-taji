const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AdminModel = require('./models/admin'); // Corrected import path

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/taji", {
  useNewUrlParser: true, // Add these options for better compatibility
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
app.post('/login', (req, res) => {
  const{email, password} = req.body;
  AdminModel.findOne({email:email})
  .then(user => {
    if(user){
      if(user.password === password){
        res.json("success")
      }
      else{
        res.json("wrong password")
      }
    }
    else{
      res.json("no such user")
    }
  })
  
})
app.post('/register', (req, res) => {
  AdminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.status(500).json({ error: err.message })); // Handle database errors
});

app.listen(3009, () => {
  console.log("Server is running on port 3009");
});
