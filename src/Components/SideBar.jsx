import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="fixed z-50 flex w-16 h-screen overflow-hidden">
        <div className="absolute z-50 mt-12 cursor-pointer ">
          <ul class="text-2xl flex flex-col gap-5 cursor-pointer text-center mt-36 ml-3 p-1 rounded-lg ring-1 ring-slate-700 shadow-lg dark:ring-white dark:bg-slate-800">
            <NavLink to={"/"}>
              <button
                type="button"
                data-twe-toggle="tooltip"
                data-twe-placement="right"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Home"
              >
                <li class="fa-solid fa-house"></li>
              </button>
            </NavLink>

            <NavLink to={"/education"}>
              <button
                type="button"
                data-twe-toggle="tooltip"
                data-twe-placement="right"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Education"
              >
                <li class="fa-solid fa-book "></li>
              </button>
            </NavLink>

            <NavLink to={"/projects"}>
              <button
                type="button"
                data-twe-toggle="tooltip"
                data-twe-placement="right"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Projects"
              >
                <li class="fa-solid fa-laptop-file "></li>
              </button>
            </NavLink>

            <NavLink to={"/skills"}>
              <button
                type="button"
                data-twe-toggle="tooltip"
                data-twe-placement="right"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Skills"
              >
                <li class="fa-solid fa-bars-progress "></li>
              </button>
            </NavLink>

            <NavLink to={"/contact"}>
              <button
                type="button"
                data-twe-toggle="tooltip"
                data-twe-placement="right"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                title="Contact me"
              >
                <li class="fa-solid fa-headset"></li>
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
