import { accenture, backend, BancoDeBogota, bimbo, cuida, carrent, cocacola, Cos, creator, css, docker, FCB, figma, fisiomax, git, halo, html, javascript, jobit, mapas, meta, mobile, mongodb, nodejs, onoda, reactjs, reddit, redux, shopify, starbucks, tailwind, tesla, threejs, tripguide, typescript, web } from "../assets";

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
  {
    title: "Wordpress Developer",
    icon: creator,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
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
    name: "Reddit Clone",
    description:
      "Project that I developed while following one of the courses on freeCodeCamp. Through this project, I gained significant knowledge about various technologies such as React, Chakra UI, and Firebase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reddit,
    source_code_link: "https://github.com/Alejandro2097/Reddit-Clone",
  },
  {
    name: "Halo infinite landing page",
    description:
      "The implementation of this project is in HTML5 CSS and vanilla javascript, whit vite we generate the build folder to render de website in githug pages. The website is responsive and respond to the dark mode or ligth mode in your computer you can see the live demo in the next link.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: halo,
    source_code_link: "https://github.com/Alejandro2097/HaloInfiniteWeb",
  },
  {
    name: "Maps with Angular",
    description:
      "Personal project using the MapBox Api where you can search places all over the world and look out for instruction jus like Google maps. Remember activate the location in your web browser to the live Demo.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: mapas,
    source_code_link: "https://github.com/Alejandro2097/mapasApp",
  },
  {
    name: "Coca-cola Forme Player",
    description:
      "This website was created to play movies licenced by sony pictures as a advertising campaign of Coca-cola.",
    tags: [
      {
        name: "Worpress",
        color: "blue-text-gradient",
      },
    ],
    image: cocacola,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cuida Tus Ojos",
    description:
      "E-commerce and blog for a eye drops brand in Colombia",
    tags: [
      {
        name: "Worpress",
        color: "blue-text-gradient",
      },
    ],
    image: cuida,
    source_code_link: "https://github.com/",
  },
  {
    name: "Resuelve con Bimbo",
    description:
      "CMS Of Resuelbe con bimbo where you can find recipes related with bimbo products.",
    tags: [
      {
        name: "Drupal",
        color: "blue-text-gradient",
      },
    ],
    image: bimbo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Onoda.com",
    description:
      "Landing page and Blog for a E-sports team in Colombian",
    tags: [
      {
        name: "Worpress",
        color: "blue-text-gradient",
      },
    ],
    image: onoda,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fisiomax",
    description:
      "Landing page to the product Fisiomax in Colombia that shows you where you can buy it",
    tags: [
      {
        name: "Worpress",
        color: "blue-text-gradient",
      },
    ],
    image: fisiomax,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
