const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultatSchema = new Schema({
  professeurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'prof',
    required: true,
  },
  etudiantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eleve',
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quiz',
    required: true,
  },
  resultat: Number
})

const ResultatModel = mongoose.model("resultat",ResultatSchema);
module.exports = ResultatModel;