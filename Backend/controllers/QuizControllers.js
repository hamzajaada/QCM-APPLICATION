const Quiz = require('../model/Quiz');

// const AddQuiz = async (req, res) => {
//   try {
//     const {
//       nomQuiz,
//       filiere,
//       questions,
//       dateFin,
//       professeurId,
//     } = req.body;

//     // Créer un nouvel objet Quiz avec les données reçues
//     const newQuiz = new Quiz({
//       nomQuiz,
//       filiere,
//       questions,
//       dateFin,
//       professeurId,
//     });

//     // Sauvegarder le quiz dans la base de données
//     const savedQuiz = await newQuiz.save();

//     // Répondre avec le quiz sauvegardé
//     res.status(201).json(savedQuiz);
//   } catch (error) {
//     console.error("Erreur lors de l'ajout du quiz :", error);
//     res.status(500).send("Erreur serveur lors de l'ajout du quiz");
//   }
// };

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
    const quizs = await Quiz.find();
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

module.exports = { AddQuiz, GetAllQuizs, GetQuiz, UpdateQuiz, DeleteQuiz };
