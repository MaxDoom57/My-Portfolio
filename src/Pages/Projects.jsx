import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <div className="h-full bg-gradient-to-br from-stone-300 to-slate-300 dark:from-slate-900 dark:to-neutral-900">
      <div className="home grid grid-cols-3 gap-3 w-[80%] ml-40 pt-20">
        <h1 className="col-span-3 text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Projects
        </h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
