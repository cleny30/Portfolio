import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import ExampleProjects from "./components/ExampleProjects";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/footer.css"
import "./styles/header.css"
import "./styles/hero.css"
import "./styles/work.css"
import "./styles/about.css"
import "./styles/exampleProjects.css";

const App = () => {
  return (
    <div>
      <Header />
        <HeroSection />
        <About />
        <WorkExperience />
        <ExampleProjects/>
        <Footer />
    </div>
  );
};

export default App;