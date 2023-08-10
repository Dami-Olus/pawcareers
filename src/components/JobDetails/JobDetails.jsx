import React from "react";

function JobDetails({ job }) {
  return (
    <div className="text-[#407bff] flex flex-col items-start mt-28">
      <div>
      <img src={job?.job.photoUrl} alt="" className="h-[400px]" />
      </div>
     
      <p className="text-2xl font-bold">{job?.job.name}</p>
      <p className="text-2xl">{job?.job.company}</p>
      <p>{job?.job.location}</p>
      <p>{job?.job.description}</p>
      <p className="underline">{job?.job.user.username}</p>
    </div>
  );
}

export default JobDetails;
