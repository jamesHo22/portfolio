import React from "react";
import TopNav from "../Components/TopNav";

export default function About() {
  return (
    <div className="h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
      </div>
    </div>
  );
}
