import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import * as postApi from "../../utils/postApi";
import * as likeApi from "../../utils/likeApi";

function PostGallery({ user}) {
  // const [post, setPost] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [posts, setPosts] = useState();
  const [postsForm, setPostsForm] = useState();
  const [loading, setLoading] = useState(true);

  console.log(posts)

  const [error, setError] = useState()


  async function addLike(postId) {
    try {
      const response = await likeApi.create(postId);
      // to update state we are just going to refetch the posts, because they will the updated
      // likes
      getPosts(); // this funciton updates state
    } catch (err) {
      setError("error creating like");
      console.log(err, " error");
    }
  }

  async function removeLike(likeId) {
    try {
      const response = await likeApi.removeLike(likeId);
      // to update state we are just going to refetch the posts, because they will the updated
      // likes
      getPosts(); // this funciton updates state
    } catch (err) {
      setError("error creating like");
      console.log(err, " error");
    }
  }

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
    return <PostCard key={post._id} post={post} addLike={addLike} removeLike={removeLike} user={user} />;
  });

  // if (loading) return <div></div>;

  return (
    <div className="text-[#407bff]  mt-20 ml-10 mr-10  rounded-md  flex flex-col items-center p-8 flex-1 ">
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
