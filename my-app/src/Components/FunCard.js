import React from "react";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function FunCard(props) {
  const [show, setShow] = useState(200);
  let fullHeight = window.document.body.offsetHeight;

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(0);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <div
      className="bg-white rounded-lg transition hover:shadow-lg hover:shadow-slate-500/50 h-full flex flex-col cursor-pointer	"
      onClick={() => {
        // Navigate to the correct path
      }}
    >
      <Confetti height={fullHeight} numberOfPieces={show} />
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
