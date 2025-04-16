"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { DivideIcon as LucideIcon } from "lucide-react";
import { generateRandomAlert } from "@/lib/utils";

interface AlertCardProps {
  title: string;
  count: number;
  icon: any;
  color: string;
  description: string;
}

export default function AlertCard({ title, count, icon: Icon, color, description }: AlertCardProps) {
  const [alerts, setAlerts] = useState<string[]>([]);
  console.log("%c Line:18 🍡 alerts", "color:#ed9ec7", alerts);
  const colorMap = {
    red: "bg-red-500/10 text-red-500",
    yellow: "bg-yellow-500/10 text-yellow-500",
    orange: "bg-orange-500/10 text-orange-500",
    green: "bg-green-500/10 text-green-500",
  };

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        const newAlert = generateRandomAlert();
        setAlerts((prev) => [newAlert, ...prev.slice(0, 2)]);
      }, Math.random() * 3000 + 2000);

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${colorMap[color as keyof typeof colorMap]} rounded-xl p-6 backdrop-blur-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <motion.span
          key={count}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold"
        >
          {count}
        </motion.span>
      </div>

      <p className="text-sm mb-4 opacity-80">{description}</p>

      <div className="space-y-2">
        <AnimatePresence>
          {alerts.map((alert, index) => (
            <motion.div
              key={`${alert}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-sm py-2 px-3 rounded bg-white/5"
            >
              {alert}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}