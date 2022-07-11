import React from "react";
import TopNav from "../Components/TopNav";
import ItemCard from "../Components/ItemCard";
import filler from "../Filler/filler.json";
import FunCard from "../Components/FunCard";

export default function Fun() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from a database */}
          {filler.fun.map((obj) => {
            console.log(obj);
            return <FunCard content={obj} />;
          })}
        </div>
      </div>
    </div>
  );
}
