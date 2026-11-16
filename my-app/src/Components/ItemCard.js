import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import filler from "../Filler/filler.json";

export default function ItemCard(props) {
  let navigate = useNavigate();
  const location = useLocation();
  let externalLink = props.content.full_article?.link;
  console.log(externalLink);

  return (
    <div
      className={
        "bg-white rounded-lg transition h-fit lg:min-h-[12rem] flex flex-col items-center lg:flex-row cursor-pointer hover:shadow-lg hover:shadow-slate-500/50"
      }
      onClick={() => {
        if (externalLink !== undefined) {
          window.location.href = externalLink;
        }
      }}
    >
      <img
        className="object-cover w-auto h-auto lg:w-48 lg:h-48 lg:shrink-0 lg:self-start rounded-md lg:rounded-lg"
        src={props.content.full_article.image_src}
        alt="Logo"
      />
      <div className="mx-4 lg:mx-8 my-4 flex flex-col text-ellipsis overflow-hidden gap-4">
        <h1 className="text-2xl xl:text-3xl font-bold">
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
        <div className=" text-sm whitespace-pre-line">
          {props.content.full_article.body}
        </div>
      </div>
    </div>
  );
}
