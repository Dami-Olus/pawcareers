import React from "react";
import { Image } from "semantic-ui-react";

function ProfileWidget({ pet, user }) {
  return (
    <div className="text-white h-[500px] mt-20  rounded-md bg-[#407bff] flex sticky top-44 p-10 ml-20 w-[400px] overflow-y-scroll gap-2">
     
     
     {pet.pets.map((pet) => {
      if(pet.user.username === user.username){
      return  <img src={pet.photoUrl} alt="" className="h-24 rounded-full" />}
     })}
    

    </div>
  );
}

export default ProfileWidget;
