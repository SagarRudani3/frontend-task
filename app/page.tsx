"use client";

import { motion } from "framer-motion";
import WithoutSimbian from "@/components/WithoutSimbian";
import WithSimbian from "@/components/WithSimbian";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Security Operations Experience
        </motion.h1>
        
        <div className="space-y-24">
          <WithoutSimbian />
          <WithSimbian />
        </div>
      </div>
    </main>
  );
}