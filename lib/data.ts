import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import mooreImg from "@/public/moore-project.png";
import biomarkImg from "@/public/biomark-project.png";
import lazazaImg from "@/public/lazaza-project.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Updated experiencesData
export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Devsinc",
    description:
      "Actively Participated in SDLC, Feature Implementation, Optimizing Existing Systems and conducting Code Reviews and Tech Sessions",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Associate Software Engineer",
    location: "Devsinc",
    description:
      "Hands-on Development on various projects related to Healthcare, Ecommerce and Advertisement etc, utilizing skills in full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Frontend Intern",
    location: "PxBull Limited, Rawalpindi",
    description:
      "Gained valuable experience in front-end development and best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
] as const;

// Updated projectsData
export const projectsData = [
  {
    title: "Moore Exotics",
    description:
      "An online pets marketplace. Users can buy, sell, and adopt exotic animals through detailed listings. An admin dashboard is available for efficient management of the platform. The marketplace ensures a responsive design for optimal user experience on various devices.",
    tags: ["Express.js", "Redux.js", "Docker", "AWS", "React", "MUI", "CI/CD", "Payment Gateways", "SSO"],
    imageUrl: mooreImg,
    link: "https://app.mooreexotics.com/",
  },
  {
    title: "Biomark",
    description:
      "A healthcare project which had multiple platforms: A Lab Platform, Doctor's Platform, Patient's App, Rider's App etc. It was all about facilitating healthcare providers/clinics etc in collecting, delivering and testing patient's specimens.",
    tags: ["React.js", "Redux", "Formik", "Node.js", "Express.js", "Sequelize", "Postgresql"],
    imageUrl: biomarkImg,
    link: "https://www.biomarking.com/",
  },
  {
    title: "Lazaza",
    description:
      "It is an instant ad builder platform designed to help small businesses create, target, and purchase ads quickly and efficiently. It aims to save time and increase revenue by providing a cost-effective, self-service advertising solution that allows users to make ads in just five minutes",
    tags: ["React.js", "Redux", "Formik", "Django", "Azure", "CI/CD", "LLMs", "Charts.js", "Recharts"],
    imageUrl: lazazaImg,
    link: "https://lazaza.ai/",
  },
] as const;

// Updated skillsData
export const skillsData = [
  "TypeScript",
  "React.js",
  "Nest.js",
  "Next.js",
  "Redux",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Mongoose",
  "MongoDB",
  "Sequelize",
  "Ruby on Rails",
  "SQL",
  "NoSQL",
  "HTML",
  "CSS",
  "Tailwind",
  "GraphQL",
  "REST API",
  "Python",
  "Docker",
  "AWS",
  "MUI",
  "CI/CD",
  "Payment Gateways",
  "SSO",
  "Git",
  "Github",
] as const;
