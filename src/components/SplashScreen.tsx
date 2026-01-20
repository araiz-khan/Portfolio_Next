"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  return (
    <motion.div
      // 1. Initial State
      initial={{ opacity: 1 }}
      // 2. Animate out (Fade out and slide up slightly)
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
      // 3. Styling to cover the whole screen
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Your Logo Animation inside the splash screen */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        {/* Replace this SVG with your actual Logo */}
        <div className="w-8 h-8 bg-gray-600 rounded-full" /> 
        <h1 className="text-white text-2xl font-bold font-sans">Animate UI</h1>
      </motion.div>
    </motion.div>
  );
}