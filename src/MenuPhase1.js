import React from "react";
import { motion } from "framer-motion";

const MenuPhase1 = ({ text, icon }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-2 w-[100px] h-[100px] rounded-xl p-4 bg-[#ffffff9c] cursor-pointer"
      whileHover={{ scale: 1.04, background: "white" }}
    >
      {icon}
      <span className="text-sm font-semibold">{text}</span>
    </motion.div>
  );
};

export default MenuPhase1;
