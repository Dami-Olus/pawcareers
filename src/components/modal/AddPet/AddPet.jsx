function AddPet({ handlePetModalSkip }) {
  function handleSubmit() {}
  function handleChange() {}
  function handleFileInput() {}
  function handleSkip() {
    handlePetModalSkip();
  }
  return (
    <div className="text-[#407bff] h-screen w-screen  absolute top-0 left-0 flex justify-center items-center">
      <div className="h-screen w-screen absolute z-10 bg-[#407bff] opacity-10 top-0"></div>
      <div className="z-20">
        <form
          action=""
          className="flex flex-col gap-5 border-[1px] p-5 rounded-lg border-[#407bff]"
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
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent"
            onChange={handleChange}
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent"
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent"
            onChange={handleChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent"
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
