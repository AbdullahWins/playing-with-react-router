import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h2>Title: {title} </h2>
      <p> {body} </p>
      <Link to={`/posts/${id}`}>
        <button id="full-post-btn">Read Full Post</button>
      </Link>
    </div>
  );
};

export default Post;
