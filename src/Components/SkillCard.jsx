import React from "react";

const SkillCard = () => {
  return (
    <div class="block max-w-[18rem]rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-6">
      <div class="overflow-hidden bg-cover bg-no-repeat flex items-center justify-center mt-4 ">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          class="w-32 rounded-full "
          alt="Avatar"
        />
      </div>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight text-center">
          Card title
        </h5>
        <p class="text-base">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
