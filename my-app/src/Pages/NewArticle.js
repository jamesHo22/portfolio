import React from "react";
import ItemFullView from "../Components/ItemFullView";

export default function NewArticle() {
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from a database */}
          <ItemFullView />
        </div>
      </div>
    </div>
  );
}
