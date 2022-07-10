import React from "react";
import TopNav from "../Components/TopNav";
import ItemFullView from "../Components/ItemFullView";

export default function Project() {
  console.log("rendered full article");
  return (
    // <div>hello</div>
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from a database */}
          <ItemFullView />
        </div>
      </div>
    </div>
  );
}
