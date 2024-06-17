import React from "react";

const IconCard = (props) => {
  return (
    <div class="overflow-hidden bg-cover bg-no-repeat flex items-center justify-center mt-4 hover:scale-[1.03] duration-300 hover:shadow-lg dark:hover:shadow-white/5">
      <img src={props.imageUrl} class="w-32 rounded-full" alt="Avatar" />
    </div>
  );
};

export default IconCard;
