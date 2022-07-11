import React from "react";
import TopNav from "../Components/TopNav";
import ItemCard from "../Components/ItemCard";
import filler from "../Filler/filler.json";

export default function Fun() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
      </div>
    </div>
  );
}
