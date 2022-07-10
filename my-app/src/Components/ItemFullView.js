import React from "react";

export default function ItemFullView() {
  return (
    <div className="bg-white rounded-lg p-24 flex flex-col gap-12">
      <div className="flex flex-row  gap-8 ">
        <img
          className=" object-cover w-40 h-40 rounded"
          src={
            "https://images.theconversation.com/files/446778/original/file-20220216-13-f3zlzq.jpg?ixlib=rb-1.1.0&rect=65%2C14%2C2371%2C1674&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
          }
          alt="Logo"
        />
        <div className="flex flex-col text-ellipsis overflow-hidden gap-4 justify-between">
          <h1 className="text-4xl font-bold capitalize">
            The future is green and autonomous
          </h1>
          <p className=" text-sm">July 10th 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="">
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
