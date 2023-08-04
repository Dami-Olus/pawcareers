import React from "react";
import PetCard from "../PetCard/PetCard";

function PetGallery({ pets }) {
  console.log(pets.pets);

  const petCards = pets.pets.map((pet) => {
    return <PetCard pets={pet} key={pet._id} />;
  });

  
  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-wrap gap-5 justify-center items-center flex-[0.6] p-8">
      {petCards}
    </div>
  );
}

export default PetGallery;
