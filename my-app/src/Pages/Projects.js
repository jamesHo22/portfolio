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
    <div className="h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from markdown */}
          {filler.experience.map((obj) => {
            console.log(obj);
            return <ItemCard content={obj} />;
          })}
        </div>
      </div>
    </div>
  );
}
