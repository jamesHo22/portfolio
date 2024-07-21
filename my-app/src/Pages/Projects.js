import React from "react";
import ItemCard from "../Components/ItemCard";
import ItemFullView from "../Components/ItemFullView";
import TopNav from "../Components/TopNav";
import filler from "../Filler/filler.json";
import { auth } from "../firebae-conf";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="font-serif h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-4/5 lg:w-2/3 my-20">
        <TopNav />
      </div>

      <div className="w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-[60rem] mb-20 flex flex-col gap-20">
        <div className="flex flex-col gap-10 items-center">
          {filler.experience.map((obj) => {
            console.log(obj);
            return (
              <ItemCard
                content={obj}
                onClick={() => {
                  alert(obj.full_article?.link);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
