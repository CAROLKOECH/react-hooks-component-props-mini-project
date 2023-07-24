import React from "react";

const About = ({ logo, aboutText }) => {
  const defaultLogo = "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={logo || defaultLogo} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
