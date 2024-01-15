const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require('./Question')
const Prof = require('./Prof')

const quizSchema = new Schema({
  nomQuiz: {
    type: String,
    required: true,
  },
  filiere: {
    type: String,
    required: true,
  },
  questions: [{
    question: String,
    reponses: [{
      value: String,
      // autres propriétés si nécessaire
    }],
    reponseCorrecte: Number, // Vous avez probablement besoin de changer cela en ObjectId
  }],
  dateFin: {
    type: Date,
    required: true,
  },
  professeurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prof',
    required: true,
  },
});

const QuizModel = mongoose.model("quiz",quizSchema);
module.exports = QuizModel;