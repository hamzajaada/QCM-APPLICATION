const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reponseSchema = new Schema({
  reponse: {
    type: String,
    required: true,
  },
});

const ReponseModel = mongoose.model("reponse",reponseSchema);
module.exports = ReponseModel;