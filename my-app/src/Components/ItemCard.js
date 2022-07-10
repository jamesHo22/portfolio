import React, { useState } from "react";

export default function ProjectCard() {
  return (
    <div
      className="bg-white rounded-lg hover:shadow h-64 flex flex-row"
      onClick={() => {
        alert("clicked");
      }}
    >
      <img
        className=" object-cover w-64 h-64 rounded-l-lg"
        src={
          "https://www.bostondynamics.com/sites/default/files/styles/advanced_technology/public/2020-10/spot-eap2x.png?itok=rNmWulKy"
        }
        alt="Logo"
      />
      <div className="m-8 flex flex-col text-ellipsis overflow-hidden gap-4">
        <h1 className="text-3xl font-bold">
          Generative Design of Electromechanical Actuators
        </h1>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
