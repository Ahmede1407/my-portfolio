import React from "react";
import { FiLinkedin, FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { BiMessageSquareDetail, BiBriefcase, BiHome } from "react-icons/bi";

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
