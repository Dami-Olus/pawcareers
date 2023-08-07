import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import JobDetails from "../../components/JobDetails/JobDetails";
import JobGallery from "../../components/JobGallery/JobGallery";
import * as jobApi from "../../utils/jobApi";

function JobsPage({ jobs, loading }) {
  const [job, setJob] = useState();
  

  

  const jobId = useParams();
  


  async function getJob() {
   
    try {
      const data = await jobApi.getOne(jobId.id);
     setJob(data)
     
    } catch (e) {
      console.log(e);
    }
  }

 useEffect(()=> {
getJob()
 },[jobId.id])

  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );
  return (
    <div className="flex">
      {/* <Header /> */}
      <JobGallery jobs={jobs} />
      <JobDetails job={job} />
    </div>
  );
}

export default JobsPage;
