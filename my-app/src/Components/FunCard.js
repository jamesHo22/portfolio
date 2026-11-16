import React from "react";

export default function FunCard(props) {
  return (
    <div className="bg-paper h-full flex flex-col">
      {props.content.full_article?.image_src ? (
        <img
          className=" object-cover w-full h-full"
          src={props.content.full_article.image_src}
          alt="Logo"
        />
      ) : (
        <div />
      )}

      <div className="m-4 flex flex-col text-ellipsis overflow-hidden gap-4">
        <h1 className="text-2xl xl:text-3xl font-bold">
          {props.content.full_article.title}
        </h1>
        <p className=" text-sm">{props.content.full_article.body}</p>
      </div>
    </div>
  );
}
