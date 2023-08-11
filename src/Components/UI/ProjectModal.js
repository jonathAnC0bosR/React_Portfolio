import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-neutral-700 opacity-50 z-20"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = ({ project }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-110 bg-neutral-900 rounded-lg shadow-lg z-30">
      <div className="p-6">
        <h2 className="mb-4 text-lg text-center">{project.title}</h2>
        <p>{project.description}</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="mx-auto">
            <Link to={`${project.deployed}`}>
              <HiExternalLink size={"4em"} />
            </Link>
          </div>
          <div className="mx-auto">
            <Link to={`${project.gh}`}>
              <BsGithub size={"4em"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay project={props.project}>{props.children}</ModalOverlay>
    </>
  );
};

export default ProjectModal;
