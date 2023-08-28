import tokenService from "./tokenService";

const BASE_URL = '/api/posts/'

export function create(data){
return fetch(BASE_URL, {
  method: 'POST',
  body: data,
  headers: {
    Authorization: "Bearer " + tokenService.getToken()
  }
}).then(res => {
  if(res.ok) return res.json();
  throw new Error('Something went wrong in create Post')
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
    throw new Error('Something went wrong in create Post')
  }) 
  }

  export function getOne(postId){
    return fetch(`${BASE_URL}${postId}`, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + tokenService.getToken()
      }
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Something went wrong in create Post')
    }) 
    }

    export function edit(postId,data){
      return fetch(`${BASE_URL}${postId}`, {
        method: 'PUT',
        body: data,
        headers: {
          Authorization: "Bearer " + tokenService.getToken()
        }
      }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Something went wrong in create Post')
      }) 
      }