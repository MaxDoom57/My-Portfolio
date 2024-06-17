import React from "react";

const PictureCard = (props) => {
  return (
    <div class="relative mt-5">
      <div class="block rounded-lg bg-white h-full text-white shadow-secondary-1 dark:bg-surface-dark hover:scale-[1.02] duration-200 hover:shadow-lg ring-slate-700 dark:ring-white">
        <img class="rounded-lg h-full " src={props.picUrl} alt="" />
        <div class="absolute flex inset-0 items-center justify-center ">
          <h5 class="mb-2 text-xl font-medium bg-slate-900 rounded p-[2px] px-[10px] shadow-slate-100">
            {props.title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
