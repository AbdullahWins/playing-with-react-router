import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, body, userId } = postDetails;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/member/${userId}`);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleNavigate}>Vist Author Profile</button>
    </div>
  );
};

export default PostDetails;
