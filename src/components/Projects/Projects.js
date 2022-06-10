import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import './Projects.css';
import DetailModal from "./DetailModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState(null)
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <div className="projects-container">
      <div
        className="max-w-[1200px] mx-auto lg:pl-10 scroll-mt-20"
        id="projects"
      >
        <h1 className="text-3xl mb-4 text-primary font-semibold">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <SingleProject key={project.id} setModalData={setModalData} project={project}></SingleProject>
          ))}
        </div>
      </div>
    </div>
    {
      modalData && <DetailModal modalData={modalData}></DetailModal>
    }
    </>
  );
};

export default Projects;
