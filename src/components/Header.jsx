import React, { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkmode, setDarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <nav className="flex justify-between px-8 py-2 md:px-16 bg-slate-100 text-stone-950  dark:bg-slate-950 dark:text-white items-center">
      <Link to={"/"}>
      <h1 className="text-2xl font-semibold">GeoFetch</h1>
      </Link>
      <div className="flex justify-center items-center gap-4">
        {darkmode ?  <FaRegMoon />:<IoSunny/>}
        <button onClick={() => setDarkmode((prev) => !prev)} className="bg-black p-4 text-white rounded-3xl dark:bg-white dark:text-black">
          {darkmode ? "Darkmode" : "Lightmode"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
