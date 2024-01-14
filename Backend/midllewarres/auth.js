const Prof = require("../model/Prof");
const Eleve = require("../model/Eleve");
const { compare } = require('bcrypt');
const auth = async (req, res, next) => {
    const loginData =  req.body.loginData;
    console.log(loginData)
  const { email, password, userType } = loginData;
  if (userType == "eleve") {
    console.log("eleve");
    const user = await Eleve.findOne({ email: email });
    if (user) {
        console.log(password);
        console.log(user.password);
      const match = await (password == user.password);
      console.log(match)
      if (match) {
        console.log("connected");
        next();
      } else {
        console.log("Erreur d'authentification");
      }
    } else {
      console.log("Utilisateur non trouvé");
    }
  } 
  else if (userType == "prof") {
    console.log("Prof");
    const user = await Prof.findOne({ email: email });
    if (user) {
      const match =  await (password == user.password);
      if (match) {
        console.log("connected");
        next();
      } else {
        console.log("Erreur d'authentification");
      }
    } else {
      console.log("Utilisateur non trouvé");
    }
  }
};

module.exports ={auth};
