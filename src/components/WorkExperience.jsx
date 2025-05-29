import React from "react";
import skill from "../assets/skills.png"; // Replace with your image path

const WorkExperience = () => {
  const experiences = [
    { title: "Edu Resource Management", description: "Developed AI-driven resource management platform with smart booking recognition." },
    { title: "Cross-Platform E-Commerce Web application", description: "Built secure, cross-platform e-commerce app for electronic devices." },
    { title: "Internship at Rikkeisoft", description: "Gained practical back-end and front-end development experience on real projects." },
    { title: "MultiShoes E-Commerce Web application", description: "Created an e-commerce website for selling shoes online." }
]

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