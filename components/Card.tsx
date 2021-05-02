import { useState } from "react";
import CardMenu from "../assets/card-menu.svg";
import { db, ITimeCard } from "../database/db";
import ClickAwayListener from "react-click-away-listener";

export function Card(card: ITimeCard) {
  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false);
  const openDeleteMenu = () => {
    setIsDeleteMenuOpen(true);
  };
  const closeDeleteMenu = () => {
    setIsDeleteMenuOpen(false);
  };

  const toggleDeleteMenu = () => {
    setIsDeleteMenuOpen((prev) => !prev);
  };

  const deleteCard = () => {
    db.timecards.delete(card.id);
  };
  return (
    <div
      style={{ flexBasis: "25%" }}
      className="border-[3px] border-[#EAEAEA] rounded-[10px] p-5 bg-white  relative sm:flex-1"
    >
      {isDeleteMenuOpen && (
        <ClickAwayListener onClickAway={closeDeleteMenu}>
          <div
            onClick={deleteCard}
            className="absolute hover:bg-gray-100 transition cursor-pointer text-red-600 font-medium shadow text-sm right-3 top-11 p-1 pl-3 pr-3 rounded z-20 border bg-white"
          >
            Delete Card
          </div>
        </ClickAwayListener>
      )}
      <div
        onClick={toggleDeleteMenu}
        className="h-5 w-5 cursor-pointer absolute right-4  justify-center items-center flex"
      >
        <CardMenu />
      </div>

      <p className="text-sm font-bold line-clamp-2">{card.text}</p>
      <div className="flex mt-7">
        <div className="text-4xl font-bold mr-4">
          <span className="mr-[6px]">10</span>
          <span className="text-sm font-semibold">Years</span>
        </div>

        <p className="text-4xl font-bold">
          <span className="mr-[6px]">12</span>
          <span className="text-sm font-semibold">Months Left</span>
        </p>
      </div>
      <div className="flex justify-between mt-4 text-sm font-semibold text-[#5C5C5C]">
        <p className="text-center">
          7 <br /> Days
        </p>
        <div className=" border-r-2 "></div>

        <p className="text-center">
          12 <br /> Hours
        </p>
        <div className=" border-r-2 "></div>
        <p className="text-center ">
          45 <br /> Minutes
        </p>
      </div>
    </div>
  );
}
