import React from "react";
import { useLoaderData } from "react-router-dom";
import Member from "../Member/Member";
import "./About.css";

const About = () => {
  const members = useLoaderData();
  return (
    <div>
      <h2>About Us</h2>
      <div className="members">
        {members.map((member) => (
          <Member key={member.id} member={member}></Member>
        ))}
      </div>
    </div>
  );
};

export default About;
