import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/typescript.png";
import SQL from "../assets/sql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      id="skills-wrapper"
      className="w-full h-screen bg-[#0A192F] text-gray-300"
    >
      <div
        id="skill-container"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div>
          <p className="text-4xl  inline border-b-4 border-pink-600 font-bold">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I&apos;ve worked with
          </p>
        </div>
        <div
          id="skills-list"
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML Icon" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="HTML Icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML Icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="HTML Icon" />
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
