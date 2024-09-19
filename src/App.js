import React, { useEffect, useState } from "react";
import { ReactComponent as BellIcon } from "./svg/bell.svg";
import { ReactComponent as FlagIcon } from "./svg/flag.svg";
import { ReactComponent as FolderIcon } from "./svg/folder.svg";
import { ReactComponent as NoteIcon } from "./svg/note.svg";
import { ReactComponent as TaskIcon } from "./svg/task.svg";
import { ReactComponent as TrophyIcon } from "./svg/trophy.svg";
import MenuPhase1 from "./MenuPhase1";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [click, setClick] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <main>
      <div className="w-screen h-screen flex items-center justify-center">
        <div>
          <AnimatePresence>
            <motion.div
              key="menu"
              className={`flex border border-gray-300 bg-[#F0EBE3] rounded-xl shadow-xl w-fit ${
                click
                  ? "flex-col !max-w-[425px] !min-w-[310px] h-full"
                  : "items-center justify-center gap-2 cursor-pointer"
              } `}
              animate={{
                scale: click ? [0.3, 1.1] : [1.1, 1],
                padding: isHover && click ? "0 10px 12px" : "",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              exit={{ scale: 1, opacity: 0 }}
            >
              <motion.div
                className={`flex items-center justify-between gap-2 px-[10px] py-2 ${
                  click ? "" : "w-full"
                }`}
                onClick={() => {
                  setClick(!click);
                }}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
              >
                {!click && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="14"
                    height="14"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                )}
                <span className="font-semibold">Create New</span>
                {click && (
                  <div
                    className="cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setClick(false);
                    }}
                  >
                    {isHover && (
                      <motion.span
                        className="text-xs font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                      >
                        Close
                      </motion.span>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      width="18"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                    </svg>
                  </div>
                )}
              </motion.div>
              {click && (
                <div className="bg-[#F6F5F2] rounded-xl border border-gray-300 flex flex-wrap justify-center items-center gap-x-4 gap-y-4 p-4 shadow-md">
                  <MenuPhase1 text="Project" icon={<FolderIcon />} />
                  <MenuPhase1 text="Task" icon={<TaskIcon />} />
                  <MenuPhase1 text="Note" icon={<NoteIcon />} />
                  <MenuPhase1 text="Goal" icon={<TrophyIcon />} />
                  <MenuPhase1 text="Milestone" icon={<FlagIcon />} />
                  <MenuPhase1 text="Reminder" icon={<BellIcon />} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default App;
