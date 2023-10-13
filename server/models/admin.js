const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
  nam: String,
  email: String,
  password:String,
})

const AdminModel = mongoose.model("admin", AdminSchema)
module.exports = AdminModel