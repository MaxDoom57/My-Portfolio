import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ac205f0-c41d-48a8-9e96-75c8073acac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-stone-300 to-slate-300 dark:from-slate-900 dark:to-neutral-900">
      <div className="flex items-center justify-center w-full min-h-screen md:ml-16 md:mr-16 sm:ml-8">
        <div className="flex flex-col w-full max-w-4xl p-8 mt-8 space-y-6 rounded-lg shadow-lg dark:shadow-white/25 bg-neutral-400 ring-1 ring-slate-700 dark:bg-slate-800 dark:ring-white md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-wide text-zinc-900 dark:text-white">
                Contact me
              </h1>
              <p className="pt-2 text-sm text-zinc-900 dark:text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto error iste debitis recusandae ut voluptate aliquid
                consequatur molestias illum, ratione ab hic libero, laudantium
                neque omnis consequuntur quidem deserunt nostrum?
              </p>
            </div>

            <div className="flex flex-col pt-5 space-y-4">
              <div className="inline-flex items-center space-x-2 text-zinc-900 dark:text-white/90">
                <i class="fa-solid fa-phone"></i>
                <span /> 077 294 8708
              </div>
              <div className="inline-flex items-center space-x-2 text-zinc-900 dark:text-white/90">
                <i class="fa-solid fa-envelope"></i>
                <span /> Sandaruwanr57@gmail.com
              </div>
              <div className="inline-flex items-center space-x-2 text-zinc-900 dark:text-white/90">
                <i class="fa-solid fa-location-dot"></i>
                <span /> No.125 Dambagahapitiya Kahataliyadda
              </div>
            </div>

            <div className="flex mt-5 space-x-4 text-xl text-zinc-900 dark:text-white/90">
              <a href="www.facebook.com">
                <i class="fa-brands fa-linkedin hover:"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-xl md:mr-30 ring-1 ring-slate-700 dark:bg-slate-600 dark:ring-slate-400">
            <form
              onSubmit={onSubmit}
              className="flex flex-col space-y-4 md:w-80"
            >
              <label htmlFor="" className="text-sm">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name here"
                required
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700 dark:ring-slate-900 dark:focus:ring-cyan-400"
              />
              <label htmlFor="" className="text-sm">
                E mail:
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="Enter your e-mail address"
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700 dark:ring-slate-900 dark:focus:ring-cyan-400"
              />
              <label htmlFor="" className="text-sm">
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700 dark:ring-slate-900 dark:focus:ring-cyan-400"
              />

              <button className="self-end inline-block px-4 py-2 text-sm bg-gray-200 rounded-lg shadow-xl ring-1 ring-slate-700 hover:bg-gray-500 hover:text-white hover:ring-1 hover:ring-white focus:outline-none dark:ring-white dark:bg-slate-800">
                Send message
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
