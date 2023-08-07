import React, { useEffect, useState } from "react";
import AddPetandJob from "../../components/AddPetandJob/AddPetandJob";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";

import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";
import * as likesApi from "../../utils/likeApi";


function HomePage({ handleJobModal, handlePetModal, loading, pets, posts, modalOpen }) {


  async function addLike(postId) {
    try {
      const response = await likesApi.create(postId);
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
      const response = await likesApi.removeLike(likeId);
      // to update state we are just going to refetch the posts, because they will the updated
      // likes
      getPosts(); // this funciton updates state
    } catch (err) {
      setError("error creating like");
      console.log(err, " error");
    }
  }

  if (loading)
    return (
      <div>
        <h1> Loading</h1>
      </div>
    );

  return (
    <div className={`h-screen  mt-10 ${modalOpen?'overflow-hidden':'overflow-auto'} `}>
      {/* <Header /> */}
      <AddPetandJob
        handleJobModal={handleJobModal}
        handlePetModal={handlePetModal}
      />
      <div className="flex justify-evenly">
        <ProfileWidget pet={pets} />
        <PostGallery posts={posts} loading={loading} addLike={addLike}
            removeLike={removeLike} />
        <AdGallery />
      </div>
    </div>
  );
}

export default HomePage;
