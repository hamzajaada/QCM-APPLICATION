import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import RegisterForme from './Componment/1-Register/Register'
import LoginForm from "./Componment/2-Login/Login";
import PageChoix from "./Componment/00-ChoixUser/Page"
import RegisterProf from "./Componment/1-Register/RegisterProf";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Choix" element={<PageChoix /> } />
          <Route path="/Register" element={<RegisterForme /> } />
          <Route path="/RegisterProf" element={<RegisterProf /> } />
          <Route path="/" element={<LoginForm /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
