import React from "react";
import AddPetandJob from "../../components/AddPetandJob/AddPetandJob";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";
import JobGallery from "../../components/JobGallery/JobGallery";
import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";

function JobFeed({ handleJobModal, handlePetModal, loading, pets,jobs }) {
  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );

  return (
    <div className="h-screen   mt-10">
      {/* <Header /> */}
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="flex justify-between">
        <ProfileWidget pet={pets} />
        <JobGallery jobs={jobs} />
        <AdGallery />
      </div>
    </div>
  );
}

export default JobFeed;
