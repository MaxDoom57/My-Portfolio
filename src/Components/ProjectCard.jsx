import React from "react";

const ProjectCard = () => {
  return (
    <div class="block max-w-[18rem] rounded-lg bg-gray-200 ring-1 ring-slate-700 shadow-lg dark:ring-white dark:bg-slate-800 dark:shadow-white/5 text-surface shadow-secondary-1 mt-6">
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          class="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
          alt=""
        />
      </div>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p class="text-base">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
