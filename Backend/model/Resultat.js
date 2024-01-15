const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultatSchema = new Schema({
  professeurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prof',
    required: true,
  },
  etudiantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Eleve',
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  resultat: Number
})

const ResultatModel = mongoose.model("resultat",ResultatSchema);
module.exports = ResultatModel;