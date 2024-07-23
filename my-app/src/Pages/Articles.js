import React, { useEffect, useState } from "react";
import TopNav from "../Components/TopNav";
import filler from "../Filler/filler.json";
import ToggleCard from "../Components/ToggleCard";
import { Link } from "react-router-dom";

export default function Articles() {
  let [mdContent, setMdContent] = useState("");

  return (
    <div className="font-serif h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-4/5 lg:w-2/3 my-20">
        <TopNav />
      </div>

      <div className="w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-[60rem] mb-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-start">
          {filler.articles.map((obj) => {
            console.log(obj);
            return (
              <nav className="w-full">
                <Link to={`./${obj.full_article.url}`}>
                  <ToggleCard content={obj} />
                </Link>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
}
