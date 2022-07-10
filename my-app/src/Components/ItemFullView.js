import React from "react";
import filler from "../Filler/filler.json";

export default function ItemFullView() {
  return (
    <div className="bg-white rounded-lg p-24 flex flex-col gap-12">
      <div className="flex flex-row  gap-8 ">
        <img
          className=" object-cover w-40 h-40 rounded"
          src={filler.ideas[0].full_article.image_src}
          alt="Logo"
        />
        <div className="flex flex-col text-ellipsis overflow-hidden gap-4 justify-between">
          <h1 className="text-4xl font-bold capitalize">
            {filler.ideas[0].full_article.title}
          </h1>
          <p className=" text-sm">{filler.ideas[0].full_article.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="">{filler.ideas[0].full_article.body}</p>
        <p className="">{filler.ideas[0].full_article.body}</p>
        <p className="">{filler.ideas[0].full_article.body}</p>
        <p className="">{filler.ideas[0].full_article.body}</p>
      </div>
    </div>
  );
}
