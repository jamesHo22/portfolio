import React, { useState } from "react";
import filler from "../Filler/filler.json";

export default function ItemFullView() {
  const [title, setTitle] = useState("");

  return (
    <div className="bg-white rounded-lg p-24 flex flex-col gap-12">
      <div className="flex flex-row  gap-8 ">
        <img
          className=" object-cover w-40 h-40 rounded"
          src={filler.ideas[0].full_article.image_src}
          alt="Logo"
        />
        <div className="w-full flex flex-col text-ellipsis overflow-hidden gap-4 justify-between">
          {/* <h1 className="text-4xl font-bold capitalize">
            {filler.ideas[0].full_article.title}
          </h1> */}

          <textarea
            type="text entry"
            id="small-input"
            placeholder="Untitled"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            rows="3"
            maxLength="95"
            class="w-full text-4xl font-bold capitalize border-0 focus:outline-none focus:ring-0 resize-none overflow-hidden"
          />

          <p className=" text-sm">Aug 8 2022</p>
        </div>
      </div>
    </div>
  );
}
