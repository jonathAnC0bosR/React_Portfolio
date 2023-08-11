import image from "../../assets/images/Xcaret.jpg";
import AnimatedDiv from "../UI/AnimatedDiv";

const AboutMe = () => {
  return (
    <div className="w-full lg:pl-56 bg-neutral-900 min-h-screen flex sm:pl-32">
      <AnimatedDiv styles="flex-1 m-10">
        <h1 className=" text-white text-2xl font-extrabold mb-8 ">About Me</h1>
        <img src={image} alt="Avatar_image" className="w-1/2 mx-auto" />
        <div className="mb-4 p-2 border-b-2 border-slate-400">
          <h1 className="text-lg  text-white">Jonatan Cobos</h1>
          <p className="text-slate-400">Web Developer</p>
        </div>
        <div id="about-me-text">
          <p className="text-slate-400">
            Hello my name is Jonathan Abraham Cobos, web developer currently
            learning React and Next.js. I first started programming and Web
            Development with Javascript next I want to learn Python to make
            awesome IA applications. I am currently learning Next.js and
            mastering React as much as I can! Also I am learning Javascripts
            Data Structures! I have an engineer background, I studied as a
            bachelor Renewables Systems Engineer in my local town college. I am
            eager to learn new things and prove my knowledge and myself.
          </p>
        </div>
        <div className="mb-4 p-2 border-b-2 border-slate-400">
          <h1 className="text-lg text-white">Skills</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-400">
          <p>Javascript</p>
          <p>Express</p>
          <p>HTMl5</p>
          <p>CSS</p>
          <p>React</p>
          <p>MongoDB</p>
          <p>Tailwind</p>
          <p>Bootstrap</p>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default AboutMe;
