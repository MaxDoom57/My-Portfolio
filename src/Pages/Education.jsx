import React from "react";
import LongCard from "../Components/LongCard";

const Education = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-stone-300 to-slate-300 dark:from-slate-900 dark:to-neutral-900">
      <div className="home grid grid-cols-1 gap-4 w-[80%] ml-40 pt-20">
        <h1 className="text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Education
        </h1>
        <LongCard
          title="Bachelor of Information and Communication Technology Honours(BICT)/Software Engineering"
          description="lorem.........."
        />
        <LongCard
          title="Bachelor of Information and Communication Technology Honours(BICT)/Software Engineering"
          description="lorem.........."
        />
      </div>
    </div>
  );
};

export default Education;
