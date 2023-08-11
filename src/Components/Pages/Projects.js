// eslint-disable-next-line
import AnimatedDiv from "../UI/AnimatedDiv";
// eslint-disable-next-line
import React, { useState } from "react";
import techImage from "../../assets/images/Tech_blog.png";
import jate from '../../assets/images/JATE.png'
import ProjectModal from "../UI/ProjectModal";

const Projects = () => {
  const [project, setProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (projectData) => {
    setProject(projectData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AnimatedDiv>
      <div className="w-full lg:pl-56 sm:pl-32 bg-neutral-900 min-h-screen flex text-white">
        <div className="flex-1 m-10">
          <div className="p-2 border-b-2 border-slate-400">
            <h1 className="font-extrabold text-2xl">Projects</h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mt-8 sm:grid-cols-1">
            <img
              src={techImage}
              className="hover:opacity-30 hover:cursor-pointer rounded-md"
              alt="Tech Blog"
              onClick={() => {
                handleClick({
                  title: "Tech Blog",
                  description:
                    "A tech blog built from scractch with express, handlebars, bootstrap and vanilla javascript.",
                  deployed:
                    "https://shielded-dawn-21497-41f00b0f5c87.herokuapp.com/",
                  gh: "https://github.com/jonathAnC0bosR/Tech_Blog",
                });
              }}
            />
            <img
              src={jate}
              className="hover:opacity-30 hover:cursor-pointer rounded-md"
              alt="Tech Blog"
              onClick={() => {
                handleClick({
                  title: "JATE",
                  description:
                    "Just another text Editor! Jate is a text editor built in the web, it allows the user to install the application to use it without internet connection!.",
                  deployed:
                  'https://polar-castle-66412-3739f67f3142.herokuapp.com/',
                  gh: "https://github.com/jonathAnC0bosR/PWA_Text_Editor",
                });
              }}
            />
            <p>hello</p>
            <p>hello</p>
    
          </div>
          {isModalOpen && (
            <ProjectModal project={project} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Projects;
