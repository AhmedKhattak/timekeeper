import { ComponentType, useEffect, useState } from "react";
import CardMenu from "../assets/card-menu.svg";
import { db, ITimeCard } from "../database/db";
import ClickAwayListener from "react-click-away-listener";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { intervalToDuration } from "date-fns";

export function Card(card: ITimeCard) {
  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false);

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

              deleteCard();
            }}
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
      </div>
      <TimerCardContent card={card} />
      {/* <div className="flex mt-7">
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
      </div> */}
    </div>
  );
}

function TimerCardContent({ card }: { card: ITimeCard }) {
  const [duration, setDuration] = useState<Duration>();
  const [tick, setTick] = useState(false);
  useEffect(() => {
    switch (card.cardType) {
      case "countDown": {
        setDuration(
          intervalToDuration({
            start: new Date(),
            end: new Date(card.date),
          })
        );
        console.log(duration);
        break;
      }
      case "countUp": {
        setDuration(
          intervalToDuration({
            start: new Date(card.date),
            end: new Date(),
          })
        );
        console.log(duration);
        break;
      }
      default:
      // no op
    }
  }, [tick]);

  useEffect(() => {
    // change state every second
    setInterval(function tick() {
      setTick((prev) => !prev);
      // update every minute
    }, 60 * 1000);
  }, []);

  if (!(duration?.months > 0) && duration?.days) {
    return (
      <>
        <div className="flex mt-7">
          <div className="text-4xl font-bold mr-4">
            <span className="mr-[6px]">{duration.days}</span>
            <span className="text-sm font-semibold">
              {duration.days > 1 ? "Days" : "Day"}{" "}
              {card.cardType === "countDown" ? "Left" : "Passed"}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm font-semibold text-[#5C5C5C]">
          <p className="text-center">
            {duration.hours} <br /> Hours
          </p>
          <div className=" border-r-2 " />

          <p className="text-center">
            {duration.minutes} <br /> Minutes
          </p>
          {/* opacity 0 since it would change the layout of the flex children if i removed it */}
          <div className=" border-r-2 opacity-0 " />
          <p className="text-center opacity-0">
            {duration.seconds} <br /> Seconds
          </p>
        </div>
      </>
    );
  } else if (duration?.months > 0 && !(duration?.years > 0)) {
    return (
      <>
        <div className="flex mt-7">
          <div className="text-4xl font-bold mr-4">
            <span className="mr-[6px]">{duration.months}</span>
            <span className="text-sm font-semibold">
              <span className="text-sm font-semibold">
                {duration.months > 1 ? "Months" : "Month"}{" "}
                {card.cardType === "countDown" ? "Left" : "Passed"}
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm font-semibold text-[#5C5C5C]">
          <p className="text-center">
            {duration.days} <br /> Days
          </p>
          <div className=" border-r-2 "></div>

          <p className="text-center">
            {duration.hours} <br /> Hours
          </p>
          <div className=" border-r-2 "></div>
          <p className="text-center ">
            {duration.minutes} <br /> Minutes
          </p>
        </div>
      </>
    );
  } else if (duration?.years > 0) {
    return (
      <>
        <div className="flex mt-7">
          <div className="text-4xl font-bold mr-4">
            <span className="mr-[6px]">{duration.years}</span>
            <span className="text-sm font-semibold">
              <span className="text-sm font-semibold">
                {duration.months > 1 ? "Years" : "Year"}{" "}
              </span>
            </span>
          </div>
          <p className="text-4xl font-bold">
            <span className="mr-[6px]">12</span>
            <span className="text-sm font-semibold">
              {card.cardType === "countDown" ? "Left" : "Passed"}
            </span>
          </p>
        </div>
        <div className="flex justify-between mt-4 text-sm font-semibold text-[#5C5C5C]">
          <p className="text-center">
            {duration.days} <br /> Days
          </p>
          <div className=" border-r-2 "></div>

          <p className="text-center">
            {duration.hours} <br /> Hours
          </p>
          <div className=" border-r-2 "></div>
          <p className="text-center ">
            {duration.minutes} <br /> Minutes
          </p>
        </div>
      </>
    );
  } else {
    return null;
  }
}
