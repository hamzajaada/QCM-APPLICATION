const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reponse = require('./Reponse')

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  reponses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reponse',
    required: true,
  }],
  reponseCorrecte: {
    type: Number,
    required: true,
  },
});

const QuestionModel = mongoose.model("question",questionSchema);
module.exports = QuestionModel;