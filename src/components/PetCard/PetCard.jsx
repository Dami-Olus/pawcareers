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
      <div className="text-white text-2xl">
        <p className="text-white font-bold text-2xl">{pets.name}</p>
        <p className=" text-2xl">{pets.breed}</p>
        <p className=" text-2xl underline">{pets.user.username}</p>
      </div>
    </div>
  );
}

export default PetCard;
