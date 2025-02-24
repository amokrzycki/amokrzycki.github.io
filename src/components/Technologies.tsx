import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiDocker,
  SiNginx,
} from "react-icons/si";

import { ReactNode } from "react";
import { FcLinux } from "react-icons/fc";

type Technology = {
  id: string;
  icon: ReactNode;
};

const technologies: Technology[] = [
  { id: "TypeScript", icon: <SiTypescript color={"#3178c6"} /> },
  { id: "JavaScript", icon: <SiJavascript className={"text-yellow-300"} /> },
  { id: "React", icon: <SiReact className={"text-cyan-400"} /> },
  { id: "Redux", icon: <SiRedux color={"#764abc"} /> },
  { id: "Tailwind CSS", icon: <SiTailwindcss className={"text-sky-400"} /> },
  {
    id: "NestJS",
    icon: <SiNestjs color={"#ea2845"} />,
  },
  { id: "MySQL", icon: <SiMysql /> },
  { id: "Docker", icon: <SiDocker color={"#1D63ED"} /> },
  { id: "Linux", icon: <FcLinux /> },
  { id: "Nginx", icon: <SiNginx color={"#009438"} /> },
];

function Technologies() {
  return (
    <div className={"border-b border-neutral-800 pb-24"}>
      <h1 className={"my-20 text-center text-4xl"}>Technologies</h1>
      <div className={"flex flex-wrap items-center justify-center gap-4"}>
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className={"rounded-2xl border-4 border-neutral-800 p-4 text-7xl"}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
