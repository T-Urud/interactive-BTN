import React from "react";
import { motion } from "framer-motion";

const MenuPhase1 = ({ text, icon }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-2 w-[100px] h-[100px] rounded-xl p-4"
      whileHover={{ backgroundColor: "rgb(243 244 246)" }}
    >
      {icon}
      <span className="text-sm font-semibold">{text}</span>
    </motion.div>
  );
};

export default MenuPhase1;
