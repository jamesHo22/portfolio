import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import filler from "../Filler/filler.json";

export default function ItemCard(props) {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="bg-white rounded-lg transition hover:shadow-lg hover:shadow-violet-500/50 h-48 flex flex-row cursor-pointer	"
      onClick={() => {
        // Navigate to the correct path
        // navigate(
        //   `${location.pathname}/${String(props.content.full_article.title)}`
        // );
      }}
    >
      <img
        className=" object-cover w-48 h-48 rounded-l-lg"
        src={props.content.full_article.image_src}
        alt="Logo"
      />
      <div className="mx-8 my-4 flex flex-col text-ellipsis overflow-hidden gap-4">
        <h1 className="text-3xl font-bold">
          {props.content.full_article.title}
        </h1>
        {/* Check if the tags field exists */}
        {props.content.full_article.tags ? (
          <div className="flex flex-row">
            {props.content.full_article?.tags.map((obj) => {
              return (
                <div>
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                    {obj}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div />
        )}

        {/* <ReactMarkdown>{props.content.full_article.body}</ReactMarkdown> */}
        <div className=" text-sm">{props.content.full_article.body}</div>
      </div>
    </div>
  );
}
