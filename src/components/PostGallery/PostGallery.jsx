import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import * as postApi from "../../utils/postApi";

function PostGallery() {
  // const [post, setPost] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [posts, setPosts] = useState();
  const [postsForm, setPostsForm] = useState();
  const [loading, setLoading] = useState(true);

  console.log(posts)

  async function getPosts() {
    try {
      setLoading(true);
      const posts = await postApi.getAll();
      setPosts(posts.posts);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photoUrl", selectedFile);
    formData.append("caption", postsForm.caption);
    try {
      const data = await postApi.create(formData);
      setPosts([data.data, ...posts]);
    } catch (e) {
      console.log(e);
    }
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setPostsForm({
      ...postsForm,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts?.map((post) => {
    return <PostCard key={post._id} post={post} />;
  });

  if (loading) return <div></div>;

  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-col items-center p-8 flex-[0.6]">
      <div>
        <form
          action=""
          className="flex flex-col gap-2 mb-5"
          onSubmit={handleSubmit}
        >
          <input type="file" name="photoUrl" onChange={handleFileInput} />
          <textarea
            onChange={handleChange}
            name="caption"
            id=""
            cols="30"
            rows="2"
            placeholder="what's on your mind"
            className="outline-none border-2 border-[#407bff] rounded-md"
          ></textarea>
          <button className="text-white bg-[#407BFF] py-2 rounded-md w-32">
            Post
          </button>
        </form>
      </div>
      {/* Postcard */}
      {postCards}
    </div>
  );
}

export default PostGallery;
