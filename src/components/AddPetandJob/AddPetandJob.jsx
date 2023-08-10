import React from "react";

function AddPetandJob({ handlePetModal, handleJobModal }) {
  return (
    <div className=" text-white flex gap-5 text-2xl mb-10 ">
      <button onClick={handlePetModal} className=" rounded-md w-32 ">
        Add Pet
      </button>

      <button onClick={handleJobModal} className="  rounded-md w-32 ">
        Add Job
      </button>
    </div>
  );
}

export default AddPetandJob;
