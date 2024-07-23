import React from "react";
import { Link } from "react-router-dom";
import links from "../Navlinks/Navlinks.json";
import TypeAnimation from "react-type-animation";
import pfp from "../Media/landing_page_pfp.jpg";

export default function Home() {
  return (
    <div className="font-serif h-full min-h-screen bg-white flex-col items-center flex">
      <div className="flex md:flex-row flex-col w-screen">
        <div className="">
          <img
            className="md:object-cover md:h-screen md:w-auto w-screen h-[500px] object-cover object-top"
            alt="Profile"
            src={pfp}
          ></img>
        </div>

        <div className="w-auto md:mt-40 lg:mt-40 flex flex-col gap-12 md:mx-8 xl:mx-auto m-16">
          <div className="text-5xl md:text-7xl lg:text-7xl font-bold">
            <TypeAnimation
              cursor={true}
              sequence={["JAMES HO"]}
              wrapper="a"
              repeat={1}
            />
          </div>
          <div className=" italic text-slate-500">
            <p>
              Deeply interested in human development, the future of humanity,
              and the role of technology
            </p>
            <p></p>
          </div>

          <div className="flex flex-col text gap-2">
            {links.navLinks.map((obj) => {
              let path = `/${obj.toLowerCase()}`;
              return (
                <nav className="transition hover:scale-150 hover:font-bold w-0">
                  <Link to={path}>{String(obj)}</Link>
                </nav>
              );
            })}
          </div>

          <div className=" text-sm text-slate-500">
            <p className=" underline">8.james.ho@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
