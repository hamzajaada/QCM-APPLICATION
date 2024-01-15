const express = require('express')
const ResultatRouter = express.Router();
const ResultatController = require('../controllers/ResultatControllers')

// ResultatRouter.get('/Professeur/',ResultatController.GetAllResultats);
ResultatRouter.post('/Add', ResultatController.AddResultat);

module.exports = ResultatRouter;