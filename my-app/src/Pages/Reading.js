import React, { useEffect, useState } from "react";
import TopNav from "../Components/TopNav";
import ItemCard from "../Components/ItemCard";
import filler from "../Filler/filler.json";
import FunCard from "../Components/FunCard";
import ToggleCard from "../Components/ToggleCard";
import about from "../Content/Projects/About.md";

export default function Reading() {
  let [mdContent, setMdContent] = useState("");

  useEffect(() => {
    fetch(about)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log(text);
        setMdContent(text);
      });
  }, []);

  return (
    <div className="h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-4/5 lg:w-2/3 my-20">
        <TopNav />
      </div>

      <div className="w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-[60rem] mb-20 flex flex-col gap-8">
        <div className="text-2xl xl:text-3xl font-bold">Recent Reads</div>
        <div className="flex flex-col gap-2 items-start">
          {filler.reading.map((obj) => {
            console.log(obj);
            return <ToggleCard content={obj} />;
          })}
        </div>
      </div>
    </div>
  );
}
