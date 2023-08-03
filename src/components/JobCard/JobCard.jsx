import React from 'react'

function JobCard({jobs}) {
  return (
    <div className="bg-[#407bff] h-[400px] w-[400px] flex flex-col  mb-5">
      <div className="text-white">
        <img src={jobs?.photoUrl} alt="" />
      </div>
      <div className="text-white">
        <p>{jobs.name}</p>
        <p>{jobs.company}</p>
        <p>{jobs.description}</p>
      </div>
    </div>
  )
}

export default JobCard