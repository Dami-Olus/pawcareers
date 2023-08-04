import React from 'react'
import Header from '../../components/Header/Header';
import JobDetails from '../../components/JobDetails/JobDetails';
import JobGallery from '../../components/JobGallery/JobGallery'

function JobsPage({jobs, loading}) {

  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );
  return (
    <div className='flex'>
      <Header />
       <JobGallery jobs={jobs} />
       <JobDetails />
    </div>
  )
}

export default JobsPage