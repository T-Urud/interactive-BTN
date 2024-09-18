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

  return (
    <main>
      <div className="w-screen h-screen flex items-center justify-center">
        <div>
          <AnimatePresence>
            <motion.div
              key="menu"
              className={
                click
                  ? "flex flex-col border bg-[#F0EBE3] z-0 border-gray-300 px-6 py-2 rounded-xl !max-w-[425px] !min-w-[310px] h-[320px] w-fit"
                  : "flex items-center justify-center gap-2 border bg-[#F0EBE3] border-gray-300 shadow-xl rounded-xl cursor-pointer w-fit"
              }
              animate={{
                // scale: click ? 1 : 0.8,
                // opacity: click ? 1 : 1,
                scale: click ? [0.3, 1.1] : [1.1, 1],
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              exit={{ scale: 1, opacity: 0 }}
            >
              <div
                className={
                  click
                    ? "flex items-center justify-between gap-2 mb-4"
                    : "flex items-center justify-between gap-2 px-6 py-2 w-full"
                }
                onClick={() => {
                  setClick(!click);
                }}
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
                    className="cursor-pointer"
                    onClick={() => {
                      setClick(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      width="18"
                      viewBox="0 0 512 512"
                      className={!click ? "hidden" : "flex"}
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                    </svg>
                  </div>
                )}
              </div>
              {click && (
                <div className="bg-[#F6F5F2] rounded-xl border border-gray-300 flex flex-wrap justify-center items-center gap-x-2 gap-y-4 p-4 shadow-md">
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
