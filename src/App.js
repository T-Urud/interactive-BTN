import React, { useEffect, useState } from "react";
import MenuPhase1 from "./MenuPhase1";
import { motion, useAnimate } from "framer-motion";

function useBtnAnimation(click) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          inset: click ? "11rem 10rem" : "20rem 18rem",
        },
        { duration: 1.5 }
      );
    }
  }, [click, animate, scope]);
  return scope;
}

function App() {
  const [click, setClick] = useState(false);
  const scope = useBtnAnimation(click);

  return (
    <main>
      <div ref={scope} className="w-screen h-screen">
        <div
          className={
            click === true
              ? "absolute flex flex-col border bg-gray-100 z-0 border-gray-300 px-6 py-2 rounded-xl cursor-pointer max-w-[425px] min-w-[310px]"
              : "absolute flex items-center justify-center gap-2 border border-gray-300 shadow-xl px-6 py-2 rounded-xl cursor-pointer w-[180px]"
          }
          onClick={() => setClick(!click)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="14"
            height="14"
            className={click === true ? "hidden" : ""}
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
          <span>Create New</span>

          {click && (
            <div className="absolute z-10 !inset-0 bg-white rounded-xl border border-gray-300 shadow-xl grid grid-cols-3 justify-items-center items-center max-w-[calc(100% - 72px)] w-full h-[275px] p-4 mt-[55px] mr-10">
              <motion.div
                className="flex flex-col justify-center items-center gap-2 w-24 h-24 rounded-xl"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z" />
                </svg>
                <span>Project</span>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center w-24 h-24"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="15.75"
                  viewBox="0 0 576 512"
                >
                  <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
                </svg>
                <span>Goal</span>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center w-24 h-24"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l224 0 0-80c0-17.7 14.3-32 32-32l80 0 0-224c0-8.8-7.2-16-16-16L64 80zM288 480L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224 0 5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7l-5.5 0z" />
                </svg>
                <span>Note</span>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center w-24 h-24"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                </svg>
                <span>Reminder</span>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center w-24 h-24"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z" />
                </svg>
                <span>Milestone</span>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center w-24 h-24"
                whileHover={{ backgroundColor: "rgb(243 244 246)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <span>Task</span>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
