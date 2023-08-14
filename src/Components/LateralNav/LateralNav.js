import { SiAboutdotme } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";

const LateralNav = () => {
  return (
    <>
      <div className="w-1/6 bg-emerald-950 text-white flex flex-col justify-center items-center min-h-screen fixed">
        <FaChessKnight size={"4em"} />
        <div className="mt-20">
          <Link to={`/`}>
            <p className=" flex text-xl items-center mb-10 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
              <BiHome className="mr-2" />
              Home
            </p>
          </Link>

          <Link to={`/aboutMe`}>
            <p className="flex text-xl items-center mb-10 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
              <SiAboutdotme className="mr-2" />
              About
            </p>
          </Link>
          <Link to={"/projects"}>
            <p className="flex text-xl items-center mb-10 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
              <FaReact className="mr-2" />
              Projects
            </p>
          </Link>
          <Link to={"/contactMe"}>
            <p className="flex text-xl items-center mb-10 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
              <RiContactsBookLine className="mr-2" />
              Contact
            </p>
          </Link>
          <Link to={"/resume"}>
            <p className="flex text-xl items-center transition ease-out delay-150 hover:opacity-75 hover:scale-110 ">
              <ImProfile className="mr-2" />
              Resume
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LateralNav;
