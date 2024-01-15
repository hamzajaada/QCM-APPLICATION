const PROF = require("../model/Prof");
const Student = require("../model/Eleve")
const jwt = require("jsonwebtoken");
const ADDPROF = async (req, res) => {
    const formData = req.body.formData;
    // Vous pouvez également déstructurer formData pour extraire les champs individuels.
    const { username, email, password, confirmPassword, filiere } = formData;
    const COMPASS = confirmPassword;
    const PASS = password;
    if (COMPASS == PASS) {
        console.log("entre dans la fonction ");
        const newProf = new PROF(formData);
        await newProf.save();
        console.log("Created with succesfly!!");
        res.json("créé !!"); 
    } 
    else {
        console.log("Erreur dans le mot de passe");
        res.status(400).json("Erreur dans le mot de passe");
    }
};
const ADDStudent = async (req, res) => {
    const eleveData = req.body;
    console.log(eleveData);
    
    const { username, email, password, confirmPassword, filiere } = eleveData;
    const COMPASS = confirmPassword;
    const PASS = password;

    try {
        if (COMPASS === PASS) {
            console.log("Entre dans la fonction");
            const newStudent = new Student(eleveData);
            await newStudent.save();
            console.log("Created with success!");
            res.json("Créé !!");
        } else {
            console.log("Erreur dans le mot de passe");
            res.status(400).json("Erreur dans le mot de passe");
        }
    } catch (error) {
        console.error("Erreur lors de la création de l'étudiant :", error);
        res.status(500).json("Erreur lors de la création de l'étudiant");
    }
};
const Login = async (req,res)=>{
    try {
       const {email,password,userType} = req.body.loginData
       console.log(req.body.loginData)
       console.log(userType);
       let US;
       if(userType === "prof") {
         US = await PROF.findOne({ email: email }); 
       } else if(userType === 'eleve') {
         US = await Student.findOne({ email: email });
       }
       console.log(US)
        // token : badge offre par le broser ;
        const jsenwebtkn = jwt.sign({ user:US.username, password:password }, "hamzajaada");
        const user = US._id;
        console.log(user);
        res.json({ jsenwebtkn, user }); 
       console.log(jsenwebtkn);
       
    } catch (err) {
        console.log("Erreur lors de la génération du token");
        res.status(500).json({ error: "Erreur serveur" });
    }
} 

module.exports ={ADDPROF,ADDStudent,Login};