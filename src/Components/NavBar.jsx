import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import logo from "../Images/mylogo.png";
import Themebtn from "./Themebtn";

const NavBar = () => {
  return (
    <div>
      <nav class="flex relative w-full gap-20 z-[999] bg-stone-300 ring-1 ring-slate-700 pb-1 dark:bg-slate-800 dark:ring-white">
        <div>
          <SideBar />
        </div>

        <div className="z-50 pt-2 ml-50">
          <Link to={"/"}>
            <img
              src={logo}
              alt="myLogo"
              className="w-40 h-12 hover:scale-[1.08] duration-300"
            />
          </Link>
        </div>
        <div className="absolute flex gap-6 mt-2 text-2xl justify-items-end right-40 ">
          <a href="www.facebook.com">
            <i class="fa-brands fa-linkedin hover:scale-[1.03] duration-100 hover:text-neutral-600 dark:text-white"></i>
          </a>
          <a href="www.facebook.com">
            <i class="fa-brands fa-github hover:scale-[1.03] duration-100 hover:text-neutral-600 dark:text-white"></i>
          </a>
          <a href="www.facebook.com">
            <i class="fa-brands fa-facebook hover:scale-[1.03] duration-100 hover:text-neutral-600 dark:text-white"></i>
          </a>
          <a href="www.facebook.com">
            <i class="fa-brands fa-square-instagram hover:scale-[1.03] duration-100 hover:text-neutral-600 dark:text-white"></i>
          </a>
        </div>
        <Themebtn />
      </nav>
    </div>
  );
};

export default NavBar;

//className={`${darkMode && "dark"}`}
