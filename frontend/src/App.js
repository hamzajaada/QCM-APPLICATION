import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import RegisterForme from './Componment/1-Register/Register'
import LoginForm from "./Componment/2-Login/Login";
import PageChoix from "./Componment/00-ChoixUser/Page"
import RegisterProf from "./Componment/1-Register/RegisterProf";
import HomeProf from "./Componment/4-Home/HomeProf"
import HomeEtudiant from "./Componment/4-Home/HomeEtudiant";
import AddQuiz from "./Componment/7-Add-Quiz/Add-Quiz"
import QuizPage from "./Componment/6-Quiz/Quiz";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Choix" element={<PageChoix /> } />
          <Route path="/Register" element={<RegisterForme /> } />
          <Route path="/RegisterProf" element={<RegisterProf /> } />
          <Route path="/" element={<LoginForm /> } />
          <Route path="/Home/Professeur" element={<HomeProf /> } />
          <Route path="/Home/Etudiant" element={<HomeEtudiant /> } />
          <Route path="/Home/Professeur/Add-Quiz" element={<AddQuiz /> } />
          <Route path="/Home/Professeur/Quiz/:id" element={<QuizPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
