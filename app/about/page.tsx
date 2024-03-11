"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [showName, setShowName] = useState<boolean>(false);
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showSkilled, setShowSkilled] = useState<boolean>(false);
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showFront, setShowFront] = useState<boolean>(false);

  return (
    <div className="md:flex justify-center flex-row  md:flex-col md:justify-between">
      <div className="md:fixed mt-[80px] mx-[128px] justify-center items-center md:items-start flex flex-col md:justify-between">
        <div>
          <div className="text-5xl md:text-8xl font-bold antialiased tracking-tight -leading-7">
            <Link href="/">
            ABOUT
            </Link>
          </div>
        </div>
        <div className="mt-[96px] gap-10 flex flex-col">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-11">
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
            <div
              className={
                showName
                  ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] "
                  : "hidden"
              }
            >
              <h1 className="font-semibold text-2xl text-white">
                OTHMAN SALAHI
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-11">
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:flex-row gap-11 ">
              <div
                onMouseEnter={() => {
                  setShowLocation(true);
                }}
                onMouseLeave={() => {
                  setShowLocation(false);
                }}
                className="relative w-[154px] -top-1 -left-1  flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[154px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                <h1 className="font-semibold text-2xl text-black">Location</h1>
              </div>
              <div
                className={
                  showLocation
                    ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] "
                    : "hidden"
                }
              >
                <h1 className="font-semibold text-2xl text-white">
                  DAKHLA / MAR
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-11">
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:flex-row gap-11 ">
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
              <div
                className={
                  showSkilled
                    ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] "
                    : "hidden"
                }
              >
                <h1 className="font-semibold text-2xl text-white">
                  FRONT / BACK
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-11">
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:flex-row gap-11 ">
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
              <div
                className={
                  showBack
                    ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] "
                    : "hidden"
                }
              >
                <h1 className="font-semibold text-2xl text-white">
                  PYTHON / PHP
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:flex-row gap-11">
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:flex-row gap-11 ">
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
              <div
                className={
                  showFront
                    ? "relative w-[280px] -top-1 -left-1 flex justify-center items-center bg-gray-500 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[280px] before:border-2 before:border-white before:transition-all before:content-[''] "
                    : "hidden"
                }
              >
                <h1 className="font-semibold text-2xl text-white">
                  REACT/ HTML/ JS/
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center mx-[180px]  mt-[96px] md:mt-[180px] ">
        <div className="gap-12 justify-center items-center flex flex-col">
          <div className="relative border-2 md:w-98 h-48 -top-1 -left-1 flex font-bold text-lg md:text-2xl flex-col justify-center gap-8 bg-black py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:md:w-[405px] before:w-[258px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            <h1>- npm install job</h1>
            <h1>- npm ERR! HIRING NOT FOUND</h1>
          </div>

          <div className="mt-12 relative border-2 w-64 h-28 -top-1 -left-1 flex font-bold text-lg md:text-2xl flex-col justify-center items-center gap-8 bg-black py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-64 before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <h1>FIX THE NPM</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
