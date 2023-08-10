import AddPetandJob from "../../components/AddPetandJob/AddPetandJob";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";
import JobGallery from "../../components/JobGallery/JobGallery";
import PetGallery from "../../components/PetGallery/PetGallery";
import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";

function PetsFeed({ handleJobModal, handlePetModal, loading, pets, user }) {
  if (loading) return <div></div>;

  return (
    <div className="h-screen mt-10">
      {/* <Header /> */}
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="flex justify-between">
        <ProfileWidget pet={pets} user={user} />
        <PetGallery pets={pets} />
        <AdGallery />
      </div>
    </div>
  );
}

export default PetsFeed;
