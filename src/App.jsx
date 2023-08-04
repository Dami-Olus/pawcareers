import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import userService from "./utils/userService";

import HomePage from "./pages/HomePage/HomePage";
import AddJob from "./components/modal/AddJob/AddJob";
import AddPet from "./components/modal/AddPet/AddPet";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import JobFeed from "./pages/JobsFeed/JobFeed";

import * as petApi from "./utils/petApi";
import * as jobApi from "./utils/jobApi";
import * as postApi from "./utils/postApi";
import PetsFeed from "./pages/PetsFeed/PetsFeed";
import JobsPage from "./pages/JobsPage/JobsPage";
import PetsPage from "./pages/PetsPage/PetsPage";
import EditPost from "./components/EditPost/EditPost";

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [showPetModal, setShowPetModal] = useState(true);
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  async function getPosts() {
    try {
      setLoading(true);
      const posts = await postApi.getAll();
      console.log(posts);
      setPosts(posts);
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
    getPosts();
  }, []);

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
              pets={pets}
              posts={posts}
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

        <Route
          path="/posts/:id/edit"
          element={
            <EditPost
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
