import React from "react";
import TopNav from "../Components/TopNav";
import ItemCard from "../Components/ItemCard";
import filler from "../Filler/filler.json";
import FunCard from "../Components/FunCard";

export default function Fun() {
  return (
    <div className="font-serif h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-4/5 lg:w-2/3 my-20">
        <TopNav />
      </div>

      <div className="w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-[60rem] mb-20 flex flex-col gap-20">
        <div className="flex flex-col gap-10 items-center">
          {filler.fun.map((obj) => {
            console.log(obj);
            return <FunCard content={obj} />;
          })}
        </div>
      </div>
    </div>
  );
}
