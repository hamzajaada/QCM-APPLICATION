const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EleveSchema = new Schema({
    username: String,
    email: String,
    password: String, 
    confirmPassword: String,
    filiere:String,
})

const EleveModel = mongoose.model("eleve",EleveSchema);
module.exports = EleveModel;