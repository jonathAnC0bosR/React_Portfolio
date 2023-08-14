import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="text-white bg-neutral-900 sm:pl-32 lg:pl-56 min-h-screen w-screen ">
      <div className="m-10">
        <div className="border-b-2 my-6 border-slate-400">
          <h1 className="text-xl">Resume</h1>
        </div>
        <div>
          <p>
            Dowload my{" "}
            <span className="hover:text-blue-900 hover:font-bold hover:italic">
              <Link
                to={
                  "https://drive.google.com/file/d/1IhJiG60uWbv9xWLU7PSJistKAV7BI7Hx/view?usp=sharing"
                }
              >
                resume
              </Link>
            </span>{" "}
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
      </div>
    </div>
  );
};

export default Resume;
