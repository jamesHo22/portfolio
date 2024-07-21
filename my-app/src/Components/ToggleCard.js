import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import filler from "../Filler/filler.json";

export default function ToggleCard(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const [toggleBody, setToggleBody] = useState(false);

  return (
    <div
      className="w-full bg-white rounded-lg transition hover:shadow-lg hover:shadow-slate-500/50 h-fit lg:h-fit flex flex-col lg:flex-row cursor-pointer"
      onClick={() => {
        setToggleBody(!toggleBody);
        console.log(props.mdContent);
      }}
    >
      <div className="mx-4 lg:mx-8 my-4 flex flex-col text-ellipsis overflow-hidden gap-2 ">
        <div className="text-xs italic text-gray-600">
          {props.content.full_article.author}
        </div>
        <h1 className="text-l xl:text-2xl">
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

        {toggleBody ? (
          <div className="prose text-sm max-w-none my-4">
            <ReactMarkdown>{props.content.full_article.body}</ReactMarkdown>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
