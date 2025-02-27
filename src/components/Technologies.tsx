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
import { motion } from "framer-motion";

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
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={"my-20 text-center text-4xl"}
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={"flex flex-wrap items-center justify-center lg:gap-4 gap-6"}
      >
        {technologies.map((tech) => (
          <motion.div
            initial={{ y: -10 }}
            animate={{
              y: [10, -10],
            }}
            transition={{
              duration: Math.floor(Math.random() * 4) + 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            key={tech.id}
          >
            <div
              className={"rounded-2xl border-4 border-neutral-800 p-4 text-7xl"}
            >
              {tech.icon}
            </div>
            <p className={"text-center text-neutral-400 mt-4"}>{tech.id}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
