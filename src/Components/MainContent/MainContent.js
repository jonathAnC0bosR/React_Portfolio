import image from "../../assets/images/PFP.png";
import Avatar from "../UI/Avatar";
import Typed from "react-typed";
import Footer from "../Footer/Footer";

const MainContent = () => {
  return (
    <div className="w-screen lg:pl-56 bg-neutral-900 text-white min-h-screen grid grid-cols-2  sm:pl-32">
      <div className="flex items-center justify-center">
        <Avatar image={image} />
      </div>
      <div className="flex flex-col justify-center items-start p-8">
        <h1 className="text-5xl font-extrabold mb-4">Jonathan Cobos</h1>
        <div className="text-3xl mt-2">
          <Typed
            strings={["Full Stack Developer.", "Renewable Systems Enginner."]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="mt-3">
          Web developer in progress based in México with an engineering
          background, eager to learn new things.
          <Footer />
        </p>

      </div>
    </div>
  );
};

export default MainContent;
