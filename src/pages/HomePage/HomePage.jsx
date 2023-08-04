import React, { useEffect, useState } from "react";
import AddPetandJob from "../../components/AddPetandJob/AddPetandJob";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";

import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";



function HomePage({ handleJobModal, handlePetModal, loading, pets, posts }) {
  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );

  return (
    <div className="h-screen  mt-10">
      <Header />
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="flex justify-evenly">
        <ProfileWidget pet={pets} />
        <PostGallery posts={posts} loading={loading} />
        <AdGallery />
      </div>
    </div>
  );
}

export default HomePage;
