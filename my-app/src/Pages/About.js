import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TopNav from "../Components/TopNav";
import about from "../Content/Projects/About.md";

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
    <div className="h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
      </div>

      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
