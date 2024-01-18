import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import RegisterForme from './Componment/1-Register/Register'
import LoginForm from "./Componment/2-Login/Login";
import PageChoix from "./Componment/0-ChoixUser/Page"
import RegisterProf from "./Componment/1-Register/RegisterProf";
import HomeProf from "./Componment/4-Home/HomeProf"
import HomeEtudiant from "./Componment/4-Home/HomeEtudiant";
import AddQuiz from "./Componment/7-Add-Quiz/Add-Quiz"
import QuizPage from "./Componment/6-Quiz/Quiz";
import UpdateQuiz from "./Componment/9-Update-Quiz/UpdateQuiz";
import ConsulterQuiz from "./Componment/10-ConsulerQuiz/ConsulterQuiz";
import Header from './Componment/3-Header/header'
import Resultat from "./Componment/8-Resultat/Resultat";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/Choix" element={<PageChoix /> } />
          <Route path="/Register" element={<RegisterForme /> } />
          <Route path="/RegisterProf" element={<RegisterProf /> } />
          <Route path="/" element={<LoginForm /> } />
          <Route path="/Home/Professeur" element={<HomeProf /> } />
          <Route path="/Home/Etudiant" element={<HomeEtudiant /> } />
          <Route path="/Home/Professeur/Add-Quiz" element={<AddQuiz /> } />
          <Route path="/Home/Professeur/Quiz/:id" element={<QuizPage /> } />
          <Route path="/Home/Professeur/Quiz/Edit/:id" element={<UpdateQuiz /> } />
          <Route path="/Home/Etudiant/Quiz/:id" element={<ConsulterQuiz/>}/>
          <Route path="/Home/Professeur/Quiz/:id/Resultat" element={<Resultat/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
