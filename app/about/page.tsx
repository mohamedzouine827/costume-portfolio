"use client";
import React, { useState } from "react";

export default function page() {
  const [showName, setShowName] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSkilled, setShowSkilled] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showFront, setShowFront] = useState(false);

  return (
    <div>
      <div className="fixed mt-[80px] mx-[128px] flex flex-col justify-between">
        <div>
          <h1 className="text-8xl font-bold antialiased tracking-tight -leading-7">
            ABOUT
          </h1>
        </div>
        <div className="mt-[112px] gap-10 flex flex-col">
        <div className="flex flex-row gap-11">
          <div
            onMouseEnter={() => {
              setShowName(true);
            }}
            onMouseLeave={() => {
              setShowName(false);
            }}
            className="relative w-[154px] -top-1 -left-1  flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
          >
            <h1 className="font-semibold text-2xl text-black">Name</h1>
          </div>
          <div className={showName? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] " : "hidden"}>
              <h1 className="font-semibold text-2xl text-white">
                OTHMAN SALAHI
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-11">
          <div
            onMouseEnter={() => {
              setShowLocation(true);
            }}
            onMouseLeave={() => {
              setShowLocation(false);
            }}
            className="relative w-[154px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
          >
            <h1 className="font-semibold text-2xl text-black">Location</h1>
          </div>
          <div className={showLocation ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] " : "hidden"}>
              <h1 className="font-semibold text-2xl text-white">
                DAKHLA / MAR
              </h1>
            </div>

          </div>
          <div className="flex flex-row gap-11">
          <div
            onMouseEnter={() => {
              setShowSkilled(true);
            }}
            onMouseLeave={() => {
              setShowSkilled(false);
            }}
            className="relative w-[154px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
          >
            <h1 className="font-semibold text-2xl text-black">Skilled</h1>
          </div>
          <div className={showSkilled ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] " : "hidden"}>
              <h1 className="font-semibold text-2xl text-white">
                FRONT / BACK
              </h1>
            </div>

          </div>
          <div className="flex flex-row gap-11">
          <div
            onMouseEnter={() => {
              setShowBack(true);
            }}
            onMouseLeave={() => {
              setShowBack(false);
            }}
            className="relative w-[154px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
          >
            <h1 className="font-semibold text-2xl text-black">Back</h1>
          </div>
          <div className={showBack ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] " : "hidden"}>
              <h1 className="font-semibold text-2xl text-white">
                PYTHON / PHP
              </h1>
            </div>
          </div>
          <div>
          <div className="flex flex-row gap-11">
            <div
              onMouseEnter={() => {
                setShowFront(true);
              }}
              onMouseLeave={() => {
                setShowFront(false);
              }}
              className="relative w-[154px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
            >
              <h1 className="font-semibold text-2xl text-black">Front</h1>
            </div>
            <div className={showFront ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] " : "hidden"}>
              <h1 className="font-semibold text-2xl text-white">
                REACT/ HTML/ JS/
              </h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
