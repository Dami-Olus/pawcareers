import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import userService from "./utils/userService";
import * as petApi from "./utils/petApi";
import * as jobApi from "./utils/jobApi";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import PetsFeed from "./pages/PetsFeed/PetsFeed";
import JobFeed from "./pages/JobsFeed/JobFeed";
import JobsPage from "./pages/JobsPage/JobsPage";
import PetsPage from "./pages/PetsPage/PetsPage";

import AddJob from "./components/modal/AddJob/AddJob";
import AddPet from "./components/modal/AddPet/AddPet";
import EditPost from "./components/EditPost/EditPost";
import Header from "./components/Header/Header";

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [showPetModal, setShowPetModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    skills: "",
  });
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const [pets, setPets] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  async function getPets() {
    try {
      setLoading(true);
      const pets = await petApi.getAll();
      console.log(pets);
      setPets(pets);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function getJobs() {
    try {
      setLoading(true);
      const jobs = await jobApi.getAll();
      console.log(jobs);
      setJobs(jobs);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPets();
    getJobs();
  }, []);

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleSignOut() {
    navigate("/login");
    userService.logout();

    setUser(null);
  }

  function handlePetModal() {
    setShowPetModal(!showPetModal);
  }

  function handleJobModal() {
    setShowJobModal(!showJobModal);
  }

  function handlePetModalSkip() {
    setShowPetModal(false);
  }

  function handleJobModalSkip() {
    setShowJobModal(false);
  }

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route path="/*" element={<Navigate to='/login' />} />
        </Routes>
      </div>
    );

  return (
    <div>
      {showPetModal && <AddPet handlePetModalSkip={handlePetModalSkip} />}
      {showJobModal && <AddJob handleJobModalSkip={handleJobModalSkip} />}
      <Header handleSignOut={handleSignOut} user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              modalOpen={showPetModal || showJobModal}
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
              pets={pets}
              user={user}
              loading={loading}
            />
          }
        />
        <Route
          path="/jobs"
          element={
            <JobFeed
              jobs={jobs}
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
              pets={pets}
              user={user}
              loading={loading}
            />
          }
        />
        <Route
          path="/pets"
          element={
            <PetsFeed
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
              pets={pets}
              user={user}
              loading={loading}
            />
          }
        />
        <Route
          path="/jobspage/:id"
          element={
            <JobsPage
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
              pets={pets}
              jobs={jobs}
              loading={loading}
            />
          }
        />

        <Route
          path="/petspage/:id"
          element={
            <PetsPage
              handlePetModal={handlePetModal}
              handleJobModal={handleJobModal}
              pets={pets}
              jobs={jobs}
              loading={loading}
            />
          }
        />

        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
