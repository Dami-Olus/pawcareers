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
  const [user, setUser] = useState(userService.getUser());
  const [showPetModal, setShowPetModal] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);
  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    location: '',
    skills: ''
  });
  const [jobData, setJobData] = useState({
    name: '',
    breed: '',
    age: '',
    location: '',
    skills: ''
  });

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handlePetModal() {
    setShowPetModal(!showPetModal);
    
  }

  function handleJobModal() {
    setShowJobModal(!showJobModal);
  }

  

  function handlePetModalSkip() {
    setShowPetModal(false);
    setShowJobModal(true);
  }

  function handleJobModalSkip() {
    setShowJobModal(false);
  }

  if (!user)
    return (
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
        </Routes>
      </div>
    );

  return (
    <div>
      {showPetModal ? <AddPet handlePetModalSkip={handlePetModalSkip} /> : null}
      {showJobModal ? <AddJob handleJobModalSkip={handleJobModalSkip} /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
