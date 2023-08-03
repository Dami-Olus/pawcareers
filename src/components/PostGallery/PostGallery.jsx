import React from "react";

function PostGallery() {
  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-col items-center flex-[0.6] p-8">
      <div>
        <form action="" className="flex flex-col gap-2 mb-5">
          <input type="file" />
          <textarea name="postContent" id="" cols="30" rows="2" placeholder="what's on your mind" className="outline-none border-2 border-[#407bff] rounded-md"></textarea>
          <button className="text-white bg-[#407BFF] py-2 rounded-md w-32 ">Post</button>
        </form>
      </div>
      {/* Postcard */}
      <div className="bg-green-200 h-[400px] w-[400px] flex flex-col justify-center mb-5">
        <p>Post content</p>
      </div>

      <div className="bg-green-200 h-[400px] w-[400px] flex flex-col justify-center mb-5">
        <p>Post content</p>
      </div>

      <div className="bg-green-200 h-[400px] w-[400px] flex flex-col justify-center mb-5">
        <p>Post content</p>
      </div>
    </div>
  );
}

export default PostGallery;
