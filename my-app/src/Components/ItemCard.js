import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import filler from "../Filler/filler.json";

export default function ItemCard(props) {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="bg-white rounded-lg hover:shadow h-64 flex flex-row cursor-pointer	"
      onClick={() => {
        // Navigate to the correct path
        navigate(
          `${location.pathname}/${String(props.content.full_article.title)}`
        );
      }}
    >
      <img
        className=" object-cover w-64 h-64 rounded-l-lg"
        src={props.content.full_article.image_src}
        alt="Logo"
      />
      <div className="m-8 flex flex-col text-ellipsis overflow-hidden gap-4">
        <h1 className="text-3xl font-bold">
          {props.content.full_article.title}
        </h1>
        <p className=" text-sm">{props.content.full_article.body}</p>
      </div>
    </div>
  );
}
