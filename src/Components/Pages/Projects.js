// eslint-disable-next-line
import AnimatedDiv from "../UI/AnimatedDiv";
// eslint-disable-next-line
import React, { useState } from "react";
import techImage from "../../assets/images/Tech_blog.png";
import jate from "../../assets/images/JATE.png";
import ProjectModal from "../UI/ProjectModal";
import ProjectImg from "../UI/ProjectImg";
import BooBooBooks from "../../assets/images/BooBooBooks.png";
import BetBud from '../../assets/images/BetBud.png';
import Ecommerce from '../../assets/images/Ecommerce.png'
import PGenerator from '../../assets/images/PGenerator.png';

const projectData = [
  {
    id: 1,
    title: "Tech Blog",
    description:
      "A tech blog built from scractch with express, handlebars, bootstrap and vanilla javascript, give it a try!",
    deployed: "https://shielded-dawn-21497-41f00b0f5c87.herokuapp.com/",
    gh: "https://github.com/jonathAnC0bosR/Tech_Blog",
    image: techImage,
    alt: "Tech Blog sample",
  },
  {
    id: 2,
    title: "JATE",
    description:
      "Just another text Editor! Jate is a text editor built in the web, it allows the user to install the application to use it without internet connection!.",
    deployed: "https://polar-castle-66412-3739f67f3142.herokuapp.com/",
    gh: "https://github.com/jonathAnC0bosR/PWA_Text_Editor",
    image: jate,
    alt: "Just Another Text Editor",
  },
  {
    id: 3,
    title: "BooBooBooks",
    description:
      "You want to read or buy a book but you do not know which one? No problem, just type the topic and an author an BooBooBooks will do the rest!",
    deployed: "https://jonathanc0bosr.github.io/BooBooBooks/",
    gh: "https://github.com/jonathAnC0bosR/BooBooBooks",
    image: BooBooBooks,
    alt: "BooBooBooks",
  },
  {
    id: 4,
    title: 'BetBud',
    description: 'Tired of all the bet applications where you only lost money? With BetBud you can make "friendly" with your friends, from a Hamburger to a gift card!',
    deployed: 'https://protected-dusk-26900-3b74a0f4eef3.herokuapp.com/',
    gh: 'https://github.com/nellyfabela/BetBud',
    image: BetBud,
    alt: 'BetBud'
  },
  {
    id: 5, 
    title: 'Ecommerce Back End',
    description: 'This is a proyect build with express and sequelize, It is the back end set from a Ecommerce, for a future development, the front end will be implemented!',
    deployed: 'https://drive.google.com/file/d/1m-dMezRZpyvuoV6KmwAwtdKezmzq5Dzr/view',
    gh: 'https://github.com/jonathAnC0bosR/Ecommerce_Back_End',
    image: Ecommerce,
    alt: 'Insomnia Ecommerce'
  },
  {
    id: 6, 
    title: 'Password generator', 
    description: 'Need a strong pasword but you ran out of ideas? Just click the link and you can have a very strong password with the password generator!',
    deployed: 'https://jonathanc0bosr.github.io/Password_Generator/',
    gh: 'https://github.com/jonathAnC0bosR/Password_Generator',
    image: PGenerator,
    alt:'Password Generator'
  }
];

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
      <div className="w-full lg:pl-56 sm:pl-32 bg-neutral-900 min-h-screen flex text-white">
        <AnimatedDiv styles="flex-1 m-10">
          <div className="p-2 border-b-2 border-slate-400">
            <h1 className="font-extrabold text-2xl">Projects</h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-8 sm:grid-cols-1">
            {projectData.map((project) => {
              return (
                <ProjectImg
                  image={project.image}
                  alt={project.alt}
                  onClick={() => {
                    handleClick(project);
                  }}
                />
              );
            })}
          </div>
          {isModalOpen && (
            <ProjectModal project={project} onClose={handleCloseModal} />
          )}
        </AnimatedDiv>
      </div>
  );
};

export default Projects;
