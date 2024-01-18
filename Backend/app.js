const express = require("express");
const app = express();
const mongoose = require("mongoose")

const UserRouter = require("./routes/UserRouter")
const QuizRouter = require("./routes/QuizRouter");
const ResultatRouter = require("./routes/ResultatRouter");
const cors = require("cors");
const url = "mongodb://127.0.0.1:27017/QCM";
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/User",UserRouter);
app.use("/Quiz",QuizRouter);
app.use("/Resultat",ResultatRouter);

mongoose.connect(url).then(()=>{
    console.log("connecting!!");
}).catch((err)=>{
    console.log(err);
})

app.listen(8080,()=>{
    console.log("runnning!!!!");
})