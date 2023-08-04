import React, { useState } from "react";

import * as jobApi from '../../../utils/jobApi'

function AddJob({ handleJobModalSkip }) {
  const [job, setJob] = useState({
    name: "",
    company: "",
    description: "",
    location: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("photoUrl", selectedFile);

    formData.append("name", job.name);
    formData.append("company", job.company);
    formData.append("description", job.description);
    formData.append("location", job.location);

    try {
      const job = await jobApi.create(formData);
      handleJobModalSkip();
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  }
  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }
  function handleSkip() {
    handleJobModalSkip();
  }
  return (
    <div className="text-[#407bff] h-screen w-screen  absolute top-0 left-0 bottom-0 flex justify-center items-center">
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
            placeholder="Job Title"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
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
            name="description"
            placeholder="Description"
            className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff] bg-transparent placeholder-[#407bff]"
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button className="text-white bg-[#407BFF] py-2 rounded-md w-32 ">
              Add Job
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

export default AddJob;
