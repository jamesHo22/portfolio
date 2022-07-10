import React from "react";
import links from "../Navlinks/Navlinks.json";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {
  // This shifts the UI so the selected item is always first
  const location = useLocation(); // get the current path of the webpage
  const pageName = location.pathname.slice(1).toLocaleLowerCase(); // gets the current page name
  const lowercaseNavLinks = links.navLinks.map((obj) =>
    obj.toLocaleLowerCase()
  );
  const removeId = lowercaseNavLinks.indexOf(pageName);
  lowercaseNavLinks.splice(removeId, 1); // remove the current item from the list
  lowercaseNavLinks.unshift(links.navLinks[removeId]);

  return (
    <div className="flex flex-row text-sm gap-8 items-baseline">
      {lowercaseNavLinks.map((obj) => {
        let path = `/${obj.toLowerCase()}`;
        let currentNavItem = obj.toLocaleLowerCase();
        if (currentNavItem == pageName) {
          return (
            <nav>
              <Link to={path} className="text-7xl font-bold capitalize">
                {String(obj)}
              </Link>
            </nav>
          );
        }
        return (
          <nav>
            <Link to={path} className=" hover:underline capitalize">
              {String(obj)}
            </Link>
          </nav>
        );
      })}
    </div>
  );
}
