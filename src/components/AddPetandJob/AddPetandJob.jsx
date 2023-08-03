import React from "react";

function AddPetandJob({ handlePetModal, handleJobModal }) {
  return (
    <div className="top-20 right-5 flex gap-5 sticky">
      <button onClick={handlePetModal} className="text-[#407bff] py-2 rounded-md w-32 ">Add Pet</button>

      <button onClick={handleJobModal} className="text-[#407bff] py-2 rounded-md w-32 ">Add Job</button>
    </div>
  );
}

export default AddPetandJob;
