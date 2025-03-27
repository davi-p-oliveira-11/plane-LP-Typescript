"use client";

import React from "react";
import { logos } from "../constants/LogoCarousel";
import { motion } from "framer-motion";

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex space-x-12"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-32 h-32 object-contain scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
