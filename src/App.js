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
              className={
                click === true
                  ? "w-full flex flex-col border bg-[#F0EBE3] z-0 border-gray-300 px-6 py-2 rounded-xl !max-w-[425px] !min-w-[310px]"
                  : "flex items-center justify-center gap-2 border bg-[#F0EBE3] border-gray-300 shadow-xl rounded-xl cursor-pointer w-[180px]"
              }
              initial={{ width: "fit-content" }}
              animate={{
                width: click ? "100%" : "fit-content",
                scale: click ? [0, 1.1] : [1.1, 1],
              }}
              transition={{ duration: 0.35 }}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="14"
                  height="14"
                  className={click ? "hidden" : ""}
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                </svg>
                <span className="font-semibold">Create New</span>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setClick(click);
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
              </div>
              <motion.div
                className={
                  click
                    ? "bg-[#F6F5F2] rounded-xl border border-gray-300 shadow-xl flex flex-wrap justify-center items-center gap-2 p-4  h-[275px] overflow-hidden"
                    : "hidden"
                }
                animate={{
                  scale: click ? [0, 1] : 1,
                  opacity: click ? [0, 1] : 0,
                  transition: {
                    scale: { delay: 0.4, duration: 0.3 },
                    opacity: { duration: 1 },
                  },
                }}
                // transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MenuPhase1 text="Project" icon={<FolderIcon />} />
                <MenuPhase1 text="Task" icon={<TaskIcon />} />
                <MenuPhase1 text="Note" icon={<NoteIcon />} />
                <MenuPhase1 text="Goal" icon={<TrophyIcon />} />
                <MenuPhase1 text="Milestone" icon={<FlagIcon />} />
                <MenuPhase1 text="Reminder" icon={<BellIcon />} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>

    // <main>
    //   <div className="w-screen h-screen flex items-center justify-center">
    //     <div>
    //       <AnimatePresence>
    //         {click && (
    //           <motion.div
    //             key="animatedContainer"
    //             id="animatedContainer"
    //             className="flex flex-col border bg-gray-100 z-0 border-gray-300 px-6 py-2 rounded-xl max-w-[425px] min-w-[310px]"
    //             initial={{ scale: 0.9, opacity: 0 }}
    //             animate={{ scale: 1.1, opacity: 1 }}
    //             exit={{ scale: 0.9, opacity: 0 }}
    //             transition={{ duration: 0.8, ease: "easeInOut" }}
    //           >
    //             <div className="flex items-center justify-between mb-4">
    //               <span className="">Create New</span>
    //               <div
    //                 className="cursor-pointer"
    //                 onClick={() => setClick(false)}
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   height="18"
    //                   width="18"
    //                   viewBox="0 0 512 512"
    //                 >
    //                   <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    //                 </svg>
    //               </div>
    //             </div>

    //             <motion.div
    //               className="bg-[rgb(253,255,255)] rounded-xl border border-gray-300 shadow-xl flex flex-wrap justify-center items-center gap-2 p-4  h-[275px]"
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{ duration: 1.2 }}
    //             >
    //               <motion.div
    //                 className="flex flex-col justify-center items-center gap-2 w-[100px] h-[100px] rounded-xl p-4"
    //                 whileHover={{ backgroundColor: "rgb(243 244 246)" }}
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   height="18"
    //                   width="18"
    //                   fill="#d7d7d7"
    //                   viewBox="0 0 512 512"
    //                 >
    //                   <path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z" />
    //                 </svg>
    //                 <span className="text-sm font-semibold">Project</span>
    //               </motion.div>

    //               {/* Other items go here */}
    //             </motion.div>
    //           </motion.div>
    //         )}
    //       </AnimatePresence>

    //       {!click && (
    //         <motion.div
    //           className="flex items-center justify-center gap-2 border border-gray-300 shadow-xl px-6 py-2 rounded-xl cursor-pointer w-[180px]"
    //           onClick={() => setClick(true)}
    //           initial={{ scale: 1 }}
    //           animate={{ scale: 1.1 }}
    //           transition={{ duration: 0.6, ease: "easeInOut" }}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 448 512"
    //             width="14"
    //             height="14"
    //           >
    //             <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
    //           </svg>
    //           <span>Create New</span>
    //         </motion.div>
    //       )}
    //     </div>
    //   </div>
    // </main>
  );
}

export default App;
