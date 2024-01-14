const express = require("express");
const UserController = require("../controllers/UserControllers");
const middlwares = require("../midllewarres/auth");
const UserRouter = express.Router();
UserRouter.get("/",(req,res)=>{
    res.json("hello")
})
UserRouter.post("/Prof",UserController.ADDPROF);
UserRouter.post("/Student",UserController.ADDStudent);
UserRouter.post("/Login",middlwares.auth,UserController.Login);
module.exports = UserRouter;