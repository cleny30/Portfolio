import React from "react";
import skill from "../assets/Skills.png"; // Replace with your image path

const WorkExperience = () => {
  const experiences = [
    { title: "Edu Resource Management", description: "Developed a resource management platform with AI features for booking recognization" },
    { title: "Cross-Platform E-Commerce Web application", description: "Built an app for electronic devices with secure payment integration." },
    { title: "Internship at RikkeiSoft", description: "Enhanced back-end development skills through real-world projects." },
    { title: "MultiShoes E-Commerce Web application", description: "Created responsive websites for small businesses and startups." },
  ];

  return (
    <section id="work" className="work">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="work-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="work-card">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="work-skills">
          <img src={skill} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;