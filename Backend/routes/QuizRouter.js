const express = require("express");
const QuizRouter = express.Router();
const QuizController = require('../controllers/QuizControllers')

QuizRouter.get("/Professeur/",QuizController.GetAllQuizs);
QuizRouter.get("/Professeur/quiz/:id",QuizController.GetQuiz);
QuizRouter.post("/Professeur/Add-Quiz",QuizController.AddQuiz);

module.exports = QuizRouter;
