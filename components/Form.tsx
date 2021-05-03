import SearchIcon from "../assets/search.svg";
import PlusIcon from "../assets/plus.svg";
import FilterIcon from "../assets/filter.svg";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import ClickAwayListener from "react-click-away-listener";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { AnimatePresence, motion } from "framer-motion";

interface IForm {
  onCreateButtonClick: () => void;
}
export function Form({ onCreateButtonClick }: IForm) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  console.log("isMenuOpen", isMenuOpen);

  return (
    <div>
      {/* desktop nav */}
      <div
        // onClick={(e) => {
        //   e.stopPropagation();
        //   return false;
        // }}
        className="hidden md-one:flex relative  items-center pt-16 pb-6 border-b-[1px] border-[#D3D3D3] "
      >
        <p className="font-semibold text-3xl">Timers</p>

        <ClickAwayListener
          onClickAway={(e) => {
            console.log("desktop clickaway");
            // e.stopPropagation();
            setIsMenuOpen(false);
            // return false;
          }}
          mouseEvent="onClick"
          touchEvent={false}
        >
          <div className="flex ml-auto  items-center space-x-4">
            <button
              onClick={onCreateButtonClick}
              className="pl-5 pr-5 bg-[#476D1A]  h-[44px] rounded-[10px] text-white flex justify-center items-center  text-[16px] "
            >
              <PlusIcon className="mr-3" />
              <span>Add Card</span>
            </button>
            <div className="w-96 rounded-[10px] flex-1  border-2 h-[46px] border-[#EAEAEA]  relative">
              <input
                placeholder="Search Cards"
                type="text"
                className="form-input outline-none appearance-none w-full rounded-[10px] h-full  pl-2 pr-9 font-medium  transition border-transparent "
              />
              <SearchIcon className="absolute right-2 top-[7px]" />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("desktop filter ");
                toggleMenu();
                // return false;
              }}
              className=" pl-5 pr-5   h-[44px] border-4 border-[#D3D3D3] rounded-[10px] flex justify-center items-center text-[16px]"
            >
              <span>Filter</span>
              <FilterIcon className="ml-3" />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, zIndex: 50, y: 0 }}
                  transition={{ easings: "linear", duration: 0.15 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("desktop menu div ");
                    // return false;
                  }}
                  // className="absolute bg-white rounded-[10px] z-50 x-sm:left-auto  x-sm:w-72 h-72 right-0 left-0 top-[140px] p-5 shadow-md"
                  className="absolute hidden md-one:block z-50 bg-white shadow-md rounded-[10px] max-w-xs  w-72  h-72 right-0  top-[120px] p-5"
                >
                  <p className="font-bold rounded-[10px] mb-2">Sort By</p>
                  <p className="p-2 rounded-[10px] mt-1 mb-1">Title</p>
                  <p className="p-2 bg-[#EBEEE8] rounded-[10px] mt-1 mb-2">
                    Date
                  </p>
                  <p className="font-bold rounded-[10px]  mb-2">Group by</p>
                  <p className="p-2 rounded-[10px] mt-1 mb-1">Card type</p>

                  <div className="absolute bottom-0 left-0 right-0 rounded-bl-[10px] rounded-br-[10px] flex justify-end p-3 bg-[#F0F3EC]">
                    <button className="pl-5 pr-5 bg-[#476D1A]  h-[33px] rounded-[10px] text-white flex justify-center items-center  text-[16px] ">
                      <PlusIcon className="mr-3" />
                      <span>Add Card</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ClickAwayListener>
      </div>
      {/* mobile nav */}
      <div
        // onClick={(e) => {
        //   e.stopPropagation();
        //   return false;
        // }}
        className="block relative  md-one:hidden"
      >
        <p className="font-semibold mb-2">Timers</p>
        <form>
          <div className="w-full rounded-[10px] border-2 h-10 border-[#EAEAEA] text-sm relative">
            <input
              placeholder="Search Cards"
              type="text"
              className=" outline-none appearance-none w-full rounded-[10px] h-full  pl-2 pr-9 font-medium  transition border-transparent "
            />
            <SearchIcon className="absolute right-2 top-[7px]" />
          </div>
        </form>
        <ClickAwayListener
          onClickAway={(e) => {
            // e.stopPropagation();
            setIsMenuOpen(false);
            // return false;
          }}
          mouseEvent="onClick"
          touchEvent={false}
        >
          <div>
            <div className="flex mt-3 pb-5 justify-end border-b-[1px] border-[#D3D3D3]">
              <button
                onClick={onCreateButtonClick}
                className=" pl-4 pr-4 bg-[#476D1A] h-10 rounded-[10px] text-white flex justify-center items-center mr-1 text-[14px] "
              >
                <PlusIcon className="mr-3" />
                <span>Add Card</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu();
                  // return false;
                }}
                className=" pl-4 pr-4  h-10 ml-1 border-4 border-[#D3D3D3] rounded-[10px] flex justify-center items-center text-[14px]"
              >
                <span>Filter</span>
                <FilterIcon className="ml-3" />
              </button>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  onClick={(e) => {
                    e.stopPropagation();
                    // return false;
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, zIndex: 50, y: 0 }}
                  transition={{ easings: "linear", duration: 0.15 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white rounded-[10px] z-50 x-sm:left-auto  x-sm:w-72 h-72 right-0 left-0 top-[140px] p-5 shadow-md"
                >
                  <p className="font-bold rounded-[10px] mb-2">Sort By</p>
                  <p className="p-2 rounded-[10px] mt-1 mb-1">Title</p>
                  <p className="p-2 bg-[#EBEEE8] rounded-[10px] mt-1 mb-2">
                    Date
                  </p>
                  <p className="font-bold rounded-[10px]  mb-2">Group by</p>
                  <p className="p-2 rounded-[10px] mt-1 mb-1">Card type</p>

                  <div className="absolute bottom-0 left-0 right-0 rounded-bl-[10px] rounded-br-[10px] flex justify-end p-3 bg-[#F0F3EC]">
                    <button className="pl-5 pr-5 bg-[#476D1A]  h-[33px] rounded-[10px] text-white flex justify-center items-center  text-[16px] ">
                      <PlusIcon className="mr-3" />
                      <span>Add Card</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}
