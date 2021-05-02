import { ComponentType, useState } from "react";
import CardMenu from "../assets/card-menu.svg";
import { db, ITimeCard } from "../database/db";
import ClickAwayListener from "react-click-away-listener";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// const LinesEllipsisNoSSR: ComponentType<{
//   text: string;
//   maxLine: string;
//   ellipsis: string;
//   trimRight: boolean;
//   basedOn: string;
// }> = dynamic(() => import("react-lines-ellipsis").then((x) => x), {
//   ssr: false,
// });

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
      className="border-[3px] border-[#EAEAEA]    rounded-[10px] p-5 bg-white  relative sm:flex-1"
    >
      {/* // <ClickAwayListener onClickAway={closeDeleteMenu}> */}
      <AnimatePresence initial={true}>
        {isDeleteMenuOpen && (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, zIndex: 50, y: 0 }}
            whileHover={{
              backgroundColor: "rgba(243, 244, 246)",
              transition: { duration: 0.2 },
            }}
            transition={{ easings: "linear", duration: 0.15 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={(e) => {
              e.stopPropagation();
              e.bubbles = false;
              deleteCard();
            }}
            // className="absolute      right-5 top-[50px] bg-white"

            className="absolute  cursor-pointer text-red-600 font-medium shadow text-sm right-5 top-[50px] p-4 rounded-md  border bg-white"
          >
            Delete Card
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={toggleDeleteMenu}
        style={{ cursor: "pointer" }}
        className="h-10 w-10 top-2 bg-gray-50 rounded  absolute right-4 justify-center items-center flex"
      >
        <CardMenu className="hover:text-red-300" />
      </div>

      <div
        style={{
          overflowX: "hidden",
          wordWrap: "break-word",
        }}
        className="text-sm max-w-full line-clamp-2 font-bold mr-9 "
      >
        {card.text}
        {/* kept just in case its later needed */}
        {/* <LinesEllipsisNoSSR
          text={card.text}
          maxLine="2"
          ellipsis="..."
          trimRight={false}
          basedOn="letters"
        /> */}
      </div>
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
