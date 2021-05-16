import Logo from "../assets/logo.svg";
// import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { ClickAwayListener } from "@material-ui/core";
import GithubSVG from "../assets/github.svg";
import LinkedInSVG from "../assets/linkedin.svg";

export function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenuTrigger = useMediaQuery({
    query: "(min-width:520px)",
  });

  // useEffect(() => {
  //   if (hideMenuTrigger) {
  //     setMenuOpen(false);
  //   }
  // }, [hideMenuTrigger]);

  return (
    <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
      <nav
        style={{ zIndex: 99 }}
        className={
          " border-b-2 bg-white border-[#EAEAEA] p-4   fixed left-0 right-0 md-two:flex item-center"
        }
      >
        <div className="relative flex justify-between w-full md:max-w-6xl md:mx-auto">
          <div className="flex md-two:hidden  items-center pl-2 pr-2">
            <Logo width={26} height={26} className="mr-1" />
            <span className="font-bold">TimeKeeper</span>
          </div>

          <div className="hidden md-two:flex items-center pl-2 pr-2">
            <Logo width={36} height={36} className="mr-2" />
            <span className="font-bold text-2xl">TimeKeeper</span>
          </div>

          <div onClick={toggle} className="m-sm:hidden flex cursor-pointer">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition hover:text-[#476D1A]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition hover:text-[#476D1A]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          <div className="hidden m-sm:flex items-center pl-4 pr-4 space-x-6 font-medium">
            <a onClick={toggle} className="hover:underline cursor-pointer">
              About
            </a>
            <a
              className="hover:underline cursor-pointer"
              href="https://www.linkedin.com/in/ahmedkhattak/"
              target="_blank"
              rel="noopener"
            >
              LinkedIN
            </a>
            <a
              className="hover:underline cursor-pointer"
              href="https://github.com/AhmedKhattak"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.18,
                  easings: "linear",
                }}
                className="absolute bg-white  m-sm:left-auto m-sm:w-96 rounded-b-md  md-two:top-[54px] m-sm:right-0   p-4 pl-5 pr-5 left-[-13px] right-[-13px] top-[44px] z-0 border-b-2 shadow-sm space-y-5 flex flex-col"
              >
                <a
                  href="https://github.com/AhmedKhattak"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-row items-center space-x-3 cursor-pointer hover:underline"
                >
                  <GithubSVG fill="black" />
                  <span> Github</span>
                </a>
                <a
                  href="https://github.com/AhmedKhattak"
                  target="_blank"
                  rel="noopener"
                  className="flex flex-row  items-center space-x-3 cursor-pointer hover:underline"
                >
                  <LinkedInSVG fill="black" />
                  <span>LinkedIn</span>
                </a>

                <p>
                  <h5 className="font-semibold mb-2">About</h5>
                  Track time <b>passed</b> or time <b>left</b> for things that
                  are important to you! Uses NextJS, Tailwind CSS and DexieJS
                  (wrapper over IndexedDB).
                </p>
                <p>Made with ❤️ Islamabad</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </ClickAwayListener>
  );
}
