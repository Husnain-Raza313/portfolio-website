"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Software Engineering from NUST</span>, I joined Devsinc as an{" "}
  <span className="font-medium">Associate Software Engineer</span>.{" "}
  My favorite part of programming is the problem-solving aspect I{" "}
  love the feeling of finally figuring out a solution to a complex problem. My core technologies include{" "}
  <span className="font-medium">
    React.js, Node.js, Express.js, Mongoose, Sequelize, MongoDB, and SQL Databases.
  </span>{" "}
  I am always eager to learn new technologies and I've been exploring new Javascript frameworks e.g. NEST.js. Currently, I am working as a{" "}
  <span className="font-medium">Software Engineer</span> at Devsinc Islamabad.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing, watching, and following football. I also have a passion for{" "}
  <span className="font-medium">learning new things</span>, and I'm currently exploring{" "}
  <span className="font-medium">astrophysics and psychology</span>.
</p>

    </motion.section>
  );
}
