import React from "react";
import ProjectCard from "../Components/ItemCard";
import ItemFullView from "../Components/ItemFullView";
import TopNav from "../Components/TopNav";

export default function Projects() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from a database */}
          <ItemFullView />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
