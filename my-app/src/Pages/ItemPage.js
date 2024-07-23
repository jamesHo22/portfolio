import React, { useEffect, useState } from "react";
import TopNav from "../Components/TopNav";
import ItemFullView from "../Components/ItemFullView";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function ItemPage() {
  let [content, setContent] = useState("");

  useEffect(() => {
    const importComponent = async () => {
      import(`../Content/Articles/${params.articleName}.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setContent(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
    importComponent();
  }, []);

  console.log("rendered full article");
  let params = useParams();
  console.log(params); // "hotspur"
  return (
    // <div>hello</div>
    <div className="font-serif h-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="mx-auto prose flex-col">
          {/* TODO: populate this from a database */}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
