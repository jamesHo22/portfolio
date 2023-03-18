import React from "react";
import { Link } from "react-router-dom";
import links from "../Navlinks/Navlinks.json";
import TypeAnimation from "react-type-animation";
import BackgroundAnimation from "../Components/BackgroundAnimation";

export default function Home() {
  return (
    <div>
      <div className="h-full min-h-screen flex flex-col items-center z-10">
        <div className="w-4/5 md:w-2/3 lg:w-3/5 mt-40 flex flex-col gap-12 xl:w-auto xl:h-auto 2xl:w-auto">
          <div className="text-5xl md:text-7xl lg:text-7xl font-bold text-white">
            <TypeAnimation
              cursor={true}
              sequence={["JAMES HO"]}
              wrapper="a"
              repeat={1}
            />
          </div>
          <div className=" italic text-slate-300">
            <p>Breadth in experiences and interests</p>
            <p>Depth in mechanical engineering</p>
          </div>

          <div className="flex flex-col text gap-2 text-white">
            {links.navLinks.map((obj) => {
              let path = `/${obj.toLowerCase()}`;
              return (
                <nav className="transition hover:scale-150 hover:font-bold w-0">
                  <Link to={path}>{String(obj)}</Link>
                </nav>
              );
            })}
          </div>

          <div className=" text-sm text-slate-300">
            <p className=" underline">8.james.ho@gmail.com</p>
          </div>
        </div>
        {/* <div className=" bg-slate-600 -z-10 absolute h-screen w-screen">
          PEPE
        </div> */}
        <BackgroundAnimation className="-z-10 absolute h-screen w-screen" />
      </div>
    </div>
  );
}
