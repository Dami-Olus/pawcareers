import React from "react";
import PetCard from "../PetCard/PetCard";

function PetGallery({ pets }) {
  console.log(pets.pets);

  const petCards = pets.pets.map((pet) => {
    return <PetCard pets={pet} key={pet._id} />;
  });

  
  return (
    <div className="text-[#407bff]  mt-10 ml-10 mr-10  rounded-md  flex flex-col gap-5   p-8 overflow-auto w-[800px]">
      {petCards}
    </div>
  );
}

export default PetGallery;
