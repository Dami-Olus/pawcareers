import tokenService from "./tokenService";

const BASE_URL = '/api/jobs/'

export function create(data){
  return fetch(BASE_URL, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Something went wrong in create Job')
  }) 
  }
  
  export function getAll(){
    return fetch(BASE_URL, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + tokenService.getToken()
      }
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Something went wrong in getAll jobs')
    })
  }

  export function getOne(jobId){
    
    return fetch(`${BASE_URL}${jobId}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + tokenService.getToken()
      }
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Something went wrong in getAll jobs')
    })
  }