import React from "react";
import { useNavigate } from "react-router-dom";

function PetCard({ pets }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#407bff] h-[400px] w-[400px] flex flex-col  mb-5"
      onClick={()=>navigate(`/petsPage/${pets._id}`)}
    >
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
