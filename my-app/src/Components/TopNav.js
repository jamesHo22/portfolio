import React, { useRef, useState } from "react";
import links from "../Navlinks/Navlinks.json";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [dist, setDist] = useState(0);
  const [scale, setScale] = useState(0);
  const myRef = useRef();

  function getCenterOfElement() {
    const h = myRef.current.offsetHeight;
    const w = myRef.current.offsetWidth;
    // Calculate centers of the elements
    const X = myRef.current.offsetLeft + 0.5 * w;
    const Y = myRef.current.offsetTop + 8 * h;
    console.log(X, Y, h, w);
    return { X, Y };
  }

  function onMouseMove(e) {
    let x = e.screenX;
    let y = e.screenY;
    let { X, Y } = getCenterOfElement();
    setMouseX(x);
    setMouseY(y);
    setDist(getDistance(x, y, X, Y));
    setScale((5 / dist) * 1.5);
  }

  function getDistance(x, y, X, Y) {
    return Math.sqrt(Math.abs(x - X) ** 2 + Math.abs(y - Y) ** 2);
  }
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
    <div
      onMouseMove={onMouseMove}
      className="flex flex-row text-sm gap-8 items-baseline"
    >
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
          <div>
            <nav className="transition hover:scale-[2] hover:font-bold">
              <Link ref={myRef} to={path} className="capitalize">
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
