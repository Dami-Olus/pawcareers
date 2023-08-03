import React from "react";

function PetCard({ pets }) {
  return (
    <div className="bg-[#407bff] h-[400px] w-[400px] flex flex-col  mb-5">
      <div className="text-white">
        <img src={pets?.photoUrl} alt="" />
      </div>
      <div className="text-white">
        <p>{pets.name}</p>
        <p>{pets.breed}</p>
      </div>
    </div>
  );
}

export default PetCard;
