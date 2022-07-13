import React from "react";
import ItemCard from "../Components/ItemCard";
import ItemFullView from "../Components/ItemFullView";
import TopNav from "../Components/TopNav";
import filler from "../Filler/filler.json";
import { auth } from "../firebae-conf";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  console.log(user);
  return (
    <div className="h-full min-h-screen bg-light-yellow flex flex-col items-center">
      <div className="w-2/3 my-20 flex flex-col gap-20">
        <TopNav />
        <div className="flex flex-col gap-10">
          {/* TODO: populate this from a database */}
          {filler.projects.map((obj) => {
            console.log(obj);
            return <ItemCard content={obj} />;
          })}
        </div>
        {user != null ? (
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              navigate("/new-article");
            }}
          >
            Add article
          </button>
        ) : null}
      </div>
    </div>
  );
}
