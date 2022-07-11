import React from "react";
import TopNav from "../Components/TopNav";
import filler from "../Filler/filler.json";
import ItemCard from "../Components/ItemCard";

export default function Ideas() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        {filler.ideas.map((obj) => {
          console.log(obj);
          return <ItemCard content={obj} />;
        })}
      </div>
    </div>
  );
}
