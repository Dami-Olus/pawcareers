import React from "react";

function JobDetails({ job }) {
  return (
    <div className="text-[#407bff] flex flex-col items-center mt-20">
      <div>
      <img src={job?.job.photoUrl} alt="" className="h-[400px]" />
      </div>
     
      <p>{job?.job.name}</p>
      <p>{job?.job.company}</p>
      <p>{job?.job.location}</p>
      <p>{job?.job.description}</p>
      <p>{job?.job.user.username}</p>
    </div>
  );
}

export default JobDetails;
