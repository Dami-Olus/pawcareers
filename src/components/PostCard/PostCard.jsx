import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

function PostCard({ post, addLike, removeLike, user }) {
  const navigate = useNavigate();

  const likedIndex = post.likes.findIndex(
    (like) => like.username === user.username
  );

  console.log(post)

  const likeColor = likedIndex > -1 ? "text-red-500" : "text-grey-500";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id)
      : () => addLike(post._id);

  return (
    <div className="bg-[#407bff] text-white h-[700px]  flex flex-col justify-center mb-5 overflow-scroll">
      {/*date posted */}
      <div>today</div>
      {/*image */}
      <img src={post.image} alt="" className=" w-[700px]" />
      {/*caption */}
      <div className="bg-white text-[#407bff] p-2 mb-2 border-2 border-[#407bff] text-left h-[100px]">
        <p>{post.caption}</p>
      </div>
      <div className="flex justify-center">
        {user.username === post.user.username && (
          <button
            onClick={() => navigate(`posts/${post._id}/edit`)}
            className="bg-white text-[#407bff] w-fit p-1 rounded-md "
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex gap-5 justify-center items-center">
        {/*likes */}
        <HeartIcon
          className={`h-7 ${likeColor}`}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
        {/*comments */}
        <p>10 comments</p>
      </div>
    
    </div>
  );
}

export default PostCard;
