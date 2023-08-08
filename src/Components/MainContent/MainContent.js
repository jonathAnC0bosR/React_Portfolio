import image from "../../assets/images/PFP.png";
import Avatar from "../UI/Avatar";
import Typed from "react-typed";

const MainContent = () => {
  return (
    <div className="w-3/4 bg-neutral-900 text-white h-screen flex">
      <div className="flex-1 flex items-center justify-center">
        <Avatar image={image} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start p-8">
        <h1 className="text-5xl font-extrabold mb-4">Jonathan Cobos</h1>
        <div className="text-3xl mt-2">
          <Typed
            strings={["Full Stack Developer.", "Renewable Systems Enginner."]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="mt-3">Web developer in progress based in México with an engineering background, eager to learn new things.</p>
      </div>
    </div>
  );
};

export default MainContent;
