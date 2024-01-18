const Quiz = require('../model/Quiz');
const User = require('../model/Eleve');

const AddQuiz = async (req, res) => {
  try {
    console.log(req.body)
    const quizData = req.body;
    const quiz = new Quiz(quizData);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    console.error("Erreur lors de l'ajout du quiz :", error);
    res.status(500).send("Erreur serveur lors de l'ajout du quiz");
  }
}

const GetAllQuizs = async (req, res) => {
  try {
    const quizs = await Quiz.find({professeurId : req.params.id});
    res.status(200).json(quizs);
  } catch (error) {
    console.error("Erreur lors de la recherche des quizs :", error);
    res.status(500).send("Erreur serveur lors de la recherche des quizs");
  }
}

const GetAllQuizsEtudiant = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const quizs = await Quiz.find({filiere : user.filiere});
    res.status(200).json(quizs);
  } catch (error) {
    console.error("Erreur lors de la recherche des quizs :", error);
    res.status(500).send("Erreur serveur lors de la recherche des quizs");
  }
}

const GetQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.status(200).json(quiz);
  } catch (error) {
    console.error("Erreur lors de la recherche du quiz :", error);
    res.status(500).send("Erreur serveur lors de la recherche du quiz");
  }
}

const UpdateQuiz = async (req,res) => {
  try {
    console.log(req.body)
    const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body.quiz, {new: true});
    res.status(200).json(updatedQuiz);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du quiz :", error);
    res.status(500).send("Erreur serveur lors de la mise à jour du quiz");
  }
}

const DeleteQuiz = async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedQuiz);
  } catch (error) {
    console.error("Erreur lors de la suppression du quiz :", error);
    res.status(500).send("Erreur serveur lors de la suppression du quiz");
  }
}

module.exports = { AddQuiz, GetAllQuizs, GetQuiz, UpdateQuiz, DeleteQuiz, GetAllQuizsEtudiant };
