import React from "react";
import { Image } from "semantic-ui-react";
import AddPetandJob from "../AddPetandJob/AddPetandJob";

function ProfileWidget({ pet, user, handleJobModal, handlePetModal }) {
  return (
    <div className="text-white h-[500px] mt-20  rounded-md bg-[#407bff] flex flex-col sticky top-44 p-10 ml-20 w-[400px]  gap-2  text-4xl text-center">
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="sticky">
        <h4>My Pets</h4>
      </div>
      <div className=" flex gap-2 overflow-y-scroll">
        {pet?.pets.map((pet) => {
          if (pet.user.username === user.username) {
            return (
              <img src={pet.photoUrl} alt="" className="h-24 rounded-full" />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProfileWidget;
