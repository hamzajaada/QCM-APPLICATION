import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import RegisterForme from './Componment/1-Register/Register'
import LoginForm from "./Componment/2-Login/Login";
import PageChoix from "./Componment/0-ChoixUser/Page"
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Choix" element={<PageChoix /> } />
          <Route path="/Register" element={<RegisterForme /> } />
          <Route path="/" element={<LoginForm /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
