import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";

function PostGallery() {
  const [post, setPost ] = useState({})
  const [selectedFile, setSelectedFile] = useState()

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append()
  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
setPost({
  ...post,
  [e.target.name]: e.target.value
})
  }
  
  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-col items-center p-8 flex-[0.6]">
      <div>
        <form action="" className="flex flex-col gap-2 mb-5">
          <input type="file" />
          <textarea name="caption" id="" cols="30" rows="2" placeholder="what's on your mind" className="outline-none border-2 border-[#407bff] rounded-md"></textarea>
          <button className="text-white bg-[#407BFF] py-2 rounded-md w-32 ">Post</button>
        </form>
      </div>
      {/* Postcard */}
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default PostGallery;
