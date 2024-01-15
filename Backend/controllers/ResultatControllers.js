const Resultat = require('../model/Resultat');

const AddResultat = async (req, res) => {
  let resultat = new Resultat(req.body);
  resultat.save()
    .then(resultat => {
      res.status(201).json(resultat);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    })
}

module.exports ={AddResultat};