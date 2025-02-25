import { Experience } from "../types/Experience.ts";

export const HERO_CONTENT = `I'm a passionate Frontend Developer dedicated to building modern, high-performance web applications. With 3 years expertise in React, TypeScript, and Redux, I specialize in crafting intuitive user interfaces and scalable solutions that enhance user experiences. I thrive on solving real-world challenges, whether it's optimizing ad platforms, streamlining workflows, or developing innovative tools like the Chrome extensions. Constantly expanding my knowledge, I blend hands-on experience with my IT studies to stay at the forefront of web development. I'm always eager to take on new challenges and collaborate on projects that push the boundaries of technology.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented JavaScript Developer with a strong focus on building modern, high-performance web applications. Specializing in React, TypeScript, and Redux, I enjoy creating intuitive and scalable user interfaces that enhance digital experiences. My journey in web development started with a curiosity for technology, which has since evolved into a career where I continuously refine my skills by working on real-world projects. From optimizing ad platforms to developing tools that streamline workflows, I thrive on solving complex problems and delivering impactful solutions. Currently pursuing a degree in Information Technology, I am committed to learning and staying up-to-date with the latest advancements in the field. Beyond coding, I enjoy exploring new technologies, collaborating on innovative projects, and pushing the boundaries of what's possible in web development.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "Jan 2023 - Present",
    role: "JavaScript Developer",
    company: "GumGum",
    description: `I develop and implement modern web applications using React, TypeScript, and Redux, ensuring high performance and scalability of the code. I created a Chrome extension for ad testing that accelerated team processes by nearly 50%. I maintain and enhance the frontend of advertising platforms by delivering new features and improving the performance of existing solutions.`,
    technologies: ["TypeScript", "React", "Redux", "Chrome Extensions"],
  },
  {
    year: "Jun 2021 - Jan 2023",
    role: "Junior JavaScript Developer",
    company: "GumGum",
    description: `As a Junior JavaScript Developer, I was responsible for adapting products to meet customer needs, providing technical support, and resolving issues as they arose. I collaborated with a multilingual team to successfully achieve project objectives.`,
    technologies: ["JavaScript", "QA Engineering", "Git"],
  },
];

export const PROJECTS = [
  {
    title: `E-commerce Platform "Zielony Koszyk"`,
    image: "/assets/zielony-koszyk.png",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "React",
      "TailwindCSS",
      "NestJS",
      "TypeORM",
      "PostgresSQL",
      "Docker",
    ],
  },
  {
    title: "Admin dashboard",
    image: "/assets/admin-board.png",
    description:
      "An application for managing users, monitoring data, and visualizing analytics with real-time updates and controls.",
    technologies: ["React", "JavaScript", "TailwindCSS", "Syncfusion"],
    hostedLink: "https://amokrzycki.github.io/admin_board/",
  },
  {
    title: "Portfolio Website",
    image: "/assets/portfolio.png",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Motion Framer"],
  },
  {
    title: `Budget Tracker "Portfelik"`,
    image: "/assets/portfelik.png",
    description:
      "A Budget Tracker app helps users manage income and expenses, track spending, and visualize financial data for better budgeting and savings.",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    hostedLink: "https://amokrzycki.github.io/portfelik-app/",
  },
];

export const CONTACT = {
  address: "Rzeszów, Poland",
  phoneNo: "+48 662 023 712",
  email: "amokrzycki@icloud.com",
};
