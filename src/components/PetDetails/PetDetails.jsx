import React from "react";

function PetDetails({ pet }) {
  console.log(pet);
  return (
    <div className="text-[#407bff] flex flex-col items-start justify-start mt-20">
      <div>
        <img src={pet?.pet.photoUrl} alt="" className="w-[400px]" />
      </div>

      <div>
      <p className="font-bold text-2xl">{pet?.pet.name}</p>
      <p className="text-2xl">{pet?.pet.breed}</p>
      <p>{pet?.pet.location}</p>
      <p>{pet?.pet.age}</p>
      <p>{pet?.pet.skill}</p>

      <p>{pet?.pet.user.username}</p>
      </div>
<button className="bg-[#407bff] text-white w-20 py-2 rounded-md mt-5">Hire</button>
    
    </div>
  );
}

export default PetDetails;
