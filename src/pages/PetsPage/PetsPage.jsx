import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";
import PetDetails from "../../components/PetDetails/PetDetails";
import PetGallery from "../../components/PetGallery/PetGallery";
import * as petApi from "../../utils/petApi";

function PetsPage({ pets, loading }) {
  const [pet, setPet] = useState();

  const petId = useParams();

  async function getPet() {
    try {
      const data = await petApi.getOne(petId.id);
      console.log(data);
      setPet(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPet();
  }, [petId.id]);

  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );
  return (
    <div className="flex h-screen mt-20">
      {/* <Header /> */}
      <div className="flex overflow-y-hidden">
        <PetGallery pets={pets} />
        <PetDetails pet={pet} />
      </div>
      <div className="ml-64">
        <AdGallery />
      </div>
    </div>
  );
}

export default PetsPage;
