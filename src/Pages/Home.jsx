import image from "../Images/2.jpg";

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-stone-300 to-slate-300 dark:from-slate-900 dark:to-neutral-900">
        <div className="home grid grid-cols-2 gap-4 w-[80%] ml-52 pt-20">
          <div className="p-5 home-details justify-items-center">
            <p className="pb-10 text-right">
              <h1 className="mb-6 text-6xl font-bold text-end leading-14 text-stone-700 dark:text-gray-200">
                <span className="pr-14">Sandaruwan</span> Rathnayaka
              </h1>
              <p className="mb-8 text-right leading-14">
                ( Software <span className="break-words" />
                Developer )
              </p>
              I'm a Software Engineering student at the University of Sri
              Jayewardenepura. Passionate about programming and software
              development, I see each line of code as a chance to create
              something impactful. Join me on this coding journey, where every
              keystroke propels us towards excellence!
            </p>
            <button
              type="button"
              class=" bg-gray-200 ring-1 ring-slate-700 shadow-xl hover:bg-gray-500 hover:text-white hover:ring-1 hover:ring-white dark:ring-white dark:bg-slate-800 focus:outline-none  ml-[315px] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            >
              <span className="pr-4">Download CV</span>
              <i class="fa-solid fa-download "></i>
            </button>
          </div>

          <div className=" home-image">
            <img src={image} alt="img" className="rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//from-stone-300 to-slate-300
