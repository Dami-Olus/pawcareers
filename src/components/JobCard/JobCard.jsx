import React from 'react'
import { useNavigate } from 'react-router-dom'

function JobCard({jobs}) {
  const navigate=useNavigate()
  return (
    <div className="bg-[#407bff] max-h-[500px] pb-2 w-[500px] flex flex-col  mb-5" onClick={()=>navigate(`/jobsPage/${jobs._id}`)}>
      <div className="text-white">
        <img src={jobs?.photoUrl} alt="" />
      </div>
      <div className="text-white">
        <p className='font-bold text-2xl'>{jobs.name}</p>
        <p className='text-xl'>{jobs.company}</p>
        <p>{jobs.description}</p>
      </div>
    </div>
  )
}

export default JobCard