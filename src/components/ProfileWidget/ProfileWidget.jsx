import React from "react";
import { Image } from "semantic-ui-react";

function ProfileWidget({ pet }) {
  console.log(pet);
  return (
    <div className="text-white h-[500px] mt-20 ml-10 rounded-md bg-[#407bff] flex flex-col items-center sticky top-44 p-10">

      <div className="rounded-full">
        <img
          src={pet.pets[1]?.photoUrl}
          alt=""
          className="object-cover h-16 rounded-full"
        />
      </div>
     

      <p className="mt-3">Pet name</p>
      <p className="mt-3">Breed</p>
      <p className="mt-3">More details</p>
    </div>
  );
}

export default ProfileWidget;
