import React from "react";

const LongCard = (props) => {
  return (
    <div class="block rounded-lg w-max m-5 bg-gray-100 ring-1 ring-slate-700 shadow-xl text-surface shadow-secondary-1 dark:bg-surface-dark dark:bg-slate-800 dark:ring-white">
      <div class="border-b-2 border-neutral-300 px-6 py-3 dark:border-neutral-400">
        <h1 className="text-xl font-semibold">{props.title}</h1>
      </div>
      <div class="p-6">
        <div>
          <p class="text-xl">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
