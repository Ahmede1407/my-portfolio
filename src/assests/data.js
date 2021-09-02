import React from "react";
import { FiLinkedin, FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import {
  BiMessageSquareDetail,
  BiBriefcase,
  BiHome,
  BiUserCircle,
} from "react-icons/bi";
import { FaSwatchbook, FaGraduationCap } from "react-icons/fa";
import { BsBraces, BsServer, BsGrid1X2, BsPencilSquare } from "react-icons/bs";

// ================= NAVBAR LINKS =================
export const links = [
  {
    id: 1,
    url: "/",
    icon: <BiHome className="nav-icon" />,
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    icon: <BiUserCircle className="nav-icon" />,
    text: "About",
  },
  {
    id: 3,
    url: "/skills",
    icon: <AiOutlineFileDone className="nav-icon" />,
    text: "Skills",
  },
  {
    id: 4,
    url: "/services",
    icon: <BiBriefcase className="nav-icon" />,
    text: "Services",
  },
  {
    id: 5,
    url: "/portfolio",
    icon: <RiGalleryLine className="nav-icon" />,
    text: "Portfolio",
  },
  {
    id: 6,
    url: "/contact",
    icon: <BiMessageSquareDetail className="nav-icon" />,
    text: "Contact Me",
  },
];

// ================= SOCIAL LINKS =================
export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/ahmede1407/",
    icon: <FiLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/Ahmede1407",
    icon: <FiGithub />,
  },
  {
    id: 3,
    url: "https://twitter.com/Ahmede1407",
    icon: <FiTwitter />,
  },
  //   {
  //     id: 4,
  //     url: "https://www.facebook.com/mido.elsaid.10",
  //     icon: <FiFacebook />,
  //   },
];

// ================= ABOUT INFO =================
export const about = {
  description:
    "Web developer, with extensive knowledge and much experience, working in web technologies and Ui / Ux design, delivering quality work.",
  info: [
    {
      id: 1,
      title: "99 +",
      name: {
        fName: "Years",
        lName: "experience",
      },
    },
    {
      id: 2,
      title: "99 +",
      name: {
        fName: "Completed",
        lName: "project",
      },
    },
    {
      id: 3,
      title: "99 +",
      name: {
        fName: "Companies",
        lName: "worked",
      },
    },
  ],
};

// ================= SKILLS =================
export const skills = [
  {
    id: 1,
    icon: <BsBraces className="skills-icon" />,
    title: "Front-End Developer",
    subtitle: "More than 4 years",
    data: [
      {
        id: 1,
        name: "HTML",
        percentage: 90,
      },
      {
        id: 2,
        name: "CSS",
        percentage: 80,
      },
      {
        id: 3,
        name: "JavaScript",
        percentage: 70,
      },
      {
        id: 4,
        name: "React.js",
        percentage: 85,
      },
    ],
  },
  {
    id: 2,
    icon: <BsServer className="skills-icon" />,
    title: "Back-End Developer",
    subtitle: "More than 2 years",
    data: [
      {
        id: 1,
        name: "PHP",
        percentage: 85,
      },
      {
        id: 2,
        name: "Laravel",
        percentage: 85,
      },
      {
        id: 3,
        name: "MySQL",
        percentage: 80,
      },
      {
        id: 4,
        name: "Firebas",
        percentage: 70,
      },
    ],
  },
  {
    id: 3,
    icon: <FaSwatchbook className="skills-icon" />,
    title: "Designer",
    subtitle: "More than 9 years",
    data: [
      {
        id: 1,
        name: "Figma",
        percentage: 90,
      },
      {
        id: 2,
        name: "Sketch",
        percentage: 85,
      },
      {
        id: 3,
        name: "Adobe XD",
        percentage: 80,
      },
      {
        id: 4,
        name: "Adobe Photoshop",
        percentage: 85,
      },
    ],
  },
];

// ================= Qualifications =================
export const qualifications = [
  {
    id: 1,
    icon: <FaGraduationCap className="qualification-icon" />,
    title: "Education",
    content: [
      {
        id: 1,
        contentTitle: "Computer Science",
        contentSubtitle: "Harvard University",
        contentStartDate: "1998",
        contentEndDate: "2003",
      },
      {
        id: 2,
        contentTitle: "Web Design",
        contentSubtitle: "USA - Institute",
        contentStartDate: "2004",
        contentEndDate: "2007",
      },
      {
        id: 3,
        contentTitle: "Web Developer",
        contentSubtitle: "Random place",
        contentStartDate: "2007",
        contentEndDate: "2015",
      },
      {
        id: 4,
        contentTitle: "Master UI / UX",
        contentSubtitle: "Random place",
        contentStartDate: "2016",
        contentEndDate: "2020",
      },
    ],
  },
  {
    id: 2,
    icon: <BiBriefcase className="qualification-icon" />,
    title: "Work",
    content: [
      {
        id: 1,
        contentTitle: "Software Engineer",
        contentSubtitle: "Google",
        contentStartDate: "2016",
        contentEndDate: "2018",
      },
      {
        id: 2,
        contentTitle: "Front-End Developer",
        contentSubtitle: "Upper",
        contentStartDate: "2019",
        contentEndDate: "2020",
      },
      {
        id: 3,
        contentTitle: "UI Designer",
        contentSubtitle: "Figma",
        contentStartDate: "2020",
        contentEndDate: "Now",
      },
    ],
  },
];

// ================= SERVICES =================
export const services = [
  {
    id: 1,
    icon: <BsGrid1X2 className="services-icon" />,
    firstTitle: "UI / UX",
    lastTitle: "Designer",
    content: [
      {
        id: 1,
        title: "I develop the user interface.",
      },
      {
        id: 2,
        title: "Web page development.",
      },
      {
        id: 3,
        title: "I create UX element interactions.",
      },
      {
        id: 4,
        title: "I position your company brand.",
      },
    ],
  },
  {
    id: 2,
    icon: <BsBraces className="services-icon" />,
    firstTitle: "Front-End",
    lastTitle: "Developer",
    content: [
      {
        id: 1,
        title: "content for service_2 ",
      },
      {
        id: 2,
        title: "content for service_2 .",
      },
      {
        id: 3,
        title: "content for service_2 ",
      },
      {
        id: 4,
        title: "content for service_2 ",
      },
    ],
  },
  {
    id: 3,
    icon: <BsPencilSquare className="services-icon" />,
    firstTitle: "Branding",
    lastTitle: "Designer",
    content: [
      {
        id: 1,
        title: "content for service_3.",
      },
      {
        id: 2,
        title: "content for service_3.",
      },
      {
        id: 3,
        title: "content for service_3.",
      },
      {
        id: 4,
        title: "content for service_3.",
      },
    ],
  },
];

// ================= PORTFOLIO PROJECTS =================
export const portfolioProjects = [
  {
    id: 1,
    category: "first category",
    title: "first project",
    img: require("./img/project_1/portfolio1.jpg").default,
    info: {
      technologiesUsed: ["html", "css", "javascript", "react.js"],
      description:
        "description for first category Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet blanditiis aut voluptate debitis at dolorem iste animi ut iure.",
      demo: "",
      infoImages: [
        { img: require("./img/project_1/img_2.jpg").default },
        { img: require("./img/project_1/img_3.jpg").default },
        { img: require("./img/project_1/img_4.jpg").default },
        { img: require("./img/project_1/img_5.jpg").default },
      ],
    },
  },
  {
    id: 2,
    category: "second category",
    title: "second project",
    img: require("./img/project_2/portfolio2.jpg").default,
    info: {
      technologiesUsed: ["html", "css", "javascript", "react.js"],
      description:
        "description for second category Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet blanditiis aut voluptate debitis at dolorem iste animi ut iure.",
      demo: "",
      infoImages: [
        { img: require("./img/project_2/img_2.jpg").default },
        { img: require("./img/project_2/img_3.jpg").default },
        { img: require("./img/project_2/img_4.jpg").default },
        { img: require("./img/project_2/img_5.jpg").default },
      ],
    },
  },
  {
    id: 3,
    category: "second category",
    title: "third project",
    img: require("./img/project_3/portfolio3.jpg").default,
    info: {
      technologiesUsed: ["html", "css", "javascript", "react.js"],
      description:
        "description for second category Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet blanditiis aut voluptate debitis at dolorem iste animi ut iure.",
      demo: "",
      infoImages: [
        { img: require("./img/project_3/img_2.jpg").default },
        { img: require("./img/project_3/img_3.jpg").default },
        { img: require("./img/project_3/img_4.jpg").default },
        { img: require("./img/project_3/img_5.jpg").default },
      ],
    },
  },
  {
    id: 4,
    category: "third category",
    title: "4th project",
    img: require("./img/project_4/portfolio4.jpg").default,
    info: {
      technologiesUsed: ["html", "css", "javascript", "react.js"],
      description:
        "description for third category Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet blanditiis aut voluptate debitis at dolorem iste animi ut iure.",
      demo: "",
      infoImages: [
        { img: require("./img/project_4/img_2.jpg").default },
        { img: require("./img/project_4/img_3.jpg").default },
        { img: require("./img/project_4/img_4.jpg").default },
        { img: require("./img/project_4/img_5.jpg").default },
      ],
    },
  },
  {
    id: 5,
    category: "third category",
    title: "5th project",
    img: require("./img/project_5/portfolio5.jpg").default,
    info: {
      technologiesUsed: ["html", "css", "javascript", "react.js"],
      description:
        "description for third category Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet blanditiis aut voluptate debitis at dolorem iste animi ut iure.",
      demo: "",
      infoImages: [
        { img: require("./img/project_5/img_2.jpg").default },
        { img: require("./img/project_5/img_3.jpg").default },
        { img: require("./img/project_5/img_4.jpg").default },
        { img: require("./img/project_5/img_5.jpg").default },
      ],
    },
  },
];
