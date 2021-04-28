import Logo from "../assets/logo.svg";
// import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

export function Nav() {
  // const isTabletSize = useMediaQuery({ query: "(min-width: 892px)" });

  return (
    <>
      {/* mobile nav */}
      <nav className="border-b-2 border-[#EAEAEA] h-14 z-50 bg-white fixed left-0 right-0 flex md-two:hidden justify-between">
        <div className="flex items-center pl-2 pr-2">
          <Logo width={26} height={26} className="mr-1" />
          <span className="font-bold">TimeKeeper</span>
        </div>
        <div className="sm:hidden mr-2">Menu</div>
        <div className="hidden sm:flex items-center pl-4 pr-4 space-x-6">
          <a>About</a>
          <a>Linkedin</a>
          <a>Github</a>
        </div>
      </nav>

      {/* tablet and above nav */}
      <nav
        className={
          "hidden border-b-2 bg-white border-[#EAEAEA] p-4 z-50  fixed left-0 right-0 md-two:flex item-center"
        }
      >
        <div className="flex justify-between w-full md:max-w-6xl md:mx-auto">
          <div className="flex items-center pl-2 pr-2">
            <Logo width={36} height={36} className="mr-2" />
            <span className="font-bold text-2xl">TimeKeeper</span>
          </div>
          <div className="sm:hidden mr-2">Menu</div>
          <div className="hidden sm:flex items-center pl-4 pr-4 space-x-6">
            <a>About</a>
            <a>Linkedin</a>
            <a>Github</a>
          </div>
        </div>
      </nav>
    </>
  );
}
