import React from "react";
import { useLoaderData } from "react-router-dom";

const MemberDetails = () => {
  const member = useLoaderData();
  const { name, username, email } = member;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Username: {username}</p>
      <p>Mail: {email}</p>
    </div>
  );
};

export default MemberDetails;
