import * as icon from "react-icons/si";

const stack = [
  {
    name: "Front End",
    items: [
      { icon: icon.SiHtml5, name: "HTML" },
      { icon: icon.SiCss3, name: "CSS" },
      { icon: icon.SiTailwindcss, name: "Tailwind" },
      { icon: icon.SiSass, name: "Sass" },
      { icon: icon.SiJavascript, name: "Javascript" },
      { icon: icon.SiTypescript, name: "Typescript" },
      { icon: icon.SiReact, name: "React" },
      { icon: icon.SiWordpress, name: "Wordpress" },
      { icon: icon.SiRedux, name: "Redux Toolkit" },
      { icon: icon.SiNextdotjs, name: "NextJS" },
    ],
  },
  {
    name: "Back End",
    items: [
      { icon: icon.SiNodedotjs, name: "NodeJS" },
      { icon: icon.SiExpress, name: "Express" },
      { icon: icon.SiMongodb, name: "MongoDB" },
      { icon: icon.SiMysql, name: "SQL" },
    ],
  },
];

const projects = [
  {
    name: "Chat-App",
    description:
      "A realtime chat app made with React, Express, Tailwind and Socket.IO. Connected with MongoDB to retrieve and save data.",
    github: "https://github.com/Marcos-Iorio/realtime-chat",
    livePage: "https://realtime-chat-marcos-iorio.vercel.app/",
  },
  {
    name: "Pokemon guess challenge",
    description:
      "Goncy's challenge about building the functionality of a pokemon guess challenge consuming an API, this was made using React, NES.css and Typescript.",
    github: "https://github.com/Marcos-Iorio/Pokemon-guess-challenge",
    livePage: "https://pokemon-guess-challenge.vercel.app/",
  },
  {
    name: "Front end ecommerce",
    description:
      "First project using React, made a app connected to a API in the backend that consumes data from an store and it's available throught the search bar.",
    github: "https://github.com/Marcos-Iorio/Ecommerce",
    livePage: null,
  },
  {
    name: "Intermediate API",
    description:
      "Intermediate API consuming data from another API and generating endpoints, made with Express and Typescript.",
    github: "https://github.com/Marcos-Iorio/api-intermedia",
    livePage: null,
  },
  {
    name: "Birthday Slack bot",
    description:
      "A Slack bot that send a message to a general channel saying who's birthday is, made with Express and Bolt API.",
    github: "https://github.com/Marcos-Iorio/slackbot",
    livePage: null,
  },
  {
    name: "This.Portfolio",
    description: "A portfolio designed and coded by... ME.",
    github: "https://github.com/Marcos-Iorio/portfolio",
    livePage: "https://portfolio-marcos-iorio.vercel.app/",
  },
  {
    name: "SDG Site.",
    description: "A entire site made it in Wordpress for a Ireland Client.",
    github: null,
    livePage: "https://sdg-hub.co/",
  },
  {
    name: "Notes App.",
    description: "A webapp to take notes that saves its on Local Storage.",
    github: "https://github.com/Marcos-Iorio/notes-app",
    livePage: "https://notes-app-marcos-iorio.vercel.app/",
  },
  {
    name: "Mercado Libre's Clone",
    description: "Made it with NextJS, Typescript, React-Redux, Tailwind.",
    github: "https://github.com/Marcos-Iorio/mercado-libre-clone",
    livePage: "https://mercado-libre-clone-marcos-iorio.vercel.app/",
  },
];

export { stack, projects };
