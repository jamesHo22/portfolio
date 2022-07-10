import React from "react";
import { Link } from "react-router-dom";
import links from "../Navlinks/Navlinks.json";

export default function Home() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-1/3 mt-40 flex flex-col gap-20">
        <div className="text-7xl font-bold">
          <h1>JAMES</h1>
          <h1>HO</h1>
        </div>

        <div className="flex flex-col text-sm gap-2">
          {links.navLinks.map((obj) => {
            let path = `/${obj.toLowerCase()}`;
            return (
              <nav>
                <Link to={path} className=" hover:underline">
                  {String(obj)}
                </Link>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
}
