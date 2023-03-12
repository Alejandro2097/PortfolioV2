import { accenture, backend, BancoDeBogota, bimbo, carrent, cocacola, Cos, creator, css, docker, FCB, figma, fisiomax, git, halo, html, javascript, jobit, mapas, meta, mobile, mongodb, nodejs, onoda, reactjs, reddit, redux, shopify, starbucks, tailwind, tesla, threejs, tripguide, typescript, web } from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "software engineer",
    company_name: "Banco de bogotà",
    icon: BancoDeBogota,
    iconBg: "#383E56",
    date: "oct. 2021- at the moment",
    points: [
      "Front-end development with Angular 12+",
      "Back-end Typescript/NodeJS development ",
      "IaC Terraform for AWS",
      "API Rest design",

    ],
  },
  {
    title: "front-end developer",
    company_name: "Accenture ",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: " may. 2021- sep 2021",
    points: [
      "Angular and Java academy participation.",
      "Learning about Springboot.",
      "Learning about DevOps and docker.",
    ],
  },
  {
    title: "Web developer",
    company_name: "Fcb & Fire",
    icon: FCB,
    iconBg: "#E6DEDD",
    date: "aug. 2019 - apr 2021",
    points: [
      "Development and implementation of custom web applications.",
      "Database administration in MySQL.",
      "Creation of web pages in WordPress.",
      "Content management in WordPress.",
      "Web application development with HTML, CSS, JavaScript and PHP"
    ],
  },
  {
    title: "Adviser CGO",
    company_name: "COLOMBIAN OUTSORCING SOLUTIONS (CLARO)",
    icon: Cos,
    iconBg: "#383E56",
    date: " jun 2018 - aug  2019",
    points: [
      "Management of technical personnel.",
      "Management of support to technical personnel in the field.",
      "customer service.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
