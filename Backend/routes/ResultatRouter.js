const express = require('express')
const ResultatRouter = express.Router();
const ResultatController = require('../controllers/ResultatControllers')

ResultatRouter.get('/Professeur/Quiz/:id/Resultat',ResultatController.GetAllResultats);
ResultatRouter.get('/Etudiant/:id/CompletedQuizzes', ResultatController.GetCompletedQuizzesByEtudiant);
ResultatRouter.get('/Etudiant/:id/IncompletedQuizzes', ResultatController.GetIncompletedQuizzesByEtudiant);
ResultatRouter.post('/Add', ResultatController.AddResultat);

module.exports = ResultatRouter;