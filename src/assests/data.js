import React from "react";
import { FiLinkedin, FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { BiMessageSquareDetail, BiBriefcase, BiHome } from "react-icons/bi";
import { FaSwatchbook } from "react-icons/fa";
import { BsBraces, BsServer } from "react-icons/bs";

// ================= NAVBAR LINKS =================
export const links = [
  {
    id: 1,
    url: "/home",
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
