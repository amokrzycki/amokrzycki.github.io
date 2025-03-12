import { Experience } from "../types/Experience.ts";

export const HERO_CONTENT = `I am a motivated and detail-oriented JavaScript Developer with almost 4 years of experience in building personal/commercial projects using React, TypeScript, Redux, and Node.js. Throughout my career, I have contributed to key projects such as developing internal tools that significantly streamlined workflows — most notably, a Chrome extension that accelerated ad testing processes by nearly 50%. My responsibilities have included implementing scalable front-end solutions, maintaining and evolving advertising platforms, and building back-office features in close collaboration with cross-functional teams. I take pride in writing clean, maintainable code and ensuring seamless user experiences through responsive design and performance optimization. In my daily work, I follow Agile methodologies (Scrum), and I adapt quickly to new challenges and technologies, always eager to grow and bring tangible value to the product and team.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented JavaScript Developer with a strong focus on building modern, high-performance web applications. Specializing in React, TypeScript, and Redux, I enjoy creating intuitive and scalable user interfaces that enhance digital experiences. My journey in web development started with a curiosity for technology, which has since evolved into a career where I continuously refine my skills by working on real-world projects. From optimizing ad platforms to developing tools that streamline workflows, I thrive on solving complex problems and delivering impactful solutions. Currently pursuing a degree in Information Technology, I am committed to learning and staying up-to-date with the latest advancements in the field. Beyond coding, I enjoy exploring new technologies, collaborating on innovative projects, and pushing the boundaries of what's possible in web development.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "Jan 2023 - Present",
    role: "JavaScript Developer",
    company: "GumGum/JustPremium (Hybrid)",
    description: [
      "Developed and maintained high-performance advertising web applications using React, TypeScript, Redux, supporting large-scale operations in the EMEA region.",
      "Built and shipped a Chrome extension that accelerated ad testing processes by ~50%, reducing manual QA time and enabling faster campaign launches.",
      "Collaborated in a cross-functional team (PM, QA, Designers, Backend Engineers) of ~10 people, contributing to both product decisions and technical direction.",
      "Implemented and improved reusable UI components integrated with a shared design system, focusing on accessibility and consistency. Familiar with version control (Git).",
      "Integrated APIs from internal microservices and external platforms to support dynamic ad content rendering and analytics tracking.",
      "Enhanced front-end application performance through lazy loading, memorization, and code-splitting techniques.",
      "Participated in regular code reviews, ensuring adherence to clean code principles and maintainability across the codebase.",
      "Supported sprint planning and estimations within Agile/Scrum workflows, with a strong focus on delivery and team velocity.",
      "Leveraged development tools such as VS Code and IntelliJ WebStorm for efficient coding.",
      "Collaborated effectively with global teams to achieve project goals.",
    ],
    technologies: ["TypeScript", "React", "Redux", "Chrome Extensions"],
  },
  {
    year: "Jun 2021 - Jan 2023",
    role: "Junior JavaScript Developer",
    company: "GumGum/JustPremium (Hybrid)",
    description: [
      "Delivered client-specific advertising customizations by adapting existing products to regional and business needs.",
      "Supported the front-end development of internal ad platforms using JavaScript, HTML, CSS, and templating engines.",
      "Collaborated closely with international teams across time zones to resolve integration issues and ensure timely campaign delivery.",
      "Researched and implemented front-end improvements that reduced page load time and increased ad rendering accuracy.",
      "Gained hands-on experience working with Git, internal CMS tools, and continuous integration pipelines.",
      "Maintained internal documentation and knowledge bases to support team onboarding and reduce knowledge silos.",
    ],
    technologies: ["JavaScript", "QA Engineering", "Git"],
  },
  {
    year: "2021 - 2025",
    role: "Engineer’s Degree in Computer Science",
    company: "University of Information Technology and Management in Rzeszow",
    description: [
      "Faculty of Internet and Mobile Technologies.",
      "Engineering Thesis: A web application for managing a store with fruit and vegetable delivery.",
    ],
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: `E-commerce Platform "Zielony Koszyk" ("Green Basket")`,
    image: "/assets/zielony-koszyk.png",
    description:
      "A full-stack web application developed as part of my engineering thesis, focused on browsing, ordering, and managing fruit and vegetable deliveries",
    technologies: [
      "React",
      "Redux",
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
    image: "/assets/portfolio-new.png",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Motion Framer"],
  },
  {
    title: `Budget Tracker "Portfelik" ("Wallet")`,
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
