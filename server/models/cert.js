const mongoose = require("mongoose")

const CertSchema = new mongoose.Schema({
  name:String,
  email: String,
  password:String,
})

const CertModel = mongoose.model("certificate", CertSchema)
module.exports = AdminModel