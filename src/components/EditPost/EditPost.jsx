import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postApi from "../../utils/postApi";

function EditPost() {
  const [postToEdit, setPostToEdit] = useState();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const [selectedFile, setSelectedFile] = useState("");

  const postId = useParams();
  const navigate = useNavigate();

  async function getPostToEdit() {
    try {
      setLoading(true);
      const post = await postApi.getOne(postId.id);
      setPostToEdit(post);
      setLoading(false);
      console.log(post);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPostToEdit();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photoUrl", selectedFile);
    formData.append("caption", post.caption);
    try {
      const data = await postApi.edit(postId.id, formData);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  if (loading) return <div>Loading</div>;

  return (
    <div className="flex flex-col">
      {/*current image */}
      <div>
        <img src={postToEdit.posts.image} alt="" className="h-[400px] mb-5"/>
      </div>
      <div className="text-[#407bff] mb-5">
        <p>{postToEdit.posts.caption}</p>
      </div>

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
          className="outline-none border-2 border-[#407bff] rounded-md text-[#407bff]"
        ></textarea>
        <button className="text-white bg-[#407BFF] py-2 rounded-md w-32">
          Update
        </button>
      </form>
      {/*cancel button */}
    </div>
  );
}

export default EditPost;
