const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    reponses: [
      {value: String}
    ],
    reponseCorrecte: Number,

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

const Quiz = mongoose.model("quiz",quizSchema);
module.exports = Quiz;