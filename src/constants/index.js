import { l } from "maath/dist/misc-19a3ec46.esm";
import {
    react,
    unity,
    javapython,
    micro,
    landsat,
    css,
    sql,
    c,
    csharp,
    java,
    python,
    github,
    html,
    javascript,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    dal,
    doublemine,
    json,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: react,
    },
    {
      title: "Game Developer",
      icon: unity,
    },
    {
      title: "Java and Python Developer",
      icon: javapython,
    },
    {
      title: "Microsoft Suite Proficient",
      icon: micro,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Dalhousie University",
      icon: dal,
      iconBg: "#ffffff",
      date: "Sept 2024 - Present",
      points: [
        "Led a section of 40 students to provide a comprehensive and collaborative learning experience for the university’s Discrete Math for CS course",
        "Assisted in helping improve students’ understanding of the course’s topics, improving attendance by 60%",
        "Provided formative feedback that allowed students to reflect on previous topics, leading to an average grade increase of 40% on future assessments",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Double Mine",
      description:
        "I developed 2D Minesweeper game in Unity that follows a different rule-set than the original game. I programmed a comprehensive UI and interactive controls to chose game difficulty and reset the game",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
      ],
      image: doublemine,
      link: "https://github.com/Silvio-Tremblay/Double-Mine",
      demo: "",
    },
    {
      name: "Landsat Reflectance",
      description:
        "I participated in the 2024 Nasa SpaceApps Hackathon to deploy a webpage displaying current Landsat information and reflectance metrics. I collaborated in a group of three students to program the API to obtain the Landsat information and develop the webpage within the 24 hour time lim",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: landsat,
      link: "https://github.com/Silvio-Tremblay/Landsat-Reflectance-Project",
      demo: "",
    },
    {
      name: "JSON Front-End Compiler",
      description:
        "I developed the Front-End of a JSON compiler in Python for a Theory of Computer Science course. I utilized course knowledge to program a scanner and parser to handle lexical, syntactic, and lexical errors of the provided JSON grammar. I provided output in the form of an abstract syntax tree with an error log which would display the type and location of any detected errors",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: json,
      link: "https://github.com/Silvio-Tremblay/JSON-Front-End-Compiler",
      demo: "",
    },
  ];
  
  export { services, technologies, experiences, projects };