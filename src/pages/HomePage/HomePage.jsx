import React, { useEffect, useState } from "react";
import AddPetandJob from "../../components/AddPetandJob/AddPetandJob";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";

import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";

import * as petApi from "../../utils/petApi";

function HomePage({ handleJobModal, handlePetModal }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getPets() {
    try {
      setLoading(true)
      const pets = await petApi.getAll();
      console.log(pets);
      setPets(pets)
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  if(loading)return(
    <div>
      <h1> Loading</h1>
     </div>
  )

  return (
    <div className="h-screen w-screen  mt-10">
      <Header />
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="flex justify-between">
        <ProfileWidget pet={pets} />
        <PostGallery />
        <AdGallery />
      </div>
    </div>
  );
}

export default HomePage;
