import React from "react";

function JobDetails({ job }) {
  return (
    <div className="text-[#407bff] flex flex-col items-center justify-center mt-20">
      <div>
      <img src={job?.job.photoUrl} alt="" />
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
