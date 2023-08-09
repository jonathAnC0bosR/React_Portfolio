import { SiAboutdotme } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {RiContactsBookLine} from 'react-icons/ri';
import {ImProfile} from 'react-icons/im'

const LateralNav = () => {
  return (
    <div className="w-1/4 bg-neutral-950 text-white flex flex-col justify-center items-center h-screen">
      <div className="text-center m-5">
        <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
          <SiAboutdotme className="mr-2" />
          About
        </p>
        <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
          <FaReact className="mr-2" />
          Projects
        </p>
        <p className="flex text-xl items-center mb-4 transition ease-out delay-150 hover:opacity-75 hover:scale-110">
          <RiContactsBookLine className="mr-2" />
          Contact
        </p>
        <p className="flex text-xl items-center transition ease-out delay-150 hover:opacity-75 hover:scale-110 ">
          <ImProfile className="mr-2" />
          Resume
        </p>
      </div>
    </div>
  );
};

export default LateralNav;
