import React from "react";
import { Link } from "react-router-dom";
import links from "../Navlinks/Navlinks.json";
import TypeAnimation from "react-type-animation";

export default function Home() {
  return (
    <div className="h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-1/3 mt-40 flex flex-col gap-20">
        <div className="text-7xl font-bold">
          <TypeAnimation
            cursor={true}
            sequence={["JAMES HO"]}
            wrapper="a"
            repeat={1}
          />
        </div>

        <div className="flex flex-col text-sm gap-2">
          {links.navLinks.map((obj) => {
            let path = `/${obj.toLowerCase()}`;
            return (
              <nav className="transition hover:scale-150 hover:font-bold w-0">
                <Link to={path}>{String(obj)}</Link>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
}
