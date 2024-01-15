const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reponse = require('./Reponse')

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  reponses: [Reponse.schema],
  reponseCorrecte: {
    type: Number,
    required: true,
  },
});

const QuestionModel = mongoose.model("question",questionSchema);
module.exports = QuestionModel;