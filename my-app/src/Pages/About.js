import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TopNav from "../Components/TopNav";
import about from "../Content/Projects/About.md";
import launch from "../Media/launch.gif";

export default function About() {
  let [content, setContent] = useState("");

  useEffect(() => {
    fetch(about)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log(text);
        setContent(text);
      });
  }, []);

  return (
    <div className="font-serif h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-4/5 lg:w-2/3 my-20">
        <TopNav />
      </div>

      <div className="prose mb-16 mx-8 lg:mx-16">
        <img
          className="object-cover w-24 h-24 lg:w-32 lg:h-32 rounded-md lg:rounded-lg"
          src={launch}
          alt="Logo"
        />
        <ReactMarkdown>{content}</ReactMarkdown>

        <div className=" text-sm text-slate-500 my-10">
          <p className=" underline">8.james.ho@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
