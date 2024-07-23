import React, { useRef, useState } from "react";
import links from "../Navlinks/Navlinks.json";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {
  // This shifts the UI so the selected item is always first
  const location = useLocation(); // get the current path of the webpage
  let pageName = location.pathname.slice(1).toLocaleLowerCase(); // gets the current page name
  pageName = pageName.split("/")[0];
  const lowercaseNavLinks = links.navLinks.map((obj) =>
    obj.toLocaleLowerCase()
  );
  console.log(pageName);
  const removeId = lowercaseNavLinks.indexOf(pageName);
  //   lowercaseNavLinks.splice(removeId, 1); // remove the current item from the list
  //   lowercaseNavLinks.unshift(links.navLinks[removeId]);

  return (
    <div className="py-2 px-4 flex flex-row text-sm gap-8 items-baseline transition overflow-x-auto overflow-y-hidden snap-mandatory snap-x lg:justify-center">
      {lowercaseNavLinks.map((obj) => {
        let path = `/${obj.toLowerCase()}`;
        let currentNavItem = obj.toLocaleLowerCase();
        if (currentNavItem == pageName) {
          return (
            <nav className="snap-start">
              <Link
                to={path}
                className="text-5xl lg:text-7xl font-bold capitalize"
              >
                {String(obj)}
              </Link>
            </nav>
          );
        }
        return (
          <div className=" snap-start">
            <nav className="transition hover:scale-150 hover:font-bold">
              <Link to={path} className="capitalize">
                {String(obj)}
              </Link>
            </nav>
          </div>
        );
      })}
      {/* <p>
        {mouseX}, {mouseY}, {dist}, {scale}
      </p> */}
    </div>
  );
}
