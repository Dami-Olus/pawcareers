import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import userService from "./utils/userService";

import HomePage from "./pages/HomePage/HomePage";
import AddJob from "./components/modal/AddJob/AddJob";
import AddPet from "./components/modal/AddPet/AddPet";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";


function App() {
  const [user, setUser] = useState(userService.getUser())
  const [showPetModal, setShowPetModal] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handlePetModalSkip(){
    setShowPetModal(false)
    setShowJobModal(true)
  }

  function handleJobModalSkip(){
    setShowJobModal(false)
  }

  return (
    <div>
      {showPetModal ? <AddPet handlePetModalSkip={handlePetModalSkip} /> : null}
      {showJobModal ? <AddJob handleJobModalSkip={handleJobModalSkip} /> : null}
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
    </Routes>
    </div>
    
  );
}

export default App;
