import React from "react";

export default function FunCard(props) {
  return (
    <div
      className="bg-paper rounded-lg transition hover:shadow-lg hover:shadow-stone-500/50 h-full flex flex-col cursor-pointer	"
      onClick={() => {
        // Navigate to the correct path
      }}
    >
      {props.content.full_article?.image_src ? (
        <img
          className=" object-cover w-full h-full rounded-t-lg"
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
