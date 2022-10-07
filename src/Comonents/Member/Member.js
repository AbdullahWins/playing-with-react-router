import React from "react";
import { Link } from "react-router-dom";
import "./Member.css";

const Member = ({ member }) => {
  const { id, name, email, username } = member;
  return (
    <div className="member">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>
        <small>
          username:<Link to={`/member/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default Member;
