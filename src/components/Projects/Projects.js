import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto lg:pl-10 scroll-mt-20" id="projects">
        <h1 className="text-center text-5xl mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => <SingleProject key={project.id} project={project}></SingleProject>)}
      </div>
    </div>
  );
};

export default Projects;
