
export function getBreeds(){
  return fetch('https://dog.ceo/api/breeds/list/all', {
    method: 'GET',
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Something went wrong in create Pet')
  }) 
}