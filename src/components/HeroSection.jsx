import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png"; // Replace with your image path

const HeroSection = () => {
  const [majors] = useState([
    ".Net Developer",
    "Frontend Developer",
    "Backend Developer",
    "Project Manager",
    "Team Leader",
  ]);
  const [currentMajorIndex, setCurrentMajorIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // Speed of typing (ms per character)
  const deleteSpeed = 50; // Speed of deleting (ms per character)
  const pauseDuration = 2000; // Pause duration between cycles (ms)

  useEffect(() => {
    let timer;

    const typeOrDelete = () => {
      const currentMajor = majors[currentMajorIndex];
      const fullTextLength = currentMajor.length;

      if (isDeleting) {
        // Deleting effect
        if (charIndex > 0) {
          setDisplayText(currentMajor.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timer = setTimeout(typeOrDelete, deleteSpeed);
        } else {
          // Finished deleting, move to next major
          setIsDeleting(false);
          setCurrentMajorIndex((prevIndex) => (prevIndex + 1) % majors.length);
          timer = setTimeout(typeOrDelete, typingSpeed);
        }
      } else {
        // Typing effect
        if (charIndex <= fullTextLength) {
          setDisplayText(currentMajor.substring(0, charIndex));
          setCharIndex(charIndex + 1);
          timer = setTimeout(typeOrDelete, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    timer = setTimeout(typeOrDelete, typingSpeed);

    // Cleanup
    return () => clearTimeout(timer);
  }, [currentMajorIndex, isDeleting, charIndex, majors]);

  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
        <div className="hero-text">
          <p className="intro">
            Hello! I Am <br />
          </p>

          <h1 className="highlight">Nguyen Chi Hau</h1>
          <h3>
            And I'm a
            <span className="highlight"> {displayText}</span>
            <span className="cursor">|</span> {/* Cursor effect */}
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;