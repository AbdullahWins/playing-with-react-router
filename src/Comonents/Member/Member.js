import React from "react";
import "./Member.css";

const Member = ({ member }) => {
  const { name, email, username } = member;
  return (
    <div className="member">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>
        <small>username:{username}</small>
      </p>
    </div>
  );
};

export default Member;
