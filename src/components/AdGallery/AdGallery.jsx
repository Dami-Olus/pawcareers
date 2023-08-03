import React from 'react'

function AdGallery() {
  return (
    <div className="text-[#407bff] h-[500px] mt-20 mr-10 w-52 rounded-md bg-yellow-400 flex flex-col items-center sticky top-44 flex-[0.2]">
    <p className="h-20 w-20 rounded-full bg-green-200 flex justify-center items-center mt-20">
      Image of pet
    </p>
    <p className="mt-3">Pet name</p>
    <p className="mt-3">Breed</p>
    <p className="mt-3">More details</p>
  </div>
  )
}

export default AdGallery