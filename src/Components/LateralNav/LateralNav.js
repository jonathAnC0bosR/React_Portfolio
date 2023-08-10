import { SiAboutdotme } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

const LateralNav = () => {
  return (
    <div className="w-1/6 bg-neutral-950 text-white flex flex-col justify-center items-center min-h-screen fixed">
      <div>
        <Link to={`/`}>
          <p className=" flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
            <SiAboutdotme className="mr-2" />
            Home
          </p>
        </Link>

        <Link to={`/aboutMe`}>
          <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
            <SiAboutdotme className="mr-2" />
            About
          </p>
        </Link>
        <Link to={"/projects"}>
          <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
            <FaReact className="mr-2" />
            Projects
          </p>
        </Link>
        <Link to={"/contactMe"}>
          <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
            <RiContactsBookLine className="mr-2" />
            Contact
          </p>
        </Link>
        <p className="flex text-xl items-center transition ease-out delay-150 hover:opacity-75 hover:scale-110 ">
          <ImProfile className="mr-2" />
          Resume
        </p>
      </div>
    </div>
  );
};

export default LateralNav;
