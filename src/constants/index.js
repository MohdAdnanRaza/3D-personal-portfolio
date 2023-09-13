import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  udemy,
  cetpa,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ec1,
  sh,
  jobit,
  tripguide,
  threejs,
  thread,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: " Java Backend Developer",
    icon: backend,
  },
  {
    title: "Video Creator",
    icon: creator,
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
    name: "java",
    icon: java,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Java Backend Developer",
    company_name: "Cetpa Infotech Pvt Ltd",
    icon: cetpa,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using jdbc,servlets,jsp and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " Full Stack Web Developer",
    company_name: "udemy",
    icon: udemy,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Contributed to MERN stack web app development MongoDB, Express, React, NodeJS.",
      "Enhanced proficiency in JavaScript, HTML, and CSS",
      "Built end-to-end data-driven websites using the mentioned technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Development",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Developing and maintaining Mobile applications using XML,Java,Firebase and other related technologies.",
      "Throughout this App Development course, I cover a massive number of tools and technologies, including:XML, Java",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Fresh Basket Hub",
    description:
      "Designed a fully functional and SaaS-based food delivery website and Achieved an interactive shopping cart functionality, allowing users to add, update, and remove items before checkout",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "grey-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ec1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Study hub",
    description:
      "Developed a fully functional website using HTML,CSS,BootStrap,JavaScript·It is webpage that is used to provide study content based on the curriculum of B. Tech.",
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
        name: "BootStrap",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "grey-text-gradient",
      },
    ],
    image: sh,
    code_link: "https://github.com/MohdAdnanRaza/Study-Material",
  },
  {
    name: "ThreadVerse",
    description:
      "This web-app offers users the ability to post and share text, images, and videos, as well as interact with other users' posts through replies, reposts, and likes",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "grey-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: thread,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
