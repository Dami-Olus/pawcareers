import React from "react";
import JobCard from "../JobCard/JobCard";

function JobGallery({jobs}) {
console.log(jobs)
  const jobCards = jobs.jobs.map((job) => {
    return <JobCard key={job._id} jobs={job}/>
  })

  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-col items-center flex-[0.6] p-8 overflow-auto w-[800px]">
      {/* Jobcard */}
      {jobCards}
    </div>
  );
}

export default JobGallery;
