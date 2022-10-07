import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  const { title, body } = post;
  console.log(post);
  return (
    <div className="post">
      <h2>Title: {title} </h2>
      <p> {body} </p>
    </div>
  );
};

export default Post;
