const Resultat = require('../model/Resultat');
const Quiz = require('../model/Quiz')
const User = require('../model/Eleve')

const AddResultat = async (req, res) => {
  let resultat = new Resultat(req.body);
  resultat.save()
    .then(resultat => {
      res.status(201).json(resultat);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

const GetAllResultats = async (req, res) => {
  try {
    const resultats = await Resultat.find({ quizId: req.params.id }).populate('etudiantId');
    res.status(200).json(resultats);
  } catch (error) {
    console.error("Erreur lors de la recherche des resultats :", error);
    res.status(500).send("Erreur serveur lors de la recherche des resultats");
  }
};

const GetCompletedQuizzesByEtudiant = async (req, res) => {
  try {
    const etudiantId = req.params.id; 
    const completedQuizzes = await Resultat.find({ etudiantId }).populate('quizId');
    res.status(200).json(completedQuizzes);
  } catch (error) {
    console.error("Erreur lors de la recherche des quizzes terminés :", error);
    res.status(500).send("Erreur serveur lors de la recherche des quizzes terminés");
  }
};

const GetIncompletedQuizzesByEtudiant = async (req, res) => {
  try {
    const etudiantId = req.params.id;
    const user = await User.findById(etudiantId);

    // Récupérer les résultats pour l'étudiant
    const results = await Resultat.find({ etudiantId });

    // Extraire les IDs des quiz terminés
    const completedQuizzes = results.map(result => result.quizId.toString());

    // Récupérer les quiz non passés par l'étudiant
    const notCompletedQuizzes = await Quiz.find({ _id: { $nin: completedQuizzes }, filiere: user.filiere });
    // const IncompletedQuizes = await notCompletedQuizzes.

    console.log("not completed quize: " + notCompletedQuizzes);
    res.status(200).json(notCompletedQuizzes);
  } catch (error) {
    console.error("Erreur lors de la recherche des quizzes non passés :", error);
    res.status(500).send("Erreur serveur lors de la recherche des quizzes non passés");
  }
};


module.exports = { AddResultat, GetAllResultats, GetCompletedQuizzesByEtudiant, GetIncompletedQuizzesByEtudiant };
