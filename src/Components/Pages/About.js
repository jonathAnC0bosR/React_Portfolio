import image from "../../assets/images/Xcaret.jpg";

const AboutMe = () => {
  return (
    <div className="w-auto lg:pl-56 bg-neutral-900 min-h-screen flex sm:pl-32">
      <div className="flex-1 m-10">
        <h1 className=" text-white text-2xl font-extrabold mb-8 ">About Me</h1>
        <img src={image} alt="Avatar_image" className="w-1/2 mx-auto" />
        <div className="mb-4 p-2 border-b-2 border-slate-400">
          <h1 className="text-lg  text-white">Jonatan Cobos</h1>
          <p className="text-slate-400">Web Developer</p>
        </div>
        <div>
          <p className="text-slate-400">
            Hello my name is Jonathan Abraham Cobos, web developer currently learning React and Next.js. I first started programming and Web Development with Javascript next I want to learn Python to make awesome IA applications.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
