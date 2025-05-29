import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="about-text">
          I am a <span className="highlight">Bachelor of Software Engineering</span> student at FPT University, Can Tho, with a deep passion for programming and technology.
        </p>
        <p className="about-text">
          Proficient in <span className="highlight">C#, Java, and SQL</span>, I have successfully led projects such as:
        </p>
        <ul className="about-list">
          <li>An AI-integrated educational resource management website.</li>
          <li>A cross-platform e-commerce application for electronic devices with secure payment features.</li>
        </ul>
        <p className="about-text">
          During my internship at <span className="highlight">RikkeiSoft</span>, I honed my back-end development skills, gaining valuable experience in real-world projects.
        </p>
        <p className="about-text">
          I aim to contribute <span className="highlight">creative thinking</span> and technical expertise to innovative tech projects, driving impactful solutions in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default About;