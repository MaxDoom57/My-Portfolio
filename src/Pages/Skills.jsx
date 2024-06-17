import React from "react";
import PictureCard from "../Components/PictureCard";
import IconCard from "../Components/IconCard";

const Skills = () => {
  return (
    //Main skills area-----------------------------

    <div className="h-full bg-gradient-to-br from-stone-300 to-slate-300 dark:from-slate-900 dark:to-neutral-900">
      <div className="home grid grid-cols-3 gap-4 w-[80%] ml-40 pt-20 ">
        <h1 className="col-span-3 text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Skills
        </h1>
        <PictureCard
          title="Front-end development"
          picUrl="https://cdn.pixabay.com/photo/2024/04/19/19/47/ai-generated-8707111_640.png"
        />
        <PictureCard
          title="Back-end development"
          picUrl="https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_640.jpg"
        />
        <PictureCard
          title="Graphic Design"
          picUrl="https://cdn.pixabay.com/photo/2017/09/02/15/38/image-editing-2707653_1280.jpg"
        />
      </div>

      {/* programming Languages area-------------------- */}

      <div className="home grid grid-cols-9 gap-4 w-[80%] ml-40 pt-10  items-center justify-center">
        <h1 className="col-span-9 text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Programming Languages
        </h1>
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13441&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=40670&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=55251&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=PXTY4q2Sq2lG&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=Pd2x9GWu9ovX&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13406&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=21278&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=20909&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=vgMoO3QkEnKf&format=png" />
      </div>

      <div className="home grid grid-cols-9 gap-4 w-[80%] ml-40 pt-10  items-center justify-center mt-5 pb-5">
        <h1 className="col-span-9 text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Frameworks
        </h1>
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=123603&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=54087&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=4PiNHtUJVbLs&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=pCvIfmctRaY8&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=jD-fJzVguBmw&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=baihjTL3IBX9&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=9AHxUOg7E9q2&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=EzPCiQUqWWEa&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=WNoJgbzDr3i2&format=png" />
      </div>

      <div className="home grid grid-cols-9 gap-4 w-[80%] ml-40 pt-10  items-center justify-center mt-5 pb-5">
        <h1 className="col-span-9 text-4xl font-bold text-center text-stone-700 dark:text-gray-200">
          Design Tools
        </h1>
      </div>
      <div className="flex items-center justify-center ml-[120px] pb-20">
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13677&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13631&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=19313&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13675&format=png" />
      </div>
    </div>
  );
};

export default Skills;

//icon urls
/*
js- https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-64.png
css- https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-css-style-develop-layout-language-64.png
react https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-64.png
java- https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-java-software-develop-command-language-64.png
html- https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-64.png
github- https://cdn2.iconfinder.com/data/icons/designer-skills/128/github-repository-svn-manage-files-contribute-branch-64.png

lightrooom- https://cdn1.iconfinder.com/data/icons/designer-skills/128/lightroom-64.png
ps- https://cdn1.iconfinder.com/data/icons/designer-skills/128/photoshop-64.png
Ai- https://cdn1.iconfinder.com/data/icons/designer-skills/128/illustrator-64.png
inkdesign- https://cdn1.iconfinder.com/data/icons/designer-skills/128/indesign-64.png


        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13677&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13631&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=19313&format=png" />
        <IconCard imageUrl="https://img.icons8.com/?size=256&id=13675&format=png" />
*/
