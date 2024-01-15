const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfSchema = new Schema({
    username: String,
    email: String,
    password: String, 
    confirmPassword: String,
    filiere: [String],
})

const Profmodel = mongoose.model("prof",ProfSchema);
module.exports = Profmodel;