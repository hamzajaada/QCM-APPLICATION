const express = require("express");
const QuizRouter = express.Router();
const QuizController = require('../controllers/QuizControllers')

QuizRouter.get("/Professeur/:id",QuizController.GetAllQuizs);
QuizRouter.get("/Professeur/quiz/:id",QuizController.GetQuiz);
QuizRouter.get("/Etudiant/:id",QuizController.GetAllQuizsEtudiant);
QuizRouter.post("/Professeur/Add-Quiz",QuizController.AddQuiz);
QuizRouter.put('/Professeur/Update-Quiz/:id',QuizController.UpdateQuiz);
QuizRouter.delete('/Professeur/Delete-Quiz/:id', QuizController.DeleteQuiz);

module.exports = QuizRouter;
