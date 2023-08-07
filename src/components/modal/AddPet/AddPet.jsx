import { useEffect, useState } from "react";
import * as petApi from "../../../utils/petApi";
import * as dogInfoApi from "../../../utils/dogInfoApi";
// import { options } from "../../../../routes/api/likes";

function AddPet({ handlePetModalSkip }) {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: null,
    location: "",
    skills: "",
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [breeds, setBreeds] = useState([]);


  async function dogBreeds() {
    try {
      const breeds = await dogInfoApi.getBreeds();

      const data = breeds.message;
      // console.log(data)
      setBreeds(data);
      
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    dogBreeds();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("photoUrl", selectedFile);
    formData.append("name", pet.name);
    formData.append("breed", pet.breed);
    formData.append("age", pet.age);
    formData.append("location", pet.location);
    formData.append("skills", pet.skills);

    try {
      const pet = await petApi.create(formData);
      handlePetModalSkip();
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  }
  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }
  function handleSkip() {
    handlePetModalSkip();
  }
  return (
    <div className="text-[#407bff] h-screen w-screen  absolute top-0 left-0 flex justify-center items-center">
      <div className="h-screen w-screen absolute z-10 bg-[#407bff] opacity-80 top-0"></div>
      <div className="z-20">
        <form
          action=""
          className="flex flex-col gap-5 p-5 rounded-lg bg-white"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            placeholder="upload image"
            name="photoUrl"
            onChange={handleFileInput}
          />
          <input
            type="text"
            name="name"
            placeholder="Pet name"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />
          <select name="breed" id="" onChange={handleChange}>
          {Object.keys(breeds).map((key, index) => {
        return (
          <option key={index} value={key}>
            <h2>
              {key}
            </h2>

            <hr />
          </option>
        );
      })}
          </select>
          {/* <input
            type="text"
            name="breed"
            placeholder="Breed"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          /> */}
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button className="text-white bg-[#407BFF] py-2 rounded-md w-32 ">
              Add Pet
            </button>
            <button
              className="text-[#407bff] py-2 rounded-md w-32 "
              onClick={handleSkip}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPet;
