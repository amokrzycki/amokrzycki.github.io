import WeatherApp from "../assets/projects/weather-app.png";
import AdminBoard from "../assets/projects/admin-board.png";
import OpenAI from "../assets/projects/openai.png";
import CalculatorApp from "../assets/projects/calculator-app.jpg";
import Portfolio from "../assets/projects/portfolio.png";
import Manager from "../assets/projects/manager.png";
import { Card } from "./index";

const Work = () => {
  return (
    <div
      name="work"
      id="work-wrapper"
      className="w-full md:h-screen bg-[#0A192F] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div
          id="card-wrapper"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#0A192F]"
        >
          <Card
            bgImage={WeatherApp}
            title="Weather App"
            codeLink="https://github.com/Sajson/weather-app"
            demoLink="https://sajson.github.io/weather-app/"
          />
          <Card
            bgImage={AdminBoard}
            title="Admin Board"
            codeLink="https://github.com/Sajson/admin-board"
            demoLink="https://sajson.github.io/admin-board/"
          />
          <Card
            bgImage={OpenAI}
            title="OpenAI Page"
            codeLink="https://github.com/Sajson/responsive_website"
            demoLink="https://sajson.github.io/responsive_website/"
          />
          <Card
            bgImage={CalculatorApp}
            title="Calculator App"
            codeLink="https://github.com/Sajson/calculator-app"
            demoLink="https://sajson.github.io/calculator-app/"
          />
          <Card
            bgImage={Manager}
            title="Project Manager"
            codeLink="https://github.com/Sajson/project-manager"
            demoLink=""
          />
          <Card
            bgImage={Portfolio}
            title="My portfolio"
            codeLink="https://github.com/Sajson/project-manager"
            demoLink="https://sajson.github.io/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
