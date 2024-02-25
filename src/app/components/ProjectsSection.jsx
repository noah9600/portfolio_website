"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

const projectsData = [
  {
    id: 1,
    title: "Renting Website",
    description: "Next js, Typescript",
    image: "/images/projects/image1.png",
    tag: ["All", "Web"],
    gitUrl: "https://renting-app-three.vercel.app/",
    previewUrl: "https://renting-app-three.vercel.app/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const filteredProjects = projectsData.filter((project) =>
project.tag.includes(tag)
);

const cardVariants = {
initial: { y: 50, opacity: 0 },
animate: { y: 0, opacity: 1 },
};

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3, // Number of slides to show at a time
slidesToScroll: 1, // Number of slides to scroll on next/prev
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    },
  },
],
};

const handleTagChange = (newTag) => {
setTag(newTag);
};

return (
<section id="projects">
  <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
    My Projects
  </h2>
  <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
    
  </div>
  <Slider {...settings}>
    {filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      </motion.div>
    ))}
  </Slider>
</section>
);
};

export default ProjectsSection;
